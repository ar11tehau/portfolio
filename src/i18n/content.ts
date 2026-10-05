import type { ImageMetadata } from 'astro';
import snackScreenshot from '../assets/project-snack.png';
import portfolioScreenshot from '../assets/project-portfolio.png';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const site = {
	name: 'Ariitehau Domelier',
	url: 'https://domelier.fr',
	email: 'arii.fullstack@gmail.com',
	github: 'https://github.com/ar11tehau',
	linkedin: 'https://www.linkedin.com/in/domelier',
} as const;

export interface Project {
	title: string;
	/** Le problème de départ */
	need: string;
	/** Ce qui a été construit pour y répondre */
	answer: string;
	tags: readonly string[];
	status: 'production' | 'development';
	url?: string;
	repo?: string;
	image?: ImageMetadata;
}

export interface TimelineEntry {
	period: string;
	title: string;
	place: string;
	details?: readonly string[];
}

export interface Content {
	meta: { title: string; description: string; ogLocale: string };
	nav: { switchLabel: string; switchHref: string; switchLang: Locale };
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		ctaContact: string;
		ctaProjects: string;
		ctaCv: string;
		photoAlt: string;
		photoCaption: string;
		coordinates: string;
	};
	approach: {
		eyebrow: string;
		title: string;
		intro: string;
		steps: readonly { title: string; description: string; tags: readonly string[] }[];
	};
	projects: {
		eyebrow: string;
		title: string;
		screenshotAlt: string;
		status: Record<Project['status'], string>;
		needLabel: string;
		answerLabel: string;
		sourceLabel: string;
		items: readonly Project[];
	};
	career: {
		eyebrow: string;
		title: string;
		experience: string;
		education: string;
		experienceItems: readonly TimelineEntry[];
		educationItems: readonly TimelineEntry[];
		languages: string;
		offScreen: string;
	};
	contact: { eyebrow: string; lead: string; sub: string };
	cv: {
		title: string;
		headline: string;
		summary: string;
		skills: string;
		skillList: readonly string[];
		print: string;
		file: string;
	};
	notFound: { title: string; lead: string; back: string };
}

const fr: Content = {
	meta: {
		title: 'Ariitehau Domelier — Développeur full-stack à Toulouse',
		description:
			'Développeur full-stack chez Datakode à Toulouse (Laravel, Vue.js, Nuxt), après dix ans dans la Marine nationale, dont sept comme prévisionniste météo.',
		ogLocale: 'fr_FR',
	},
	nav: { switchLabel: 'English', switchHref: '/en/', switchLang: 'en' },
	hero: {
		eyebrow: 'Ariitehau Domelier · Toulouse',
		title: 'Développeur full‑stack, ancien prévisionniste météo',
		lead: 'Je travaille chez Datakode sur des applications web pour des clients : on discute du besoin, je développe avec Laravel, Vue.js et Nuxt, puis je m’occupe de la mise en ligne et du suivi. Avant ça, j’ai passé dix ans dans la Marine nationale, dont sept à faire de la prévision météo et océanographique.',
		ctaContact: 'Contact',
		ctaProjects: 'Voir les réalisations',
		ctaCv: 'Télécharger le CV',
		photoAlt: 'Portrait d’Ariitehau Domelier',
		photoCaption: 'Tahiti → Toulouse',
		coordinates: '17°32′S 149°34′W → 43°36′N 1°26′E',
	},
	approach: {
		eyebrow: 'Façon de travailler',
		title: 'Partir du problème, pas de la technique',
		intro: 'En météo, une prévision ne sert à rien si la personne en face ne la comprend pas. Un outil numérique, c’est pareil : il doit répondre à un vrai problème, et rester simple pour ceux qui s’en servent.',
		steps: [
			{
				title: 'Comprendre le besoin',
				description:
					'Avant d’écrire du code, échanger avec les personnes qui vont utiliser l’outil : comment elles travaillent, ce qui coince, ce qui compte vraiment.',
				tags: ['Ateliers', 'Cadrage', 'Chiffrage'],
			},
			{
				title: 'Développer',
				description:
					'Des applications web sur mesure, avec une idée en tête : qu’on puisse s’en servir sans mode d’emploi.',
				tags: ['Laravel', 'Vue.js', 'Nuxt', 'Astro'],
			},
			{
				title: 'Mettre en ligne et suivre',
				description:
					'Hébergement, déploiement, mises à jour, support. Un outil n’est utile que s’il continue de marcher.',
				tags: ['Hébergement', 'Déploiement continu', 'Support'],
			},
		],
	},
	projects: {
		eyebrow: 'Réalisations',
		title: 'Quelques projets',
		screenshotAlt: 'Capture d’écran du site',
		status: { production: 'En service', development: 'En développement' },
		needLabel: 'Le point de départ',
		answerLabel: 'Ce qui a été fait',
		sourceLabel: 'Code source',
		items: [
			{
				title: 'Snack Te Ava Iti',
				need: 'Le snack de ma mère, à Tahiti. Les clients voulaient voir le menu et les prix sur leur téléphone, y compris les touristes qui ne connaissent pas le franc pacifique.',
				answer: 'Un site simple, pensé pour le mobile : le menu, les prix convertis en euros et en dollars, et le numéro pour commander en un clic. Il se met à jour tout seul chaque jour.',
				tags: ['Site vitrine', 'Mobile', 'Mise à jour automatique'],
				status: 'production',
				url: 'https://snackteavaiti.com',
				image: snackScreenshot,
				repo: 'https://github.com/ar11tehau/snack',
			},
			{
				title: 'Outil météo pour le BTP',
				need: 'Sur un chantier, beaucoup de décisions dépendent de la météo.',
				answer: 'Un outil d’aide à la décision qui croise prévisions météo et données géographiques du chantier. C’est là que mes deux métiers se rejoignent.',
				tags: ['Aide à la décision', 'Données météo', 'Cartographie'],
				status: 'development',
			},
			{
				title: 'domelier.fr',
				need: 'Avoir un endroit où présenter mon parcours, en français et en anglais.',
				answer: 'Ce site. Il tourne sur mon propre serveur et se met à jour automatiquement à chaque modification, CV compris.',
				tags: ['Site bilingue', 'Hébergement', 'Déploiement continu'],
				status: 'production',
				url: 'https://domelier.fr',
				image: portfolioScreenshot,
				repo: 'https://github.com/ar11tehau/portfolio',
			},
		],
	},
	career: {
		eyebrow: 'Parcours',
		title: 'De la météo au développement',
		experience: 'Expérience',
		education: 'Formation',
		experienceItems: [
			{
				period: 'oct. 2024 – aujourd’hui',
				title: 'Développeur full-stack',
				place: 'Datakode — Auterive (CDI)',
				details: [
					'Projets web clients de bout en bout, dans une équipe de quatre',
					'Cadrage du besoin et relation client : ateliers, chiffrage, suivi',
					'Conception et développement d’applications Laravel, Vue.js et Nuxt',
					'Déploiement, infrastructure, maintien en conditions opérationnelles et support',
				],
			},
			{
				period: 'mars – août 2024',
				title: 'Ingénieur de développement full-stack (stage)',
				place: 'Alteca — Toulouse',
				details: ['Application web d’invitation des collaborateurs aux événements d’entreprise (Angular, Python, GitLab)'],
			},
			{
				period: '2018 – 2023',
				title: 'Expert prévisionniste météo',
				place: 'Centre interarmées de soutien météorologique aux forces, Marine nationale — Toulouse',
				details: [
					'Prévisions opérationnelles : modèles numériques, données satellite et in situ, briefings décisionnels sous contrainte de temps',
					'Soutien météo à distance des unités déployées',
					'Outils VBA : génération automatique des briefings à partir du serveur météo, archivage de la production quotidienne, mise à jour des données d’un site',
				],
			},
			{
				period: '2016 – 2018',
				title: 'Expert prévisionniste météo, pool embarqué',
				place: 'Centre d’expertise météorologique et océanographique, Marine nationale — Brest',
				details: [
					'Prévision à bord, au sein d’un nouvel équipage à chaque mission',
					'Adaptation du soutien aux contraintes opérationnelles',
				],
			},
		],
		educationItems: [
			{
				period: '2023 – 2024',
				title: 'Développeur d’applications full-stack',
				place: 'ENSEEIHT (Toulouse INP)',
			},
			{
				period: '2014 – 2016',
				title: 'Spécialiste METOC, météorologiste océanographe',
				place: 'Météo-France — Toulouse',
			},
			{
				period: '2013 – 2014',
				title: 'Formation initiale militaire',
				place: 'École de Maistrance — Brest',
			},
		],
		languages: 'Anglais courant (C1)',
		offScreen: 'Hors écran : beach-volley',
	},
	contact: {
		eyebrow: 'Contact',
		lead: 'Pour parler d’un projet, ou simplement échanger.',
		sub: 'Le plus simple, c’est un e-mail. Je suis aussi sur LinkedIn.',
	},
	cv: {
		title: 'Curriculum vitæ',
		headline: 'Développeur full‑stack, ancien prévisionniste météo',
		summary: 'Chez Datakode depuis 2024, je travaille sur des applications web pour des clients, du besoin jusqu’à la mise en ligne et au suivi. Avant ça, j’ai passé dix ans dans la Marine nationale, dont sept comme prévisionniste météo et océanographique : une bonne école pour expliquer clairement des choses complexes et travailler sous pression.',
		skills: 'Compétences',
		skillList: ['Laravel', 'Vue.js', 'Nuxt', 'Astro', 'TypeScript', 'SQL', 'Linux', 'Nginx', 'GitHub Actions', 'Docker', 'Cadrage & relation client', 'Météorologie', 'Océanographie', 'Python'],
		print: 'Version PDF',
		file: '/cv/ariitehau-domelier-cv.pdf',
	},
	notFound: {
		title: 'Page introuvable',
		lead: 'Cette page n’existe pas ou a été déplacée.',
		back: 'Retour à l’accueil',
	},
};

const en: Content = {
	meta: {
		title: 'Ariitehau Domelier — Full-stack developer in Toulouse',
		description:
			'Full-stack developer at Datakode in Toulouse (Laravel, Vue.js, Nuxt), after ten years in the French Navy, seven of them as a weather forecaster.',
		ogLocale: 'en_US',
	},
	nav: { switchLabel: 'Français', switchHref: '/', switchLang: 'fr' },
	hero: {
		eyebrow: 'Ariitehau Domelier · Toulouse',
		title: 'Full‑stack developer, former weather forecaster',
		lead: 'I work at Datakode on web applications for clients: we talk through the need, I build it with Laravel, Vue.js and Nuxt, then I take care of deployment and follow-up. Before that, I spent ten years in the French Navy, seven of them forecasting weather and ocean conditions.',
		ctaContact: 'Contact',
		ctaProjects: 'See the work',
		ctaCv: 'Download the resume',
		photoAlt: 'Portrait of Ariitehau Domelier',
		photoCaption: 'Tahiti → Toulouse',
		coordinates: '17°32′S 149°34′W → 43°36′N 1°26′E',
	},
	approach: {
		eyebrow: 'How I work',
		title: 'Start from the problem, not the tech',
		intro: 'In meteorology, a forecast is useless if the person in front of you does not understand it. A digital tool is the same: it has to solve a real problem and stay simple for the people using it.',
		steps: [
			{
				title: 'Understand the need',
				description:
					'Before writing code, talk with the people who will use the tool: how they work, what gets in the way, what really matters.',
				tags: ['Workshops', 'Scoping', 'Estimates'],
			},
			{
				title: 'Build',
				description:
					'Tailored web applications, with one goal in mind: you should not need a manual to use them.',
				tags: ['Laravel', 'Vue.js', 'Nuxt', 'Astro'],
			},
			{
				title: 'Ship and support',
				description:
					'Hosting, deployment, updates, support. A tool is only useful if it keeps working.',
				tags: ['Hosting', 'Continuous deployment', 'Support'],
			},
		],
	},
	projects: {
		eyebrow: 'Work',
		title: 'A few projects',
		screenshotAlt: 'Screenshot of the website',
		status: { production: 'Live', development: 'In development' },
		needLabel: 'Starting point',
		answerLabel: 'What was built',
		sourceLabel: 'Source code',
		items: [
			{
				title: 'Snack Te Ava Iti',
				need: 'My mother’s snack bar in Tahiti. Customers wanted to see the menu and prices on their phone, including tourists unfamiliar with the Pacific franc.',
				answer: 'A simple, mobile-first site: the menu, prices converted to euros and dollars, and the number to order in one tap. It updates itself every day.',
				tags: ['Showcase site', 'Mobile', 'Automatic updates'],
				status: 'production',
				url: 'https://snackteavaiti.com',
				image: snackScreenshot,
				repo: 'https://github.com/ar11tehau/snack',
			},
			{
				title: 'Weather tool for construction',
				need: 'On a building site, many decisions depend on the weather.',
				answer: 'A decision-support tool combining weather forecasts with the site’s geographic data. This is where my two careers meet.',
				tags: ['Decision support', 'Weather data', 'Mapping'],
				status: 'development',
			},
			{
				title: 'domelier.fr',
				need: 'A place to present my background, in French and English.',
				answer: 'This site. It runs on my own server and updates itself automatically on every change, resume included.',
				tags: ['Bilingual site', 'Hosting', 'Continuous deployment'],
				status: 'production',
				url: 'https://domelier.fr/en/',
				image: portfolioScreenshot,
				repo: 'https://github.com/ar11tehau/portfolio',
			},
		],
	},
	career: {
		eyebrow: 'Background',
		title: 'From weather to software',
		experience: 'Experience',
		education: 'Education',
		experienceItems: [
			{
				period: 'Oct 2024 – present',
				title: 'Full-stack developer',
				place: 'Datakode — Auterive, France (permanent)',
				details: [
					'End-to-end client web projects in a team of four',
					'Requirements and client relations: workshops, estimates, follow-up',
					'Design and development of Laravel, Vue.js and Nuxt applications',
					'Deployment, infrastructure, operations and user support',
				],
			},
			{
				period: 'Mar – Aug 2024',
				title: 'Full-stack software engineer (internship)',
				place: 'Alteca — Toulouse',
				details: ['Web application for inviting employees to company events (Angular, Python, GitLab)'],
			},
			{
				period: '2018 – 2023',
				title: 'Expert weather forecaster',
				place: 'Joint military weather support centre, French Navy — Toulouse',
				details: [
					'Operational forecasts: numerical models, satellite and in situ data, time-critical decision briefings',
					'Remote weather support for deployed units',
					'VBA tools: automatic briefing generation from the weather server, daily production archiving, website data updates',
				],
			},
			{
				period: '2016 – 2018',
				title: 'Expert weather forecaster, embarked pool',
				place: 'Meteorological and oceanographic expertise centre, French Navy — Brest',
				details: [
					'Forecasting at sea, joining a new crew on each mission',
					'Tailoring support to operational constraints',
				],
			},
		],
		educationItems: [
			{
				period: '2023 – 2024',
				title: 'Full-stack application developer',
				place: 'ENSEEIHT (Toulouse INP)',
			},
			{
				period: '2014 – 2016',
				title: 'METOC specialist, meteorologist and oceanographer',
				place: 'Météo-France — Toulouse',
			},
			{
				period: '2013 – 2014',
				title: 'Initial military training',
				place: 'École de Maistrance — Brest',
			},
		],
		languages: 'French (native), English (C1)',
		offScreen: 'Off screen: beach volleyball',
	},
	contact: {
		eyebrow: 'Contact',
		lead: 'To talk about a project, or just to chat.',
		sub: 'Email is easiest. I am also on LinkedIn.',
	},
	cv: {
		title: 'Resume',
		headline: 'Full‑stack developer, former weather forecaster',
		summary: 'At Datakode since 2024, I work on web applications for clients, from discussing the need through to deployment and follow-up. Before that, I spent ten years in the French Navy, seven of them as a weather and ocean forecaster: good training for explaining complex things clearly and working under pressure.',
		skills: 'Skills',
		skillList: ['Laravel', 'Vue.js', 'Nuxt', 'Astro', 'TypeScript', 'SQL', 'Linux', 'Nginx', 'GitHub Actions', 'Docker', 'Scoping & client relations', 'Meteorology', 'Oceanography', 'Python'],
		print: 'PDF version',
		file: '/en/cv/ariitehau-domelier-resume.pdf',
	},
	notFound: {
		title: 'Page not found',
		lead: 'This page does not exist or has moved.',
		back: 'Back to home',
	},
};

export const content: Record<Locale, Content> = { fr, en };
