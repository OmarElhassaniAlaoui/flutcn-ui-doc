import Link from "next/link";
import { Button } from "@/components/ui/button";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Spotlight } from "@/components/ui/spotlight-new";
import  Footer  from "@/components/layout/footer";

export default function HomePage() {
  return (
      <section className="h-96  pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-screen flex-col items-center gap-4 text-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <Link href="/docs" className="flex items-center gap-1">
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  Introducing Flutcn UI
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </Link>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Beautiful Flutter Widgets <br /> For Elegant Apps
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A Flutter widgets library inspired by shadcn/ui that helps you
            build beautiful user interfaces with minimal effort.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="gap-1">
              <Link href="/docs/gettingstarted">
                Get Started <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs/widgets">Widgets</Link>
            </Button>
          </div>
        </div>
      </section>
  );
}
