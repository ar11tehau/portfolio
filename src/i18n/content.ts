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
	description: string;
	tags: readonly string[];
	status: 'production' | 'development';
	url?: string;
	repo?: string;
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
		ctaProjects: string;
		ctaCv: string;
	};
	expertise: {
		eyebrow: string;
		title: string;
		domains: readonly { title: string; description: string; tags: readonly string[] }[];
	};
	projects: {
		eyebrow: string;
		title: string;
		status: Record<Project['status'], string>;
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
	};
	contact: { eyebrow: string; lead: string };
	cv: { title: string; skills: string; print: string; file: string };
	notFound: { title: string; lead: string; back: string };
}

const fr: Content = {
	meta: {
		title: 'Ariitehau Domelier — Développeur full-stack, ancien prévisionniste météo',
		description:
			'Développeur full-stack (Laravel, Vue.js, Astro) après dix ans dans la Marine nationale, dont sept comme expert prévisionniste météo-océanographe.',
		ogLocale: 'fr_FR',
	},
	nav: { switchLabel: 'English', switchHref: '/en/', switchLang: 'en' },
	hero: {
		eyebrow: 'Ariitehau Domelier',
		title: 'Développeur full‑stack, ancien prévisionniste météo',
		lead: 'Dix ans dans la Marine nationale, dont sept à produire des prévisions météo et océanographiques pour des unités en opération. Aujourd’hui développeur full-stack chez Datakode, je mène des projets web clients de bout en bout avec Laravel, Vue.js et Nuxt, du cadrage au déploiement.',
		ctaProjects: 'Voir mes projets',
		ctaCv: 'Télécharger mon CV',
	},
	expertise: {
		eyebrow: 'Compétences',
		title: 'Ce que je fais',
		domains: [
			{
				title: 'Développement full-stack',
				description:
					'Applications web de bout en bout : API, interfaces, base de données, typage strict.',
				tags: ['Laravel', 'Vue.js', 'Nuxt', 'Astro', 'TypeScript', 'SQL'],
			},
			{
				title: 'Infrastructure & déploiement',
				description:
					'J’administre mon propre VPS : Nginx, HTTPS, pare-feu, et déploiement continu par GitHub Actions avec des accès SSH restreints.',
				tags: ['Linux', 'Nginx', 'GitHub Actions', 'Docker'],
			},
			{
				title: 'Données météo & océanographiques',
				description:
					'Sept ans d’analyse et de prévision opérationnelle, et des outils pour automatiser la production des bulletins.',
				tags: ['Météorologie', 'Océanographie', 'Python', 'Automatisation'],
			},
		],
	},
	projects: {
		eyebrow: 'Réalisations',
		title: 'Projets',
		status: { production: 'En production', development: 'En développement' },
		sourceLabel: 'Code source',
		items: [
			{
				title: 'Micro-SaaS BTP & climat',
				description:
					'Plateforme d’aide à la décision pour la construction, fondée sur l’ingénierie géospatiale et les données météo.',
				tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'API météo'],
				status: 'development',
			},
			{
				title: 'Snack Te Ava Iti',
				description:
					'Site vitrine d’un snack à Tahiti : menu, conversion XPF / EUR / USD au taux de la BCE, pensé pour le mobile. Reconstruit et déployé automatiquement chaque jour.',
				tags: ['EJS', 'Tailwind', 'GitHub Actions', 'Nginx'],
				status: 'production',
				url: 'https://snackteavaiti.com',
				repo: 'https://github.com/ar11tehau/snack',
			},
			{
				title: 'domelier.fr',
				description:
					'Mon portfolio : statique, bilingue, sans JavaScript, servi par Nginx sur mon VPS et déployé à chaque push.',
				tags: ['Astro', 'TypeScript', 'Tailwind', 'GitHub Actions'],
				status: 'production',
				url: 'https://domelier.fr',
				repo: 'https://github.com/ar11tehau/portfolio',
			},
		],
	},
	career: {
		eyebrow: 'Parcours',
		title: 'De la prévision météo au développement',
		experience: 'Expérience',
		education: 'Formation',
		experienceItems: [
			{
				period: 'oct. 2024 – aujourd’hui',
				title: 'Développeur full-stack',
				place: 'Datakode — Auterive (CDI)',
				details: [
					'Projets web clients de bout en bout, dans une équipe de quatre',
					'Cadrage du besoin et relation client : ateliers, chiffrage, suivi',
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
					'Prévisions opérationnelles : modèles numériques, données satellite et in situ, briefings décisionnels sous contrainte de temps',
					'Soutien météo à distance des unités déployées',
					'Outils VBA : génération automatique des briefings à partir du serveur météo, archivage de la production quotidienne, mise à jour des données d’un site',
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
	},
	contact: {
		eyebrow: 'Contact',
		lead: 'Un projet, une mission ou une question technique ?',
	},
	cv: {
		title: 'Curriculum vitæ',
		skills: 'Compétences',
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
		title: 'Ariitehau Domelier — Full-stack developer, former weather forecaster',
		description:
			'Full-stack developer (Laravel, Vue.js, Astro) after ten years in the French Navy, seven of them as an expert meteorological and oceanographic forecaster.',
		ogLocale: 'en_US',
	},
	nav: { switchLabel: 'Français', switchHref: '/', switchLang: 'fr' },
	hero: {
		eyebrow: 'Ariitehau Domelier',
		title: 'Full‑stack developer, former weather forecaster',
		lead: 'Ten years in the French Navy, seven of them producing weather and ocean forecasts for units in operation. Now a full-stack developer at Datakode, I deliver client web projects end to end with Laravel, Vue.js and Nuxt, from scoping to deployment.',
		ctaProjects: 'See my projects',
		ctaCv: 'Download my resume',
	},
	expertise: {
		eyebrow: 'Skills',
		title: 'What I do',
		domains: [
			{
				title: 'Full-stack development',
				description: 'End-to-end web applications: APIs, interfaces, databases, strict typing.',
				tags: ['Laravel', 'Vue.js', 'Nuxt', 'Astro', 'TypeScript', 'SQL'],
			},
			{
				title: 'Infrastructure & deployment',
				description:
					'I run my own VPS: Nginx, HTTPS, firewall, and continuous deployment with GitHub Actions over restricted SSH access.',
				tags: ['Linux', 'Nginx', 'GitHub Actions', 'Docker'],
			},
			{
				title: 'Weather & ocean data',
				description:
					'Seven years of operational analysis and forecasting, plus tools to automate forecast production.',
				tags: ['Meteorology', 'Oceanography', 'Python', 'Automation'],
			},
		],
	},
	projects: {
		eyebrow: 'Work',
		title: 'Projects',
		status: { production: 'Live', development: 'In development' },
		sourceLabel: 'Source code',
		items: [
			{
				title: 'Construction & climate micro-SaaS',
				description:
					'Decision-support platform for construction, built on geospatial engineering and weather data.',
				tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'Weather API'],
				status: 'development',
			},
			{
				title: 'Snack Te Ava Iti',
				description:
					'Showcase site for a snack bar in Tahiti: menu, XPF / EUR / USD conversion at ECB rates, mobile-first. Rebuilt and deployed automatically every day.',
				tags: ['EJS', 'Tailwind', 'GitHub Actions', 'Nginx'],
				status: 'production',
				url: 'https://snackteavaiti.com',
				repo: 'https://github.com/ar11tehau/snack',
			},
			{
				title: 'domelier.fr',
				description:
					'My portfolio: static, bilingual, no JavaScript, served by Nginx on my VPS and deployed on every push.',
				tags: ['Astro', 'TypeScript', 'Tailwind', 'GitHub Actions'],
				status: 'production',
				url: 'https://domelier.fr/en/',
				repo: 'https://github.com/ar11tehau/portfolio',
			},
		],
	},
	career: {
		eyebrow: 'Background',
		title: 'From weather forecasting to software',
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
	},
	contact: {
		eyebrow: 'Contact',
		lead: 'A project, an assignment or a technical question?',
	},
	cv: {
		title: 'Resume',
		skills: 'Skills',
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
