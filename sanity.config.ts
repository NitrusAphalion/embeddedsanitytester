'use client';

/**

 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route

 */

import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { defineConfig } from 'sanity';
import { markdownSchema } from 'sanity-plugin-markdown';
import { singletonTools } from 'sanity-plugin-singleton-tools';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schema';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  name: 'default',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema(),
    singletonTools(),
    media(),
  ],
  schema,
});
