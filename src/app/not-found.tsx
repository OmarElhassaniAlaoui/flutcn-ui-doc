import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-neutral-200 dark:text-neutral-800">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved or doesn&apos;t exist.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg" className="gap-1">
          <Link href="/">
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-1">
          <Link href="/docs">
            Browse Docs <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
