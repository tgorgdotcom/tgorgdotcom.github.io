// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tgorg.com',
	integrations: [mdx(), sitemap(), pagefind()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'a750 sans',
			cssVariable: '--font-a750',
			fallbacks: ['Arial Black', 'sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/a750-sans-medium-webfont.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/a750-sans-bold-webfont.woff2'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'My Handwriting',
			cssVariable: '--font-myHandwriting',
			fallbacks: ['Comic Sans', 'Chalkboard', 'sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/MyHandwriting-Regular.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					}
				],
			},
		}
	],
});
