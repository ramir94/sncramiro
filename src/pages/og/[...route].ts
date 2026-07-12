import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { SITE_DESCRIPTION } from '../../consts.js';

const posts = await getCollection('posts', ({ data }) => !data.draft);

// Una imagen por artículo + una por defecto para el resto del sitio.
const pages: Record<string, { title: string; description: string }> = {
  'default.png': {
    title: 'sncramiro',
    description: SITE_DESCRIPTION,
  },
};
for (const post of posts) {
  pages[`${post.id}.png`] = {
    title: post.data.title,
    description: 'sncramiro.com · notas sobre ServiceNow',
  };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    padding: 70,
    bgGradient: [
      [7, 20, 23],
      [15, 37, 41],
    ],
    border: { color: [98, 216, 78], width: 12, side: 'inline-start' },
    fonts: ['./src/fonts/Inter-Regular.ttf', './src/fonts/Inter-Bold.ttf'],
    font: {
      title: {
        color: [232, 242, 238],
        size: 62,
        weight: 'Bold',
        lineHeight: 1.15,
        families: ['Inter'],
      },
      description: {
        color: [124, 160, 152],
        size: 30,
        weight: 'Normal',
        families: ['Inter'],
      },
    },
  }),
});
