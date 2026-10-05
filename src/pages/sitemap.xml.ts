import type { APIRoute } from 'astro';
import { site } from '../i18n/content';

// Les pages CV sont en noindex (version imprimable du parcours) : hors du sitemap
const pages = [
	{ fr: '/', en: '/en/' },
] as const;

export const GET: APIRoute = () => {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = pages.flatMap((page) =>
		Object.values(page).map((path) => {
			const links = Object.entries(page)
				.map(([lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${site.url}${href}"/>`)
				.join('');
			return `<url><loc>${site.url}${path}</loc><lastmod>${lastmod}</lastmod>${links}</url>`;
		}),
	);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>\n`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
