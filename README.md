# Station-Cœur

Site vitrine multilingue (FR/EN) pour le projet **Station-Cœur**, un tiers-lieu solidaire porté par l'association [Nous Avons Des Elles](https://www.nousavonsdeselles.fr).

## Stack technique

- **Framework** : [Astro](https://astro.build) 4.x
- **Styles** : [Tailwind CSS](https://tailwindcss.com) 3.x
- **Langage** : TypeScript
- **i18n** : Système intégré Astro (FR par défaut, EN disponible)
- **Déploiement** : OVH (FTP/SSH), Vercel, Cloudflare Pages, Netlify, ou tout hébergeur statique
- **Hébergement** : Sous-dossier `/station-coeur/` du site WordPress nousavonsdeselles.fr

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
| Français | `/station-coeur/` | Oui |
| English | `/station-coeur/en/` | Non |

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
│   ├── images/logo/        # Logo Station-Cœur (320/640/960 px, .png + .webp)
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

## Déploiement manuel sur OVH (FTP/SSH avec FileZilla)

Le site Station-Cœur est hébergé en tant que sous-dossier du site WordPress existant `nousavonsdeselles.fr`. Voici comment déployer manuellement via FTP.

### Prérequis

- **FileZilla** installé : [filezilla-project.org](https://filezilla-project.org/download.php)
- **Identifiants FTP OVH** (fournis par OVH lors de la création de l'hébergement)

### Étape 1 : Générer le build de production

```bash
# Dans le dossier du projet
npm run build
```

Cela génère le dossier `dist/` contenant tous les fichiers statiques.

### Étape 2 : Configurer FileZilla

1. **Ouvrir FileZilla**

2. **Créer une nouvelle connexion** :
   - Menu **Fichier** > **Gestionnaire de Sites** > **Nouveau site**
   - Nommer la connexion : `OVH - Nous Avons Des Elles`

3. **Paramètres de connexion** :

   | Champ | Valeur |
   |-------|--------|
   | Protocole | SFTP - SSH File Transfer Protocol |
   | Hôte | `ftp.cluster0XX.hosting.ovh.net` (voir email OVH) |
   | Port | `22` |
   | Type d'authentification | Normale |
   | Identifiant | Votre login FTP OVH |
   | Mot de passe | Votre mot de passe FTP |

   > **Alternative FTP classique** : Port `21`, Protocole `FTP - File Transfer Protocol`, Chiffrement `Connexion FTP explicite sur TLS si disponible`

4. **Cliquer sur Connexion**

### Étape 3 : Naviguer vers le bon dossier

1. **Côté serveur (panneau de droite)** :
   - Naviguer vers le dossier racine du site WordPress : `/www/` ou `/public_html/`
   - Créer le dossier `station-coeur` s'il n'existe pas (clic droit > Créer un dossier)
   - Entrer dans `/www/station-coeur/`

2. **Côté local (panneau de gauche)** :
   - Naviguer vers le dossier `dist/` de votre projet

### Étape 4 : Transférer les fichiers

1. **Sélectionner tous les fichiers** dans `dist/` (Ctrl+A)

2. **Glisser-déposer** vers le panneau serveur (ou clic droit > Envoyer)

3. **Si des fichiers existent déjà** :
   - Choisir **Écraser** ou **Écraser si la source est plus récente**
   - Cocher **Toujours utiliser cette action**

4. **Attendre la fin du transfert** (vérifier la file d'attente en bas)

### Étape 5 : Vérifier le déploiement

1. Ouvrir dans le navigateur : **https://nousavonsdeselles.fr/station-coeur/**
2. Vérifier que :
   - Les styles s'affichent correctement
   - Les images chargent
   - La navigation fonctionne
   - Le changement de langue FR ↔ EN fonctionne

### Structure sur le serveur

```
/www/                              # Racine WordPress
├── wp-content/
├── wp-admin/
├── index.php
├── ...                            # Autres fichiers WordPress
│
└── station-coeur/                 # ← Site Astro déployé ici
    ├── index.html
    ├── en/
    │   └── index.html
    ├── mentions-legales/
    │   └── index.html
    ├── _astro/                    # CSS/JS générés
    ├── images/
    ├── favicon.ico
    ├── .htaccess
    └── site.webmanifest
```

### Commandes SSH (alternative avancée)

Si vous avez un accès SSH à l'hébergement OVH :

```bash
# Connexion SSH
ssh votrelogin@ssh.cluster0XX.hosting.ovh.net

# Naviguer vers le dossier
cd www/station-coeur

# Supprimer l'ancien contenu (attention !)
rm -rf *

# Depuis votre machine locale, utiliser rsync pour synchroniser
rsync -avz --delete dist/ votrelogin@ssh.cluster0XX.hosting.ovh.net:www/station-coeur/
```

### Conseils

- **Vider le cache** : Après déploiement, faites Ctrl+Shift+R dans le navigateur
- **Sauvegarde** : Avant d'écraser, téléchargez une copie du dossier existant
- **Droits des fichiers** : Les fichiers doivent avoir les droits `644`, les dossiers `755` (FileZilla le fait automatiquement)
- **Fichier .htaccess** : Assurez-vous qu'il est bien transféré (fichiers cachés)

### Dépannage

| Problème | Solution |
|----------|----------|
| Page blanche | Vérifier que `index.html` existe dans `/station-coeur/` |
| CSS/images absents | Vérifier que le dossier `_astro/` et `images/` sont bien transférés |
| Erreur 404 | Vérifier le fichier `.htaccess` |
| Changement de langue ne marche pas | Vérifier que le dossier `en/` existe avec son `index.html` |

---

## Comparaison des plateformes

| Fonctionnalité | OVH (FTP) | Cloudflare Pages | Vercel | Netlify |
|----------------|-----------|------------------|--------|---------|
| Type | Manuel | Automatisé | Automatisé | Automatisé |
| Coût | Inclus hébergement | Gratuit | Gratuit | Gratuit |
| Déploiement | FileZilla/rsync | Git push | Git push | Git push |
| CDN global | Non | Oui | Oui | Oui |
| HTTPS | Via OVH | Automatique | Automatique | Automatique |
| Preview deploys | Non | Oui | Oui | Oui |
| Intégration WordPress | Native | Non | Non | Non |

**Recommandation actuelle** : Déploiement manuel sur OVH pour rester sur l'infrastructure existante de l'association et intégrer facilement au site WordPress.

---

## Personnalisation du contenu

### Modifier les textes

Les traductions sont dans `src/i18n/translations.ts`. Modifier les valeurs pour mettre à jour le contenu.

### Ajouter des images

1. Placer les images dans `public/images/`
2. Référencer avec `${base}/images/nom-image.webp` (où `base = import.meta.env.BASE_URL`)
3. Format utilisé : WebP (meilleur pour le SEO et la performance)

> **Note** : Le site utilise un préfixe `/station-coeur` pour tous les chemins. Utiliser toujours la variable `base` dans les composants Astro.

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
