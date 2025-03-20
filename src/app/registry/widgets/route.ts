// src/app/api/widgets/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const registryPath = path.join(process.cwd(), 'registry');
  const styles = ['default', 'new-york']; // Add more styles as needed

  try {
    const widgetList = await Promise.all(
      styles.map(async (style) => {
        const widgetsDir = path.join(registryPath, style, 'widgets');
        const files = await fs.readdir(widgetsDir);
        const widgets = files
          .filter((file) => file.endsWith('.dart'))
          .map((file) => ({
            name: file.replace('.dart', ''),
            style,
            path: `/registry/widgets/${style}/${file.replace('.dart', '')}`,
          }));
        return widgets;
      })
    );

    // Flatten the array of widget arrays into a single list
    const allWidgets = widgetList.flat();

    return NextResponse.json({
      widgets: allWidgets,
    });
  } catch (error) {
    console.error('Error fetching widgets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch widget list' },
      { status: 500 }
    );
  }
}