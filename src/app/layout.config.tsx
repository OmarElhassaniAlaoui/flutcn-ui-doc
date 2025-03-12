import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/OmarElhassaniAlaoui/flutcn_ui",
  nav: {
    title: (
      <>
        <Image
          src="/icons/logo-dark.svg"
          width={30}
          height={30}
          alt="Flutcn-ui Logo"
        />
        <span>Flutcn-ui</span>
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
