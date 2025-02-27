import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const components = loader({
  baseUrl: '/docs/components',
  source: docs.toFumadocsSource(),
});

export const themes = loader({
  baseUrl: '/docs/themes',
  source: docs.toFumadocsSource(),
});