import fs from "fs";
import path from "path";
import { NextResponse } from "next/server"; 

export async function GET(
  req: Request,
  context: { params: Promise<{ palette: string , style: string }> }
) {
  const params = await context.params; // Await the params
  const { palette , style } = params;
  console.log("Palette:", palette); // Debug log

  const filePath = path.join(process.cwd(), "registry", `${style}/themes/${palette}/app_palette.dart`);

  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Color scheme not found" }, { status: 404 });
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