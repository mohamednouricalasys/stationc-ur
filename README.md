# Station-Cœur

Site vitrine multilingue (FR/EN) pour le projet **Station-Cœur**, un tiers-lieu solidaire porté par l'association [Nous Avons Des Elles](https://www.nousavonsdeselles.fr).

## Stack technique

- **Framework** : [Astro](https://astro.build) 4.x
- **Styles** : [Tailwind CSS](https://tailwindcss.com) 3.x
- **Langage** : TypeScript
- **i18n** : Système intégré Astro (FR par défaut, EN disponible)
- **Déploiement** : Vercel, Cloudflare Pages, Netlify, ou tout hébergeur statique

---

## Développement local

### Prérequis

- **Node.js** 18.x ou supérieur
- **npm** 9.x ou supérieur (ou pnpm/yarn)

### Installation

```bash
# Cloner le projet (si applicable)
git clone <url-du-repo>
cd stationcœur

# Installer les dépendances
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à l'adresse : **http://localhost:4321**

### Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement avec hot-reload |
| `npm run build` | Génère le site statique dans `./dist` |
| `npm run preview` | Prévisualise le build de production localement |

---

## Internationalisation (i18n)

Le site supporte deux langues :

| Langue | URL | Défaut |
|--------|-----|--------|
| Français | `/` | Oui |
| English | `/en/` | Non |

### Structure des traductions

```
src/i18n/
├── index.ts          # Exports
├── translations.ts   # Toutes les traductions FR/EN
└── utils.ts          # Fonctions utilitaires
```

### Utilisation dans les composants

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t.hero.title}</h1>
```

### Ajouter une nouvelle langue

1. Ajouter la langue dans `astro.config.mjs` :
```js
i18n: {
  locales: ['fr', 'en', 'es'], // Ajouter 'es'
}
```

2. Ajouter les traductions dans `src/i18n/translations.ts`

3. Créer les pages dans `src/pages/es/`

---

## Structure du projet

```
stationcœur/
├── public/                 # Assets statiques
│   ├── favicon.ico, favicon-*.png, icon-*.png/.webp, apple-touch-icon.png
│   ├── site.webmanifest
│   ├── images/logo/        # Logo Nous Avons Des Elles (.png + .webp)
│   └── images/
│
├── src/
│   ├── components/         # Composants Astro
│   ├── i18n/               # Système de traductions
│   ├── layouts/            # Layouts de page
│   ├── pages/              # Pages (routing automatique)
│   │   ├── index.astro     # Page FR
│   │   ├── mentions-legales.astro
│   │   ├── politique-confidentialite.astro
│   │   └── en/             # Pages EN
│   │       ├── index.astro
│   │       ├── mentions-legales.astro
│   │       └── politique-confidentialite.astro
│   └── styles/
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Déploiement sur Cloudflare Pages

Cloudflare Pages offre un hébergement gratuit avec CDN global, HTTPS automatique et builds rapides.

### Option 1 : Via le Dashboard Cloudflare

1. **Créer un compte** sur [dash.cloudflare.com](https://dash.cloudflare.com)

2. **Accéder à Workers & Pages** :
   - Dans le menu latéral, cliquer sur "Workers & Pages"
   - Cliquer sur "Create application"
   - Sélectionner l'onglet "Pages"

3. **Connecter le dépôt Git** :
   - Cliquer sur "Connect to Git"
   - Autoriser Cloudflare à accéder à votre GitHub/GitLab
   - Sélectionner le repository du projet

4. **Configurer le build** :

   | Paramètre | Valeur |
   |-----------|--------|
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` (ou le chemin si dans un sous-dossier) |

5. **Variables d'environnement** (optionnel) :
   - `NODE_VERSION` : `18` (recommandé)

6. **Déployer** :
   - Cliquer sur "Save and Deploy"
   - Attendre la fin du build (1-2 minutes)

7. **URL de production** :
   - URL automatique : `https://votre-projet.pages.dev`
   - Configurer un domaine personnalisé dans "Custom domains"

### Option 2 : Via Wrangler CLI

```bash
# Installer Wrangler CLI
npm install -g wrangler

# Se connecter à Cloudflare
wrangler login

# Créer le projet Pages (première fois uniquement)
wrangler pages project create station-coeur

# Builder le site
npm run build

# Déployer
wrangler pages deploy dist --project-name=station-coeur
```

### Option 3 : Déploiement direct (sans Git)

```bash
# Builder le site
npm run build

# Déployer directement le dossier dist
wrangler pages deploy dist --project-name=station-coeur --branch=main
```

### Configuration avancée : `wrangler.toml` (optionnel)

Créer un fichier `wrangler.toml` à la racine pour une configuration persistante :

```toml
name = "station-coeur"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"
```

### Redirections et Headers

Créer `public/_redirects` pour les redirections :

```
# Rediriger www vers non-www
https://www.station-coeur.fr/* https://station-coeur.fr/:splat 301

# SPA fallback (si nécessaire)
/*    /index.html   200
```

Créer `public/_headers` pour les headers de sécurité :

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Configurer un domaine personnalisé

1. Dans le dashboard Cloudflare Pages, aller dans votre projet
2. Cliquer sur "Custom domains"
3. Ajouter votre domaine (ex: `station-coeur.nousavonsdeselles.fr`)
4. Suivre les instructions pour configurer les DNS :
   - Si le domaine est déjà sur Cloudflare : configuration automatique
   - Sinon : ajouter un enregistrement CNAME pointant vers `votre-projet.pages.dev`

### Preview Deployments

Cloudflare Pages crée automatiquement des previews pour chaque pull request :
- URL de preview : `https://<commit-hash>.votre-projet.pages.dev`
- Permet de tester les changements avant de merger

---

## Deploiement sur GitHub Pages

Le projet inclut un workflow GitHub Actions pour deployer automatiquement sur GitHub Pages.

### Activation

1. Aller dans **Settings** > **Pages**
2. Source : **GitHub Actions**
3. Le site sera deploye automatiquement a chaque push sur `main`

### URL

Le site sera accessible a `https://<username>.github.io/<repo-name>/`

---

## Deploiement sur Vercel

### Via l'interface Vercel

1. **Créer un compte Vercel** sur [vercel.com](https://vercel.com)

2. **Importer le projet** :
   - Cliquer sur "New Project"
   - Connecter votre dépôt Git
   - Sélectionner le repository

3. **Configuration** :
   - Vercel détecte automatiquement Astro
   - Aucune configuration nécessaire

4. **Déployer** : Cliquer sur "Deploy"

### Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

---

## Déploiement sur Netlify

### Via l'interface Netlify

1. Créer un compte sur [netlify.com](https://www.netlify.com)
2. "Add new site" > "Import an existing project"
3. Connecter votre dépôt Git
4. Configuration :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Cliquer sur "Deploy site"

### Via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod --dir=dist
```

---

## Comparaison des plateformes

| Fonctionnalité | Cloudflare Pages | Vercel | Netlify |
|----------------|------------------|--------|---------|
| Hébergement gratuit | Illimité | 100GB/mois | 100GB/mois |
| Builds/mois | 500 | 6000 | 300 |
| Preview deploys | Oui | Oui | Oui |
| CDN global | Oui | Oui | Oui |
| HTTPS | Automatique | Automatique | Automatique |
| Analytics | Oui (gratuit) | Payant | Payant |
| Functions | Workers (gratuit) | Serverless | Functions |

**Recommandation** : Cloudflare Pages pour un projet associatif (gratuit, rapide, fiable).

---

## Personnalisation du contenu

### Modifier les textes

Les traductions sont dans `src/i18n/translations.ts`. Modifier les valeurs pour mettre à jour le contenu.

### Ajouter des images

1. Placer les images dans `public/images/`
2. Référencer avec `/images/nom-image.webp`
3. Format utilisé : WebP (meilleur pour le SEO et la performance)

### Modifier les couleurs

Éditer `tailwind.config.mjs` :
- `primary` : Rouge corail
- `secondary` : Gris bleuté
- `accent` : Vert
- `warm` : Orange/jaune

---

## Performance et SEO

Le site est optimisé pour d'excellents scores Lighthouse :

- **Performance** : Site statique, lazy loading
- **Accessibilité** : Navigation clavier, ARIA labels
- **SEO** : Meta tags, Open Graph, Schema.org, hreflang
- **i18n SEO** : URLs localisées, balises hreflang

### Vérifier les performances

```bash
npm run build
npm run preview
# Puis utiliser Lighthouse ou https://pagespeed.web.dev/
```

---

## Support

- **Documentation Astro** : [docs.astro.build](https://docs.astro.build)
- **Documentation Tailwind** : [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Documentation Cloudflare Pages** : [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Documentation Vercel** : [vercel.com/docs](https://vercel.com/docs)

---

## Licence

Ce projet est développé pour l'association Nous Avons Des Elles.
