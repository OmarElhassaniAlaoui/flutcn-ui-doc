import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ style: string; name: string }> } 
) {
  const params = await context.params; // Await the params
  const { style, name } = params;
  console.log("Style:", style, "Name:", name); // Debug log

  const filePath = path.join(process.cwd(), "registry", `${style}/${name}.dart`);

  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Widget not found" }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    return new Response(fileContent, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}