"use client";

import { useTheme } from "next-themes";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  name: string;
  height?: number;
  children?: ReactNode;
}

export function ComponentPreview({
  name,
  height = 400,
  children,
}: ComponentPreviewProps) {
  const { resolvedTheme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  // Wait for client mount to avoid hydration mismatch from useTheme()
  useEffect(() => {
    setMounted(true);
  }, []);

  // Send postMessage to iframe when theme changes
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        { type: "theme-change", theme },
        "*"
      );
    }
  }, [theme]);

  const previewUrl = `/preview/${name}?theme=${theme}`;

  return (
    <div className="not-prose my-6">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          {children && <TabsTrigger value="code">Code</TabsTrigger>}
        </TabsList>
        <TabsContent value="preview">
          <div
            className={cn(
              "relative rounded-lg border bg-background overflow-hidden",
              "border-border"
            )}
          >
            {(!mounted || isLoading) && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-muted/50"
                style={{ height }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                  <span className="text-sm text-muted-foreground">
                    Loading preview...
                  </span>
                </div>
              </div>
            )}
            {mounted && (
              <iframe
                ref={iframeRef}
                src={previewUrl}
                width="100%"
                height={height}
                style={{ border: "none", display: "block" }}
                loading="lazy"
                title={`${name} preview`}
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </TabsContent>
        {children && (
          <TabsContent value="code">
            <div className="rounded-lg border border-border overflow-hidden">
              {children}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
