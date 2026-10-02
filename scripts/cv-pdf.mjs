// Imprime les pages CV construites (dist/) en PDF avec Chrome headless.
// Le CSS étant intégré aux pages (build.inlineStylesheets), aucun serveur n'est nécessaire.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const chrome = process.env.CHROME_PATH ?? 'google-chrome';

const targets = [
	{ page: 'dist/cv/index.html', pdf: 'dist/cv/ariitehau-domelier-cv.pdf' },
	{ page: 'dist/en/cv/index.html', pdf: 'dist/en/cv/ariitehau-domelier-resume.pdf' },
];

for (const { page, pdf } of targets) {
	if (!existsSync(page)) throw new Error(`${page} introuvable : lancer astro build d'abord`);
	execFileSync(
		chrome,
		[
			'--headless=new',
			'--disable-gpu',
			'--no-sandbox',
			'--no-pdf-header-footer',
			`--print-to-pdf=${resolve(pdf)}`,
			pathToFileURL(resolve(page)).href,
		],
		{ stdio: 'ignore' },
	);
	if (!existsSync(pdf)) throw new Error(`échec de la génération de ${pdf}`);
	console.log(`PDF généré : ${pdf}`);
}
