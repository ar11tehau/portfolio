# domelier.fr

Portfolio personnel d'Ariitehau Domelier : développeur full-stack et ingénieur data, ancien prévisionniste météo et océanographe.

## Stack

- [Astro](https://astro.build) en génération statique (SSG)
- [Tailwind CSS](https://tailwindcss.com) v4, uniquement des classes utilitaires
- TypeScript en mode strict
- Hébergement : VPS Linux, Nginx, HTTPS via Let's Encrypt

## Structure

```text
src/
├── components/   Hero, Expertise, Projects, Footer
├── layouts/      Layout.astro (squelette HTML commun)
├── pages/        index.astro
└── styles/       global.css (import Tailwind)
```

## Développement

Node.js 22.12 ou plus récent est requis.

| Commande          | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installe les dépendances                      |
| `npm run dev`     | Serveur de développement sur `localhost:4321` |
| `npm run build`   | Génère le site statique dans `dist/`          |
| `npm run preview` | Sert le build localement                      |
