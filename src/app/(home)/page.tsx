"use client"

import { useState } from 'react'; 
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button" 
import { Github, Twitter, Copy, Check, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("flutter pub add flutcn_ui")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <main className="flex-1">
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link href="/docs" className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
          Introducing flutcn-ui 1.0
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Beautiful Flutter components</h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Beautifully designed components for your Flutter apps. Open source. Customizable. For developers and
          designers.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="gap-1">
            <Link href="/docs">
              Get Started <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/components">Components</Link>
          </Button>
        </div>
      </div>
    </section>
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Build Flutter apps faster</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          flutcn-ui is a collection of beautifully designed Flutter widgets that you can copy and paste into your
          apps.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="font-bold">Open Code</h3>
            <p className="text-sm text-muted-foreground">
              The top layer of your widget code is open for modification.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="font-bold">Composition</h3>
            <p className="text-sm text-muted-foreground">
              Every widget uses a common, composable interface, making them predictable.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="font-bold">Distribution</h3>
            <p className="text-sm text-muted-foreground">
              A flat-file schema and command-line tool make it easy to distribute widgets.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="font-bold">Beautiful Defaults</h3>
            <p className="text-sm text-muted-foreground">
              Carefully chosen default styles, so you get great design out-of-the-box.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="font-bold">Material 3 Support</h3>
            <p className="text-sm text-muted-foreground">
              Built with Material 3 design principles for modern Flutter apps.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="font-bold">Adaptive Design</h3>
            <p className="text-sm text-muted-foreground">
              Widgets adapt seamlessly between iOS, Android, web, and desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="installation" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Installation</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-center">
          flutcn-ui is easy to install and use in your Flutter projects.
        </p>
        <div className="w-full max-w-[48rem] overflow-hidden rounded-lg border bg-background">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-sm p-1 hover:bg-muted" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="p-4 text-sm">
            <pre className="font-mono">flutter pub add flutcn_ui</pre>
          </div>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="usage" className="w-full max-w-[48rem]">
            <TabsList className="w-full">
              <TabsTrigger value="usage" className="flex-1">
                Usage
              </TabsTrigger>
              <TabsTrigger value="customization" className="flex-1">
                Customization
              </TabsTrigger>
              <TabsTrigger value="themes" className="flex-1">
                Themes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="usage" className="rounded-lg border bg-background p-4 text-sm">
              <pre className="font-mono">
                {`import 'package:flutter/material.dart';
import 'package:flutcn_ui/flutcn_ui.dart';

void main() {
runApp(const MyApp());
}

class MyApp extends StatelessWidget {
const MyApp({Key? key}) : super(key: key);

@override
Widget build(BuildContext context) {
return FlutcnApp(
  theme: FlutcnThemeData.light(),
  darkTheme: FlutcnThemeData.dark(),
  home: Scaffold(
    body: Center(
      child: FlutcnButton(
        onPressed: () {},
        child: Text('Hello flutcn-ui'),
      ),
    ),
  ),
);
}
}`}
              </pre>
            </TabsContent>
            <TabsContent value="customization" className="rounded-lg border bg-background p-4 text-sm">
              <pre className="font-mono">
                {`// Create your own button by extending FlutcnButton
class MyCustomButton extends FlutcnButton {
const MyCustomButton({
Key? key,
required VoidCallback onPressed,
required Widget child,
}) : super(
key: key,
onPressed: onPressed,
style: FlutcnButtonStyle(
  backgroundColor: Colors.purple,
  foregroundColor: Colors.white,
  padding: EdgeInsets.symmetric(
    horizontal: 24,
    vertical: 12,
  ),
  borderRadius: BorderRadius.circular(8),
),
child: child,
);
}`}
              </pre>
            </TabsContent>
            <TabsContent value="themes" className="rounded-lg border bg-background p-4 text-sm">
              <pre className="font-mono">
                {`// Create a custom theme
final myTheme = FlutcnThemeData.light().copyWith(
colorScheme: ColorScheme.fromSeed(
seedColor: Colors.indigo,
brightness: Brightness.light,
),
buttonTheme: FlutcnButtonThemeData(
borderRadius: BorderRadius.circular(12),
elevation: 0,
),
cardTheme: FlutcnCardThemeData(
elevation: 2,
borderRadius: BorderRadius.circular(16),
),
);

// Use your custom theme
FlutcnApp(
theme: myTheme,
// ...
)`}
              </pre>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Components</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-center">
          flutcn-ui includes a wide range of components for building beautiful Flutter apps.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-[58rem] mt-8">
          {[
            "Button",
            "Card",
            "Checkbox",
            "Dialog",
            "Dropdown",
            "Input",
            "Radio",
            "Select",
            "Slider",
            "Switch",
            "Tabs",
            "Toast",
          ].map((component) => (
            <Link
              key={component}
              href={`/components/${component.toLowerCase()}`}
              className="flex items-center justify-between rounded-lg border bg-background p-4 hover:bg-muted"
            >
              <span>{component}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/components">View all components</Link>
        </Button>
      </div>
    </section>
    <section className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to get started?</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Start building beautiful Flutter apps with flutcn-ui today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/flutcn-ui/flutcn-ui" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
  );
}
