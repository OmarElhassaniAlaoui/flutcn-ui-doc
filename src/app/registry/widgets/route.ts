import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const registryPath = path.join(process.cwd(), "registry");
  const styles = ["new-york"];
  
  try {
    const widgetList = await Promise.all(
      styles.map(async (style) => {
        const widgetsDir = path.join(registryPath, style, "widgets");
        const files = await fs.readdir(widgetsDir);
        const widgets = files
          .filter((file) => file.endsWith(".dart"))
          .map((file) => ({
            name: file.replace(".dart", ""),
            link: `/registry/widgets/${style}/${file.replace(".dart", "")}`,
            style,
          }));
        return widgets;
      })
    );
    
    const allWidgets = widgetList.flat();
    
    return new NextResponse(
      JSON.stringify({ widgets: allWidgets }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error("Error fetching widgets:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch widget list" }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}