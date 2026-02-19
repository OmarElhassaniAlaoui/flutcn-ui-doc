import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ComponentPreview } from "@/components/ui/component-preview";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      tableOfContent={{
        style: "clerk",
      }}
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, ComponentPreview }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const slugPath = params.slug?.join("/") || "";
  const keywords = slugPath.includes("widgets") 
    ? ["Flutter widgets", "Flutter UI components", page.data.title, "Flutcn UI"]
    : slugPath.includes("themes")
    ? ["Flutter themes", "Flutter dark theme", "Flutcn UI themes"]
    : ["Flutter", "Flutcn UI", page.data.title];

  return {
    title: page.data.title,
    description: page.data.description,
    keywords,
    openGraph: {
      title: `${page.data.title} | Flutcn UI`,
      description: page.data.description,
      type: "article",
      publishedTime: new Date().toISOString(),
    },
  };
}
