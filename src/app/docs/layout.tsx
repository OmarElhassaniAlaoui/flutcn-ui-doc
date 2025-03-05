import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { Footer } from 'node_modules/fumadocs-ui/dist/page.client';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions} sidebar={{ tabs: false }}>
      {children}
    </DocsLayout>
  );
}
