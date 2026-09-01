# Esteban Mestrie — Portfolio

Portfolio personnel conçu comme une **bibliothèque vivante de projets** plutôt qu'une simple sélection de quelques dépôts.

## Ce que le site contient

- Hero orienté **Generative AI & Creative Engineering**
- Sélection éditoriale de projets récents : Owlnest, Groove Card, Enuboard, NASA2DAY
- Section dédiée au travail autour des **LLM, RAG, recherche hybride, reranking, transcription, APIs et Docker**
- Bibliothèque synchronisée automatiquement avec les dépôts publics du compte GitHub `MestrieEsteban`
- Recherche et filtres
- Tri chronologique
- Timeline générée automatiquement à partir des dates de création GitHub
- Statistiques GitHub calculées au chargement
- Interface bilingue français / anglais
- Responsive mobile et desktop
- Respect de `prefers-reduced-motion`

## Lancer localement

Aucun build n'est nécessaire.

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

> Il vaut mieux servir le dossier via HTTP plutôt que d'ouvrir directement `index.html`, afin de reproduire un comportement proche d'un hébergement réel.

## Architecture

```text
.
├── index.html   # structure et contenu éditorial
├── styles.css   # direction artistique et responsive
├── app.js       # GitHub API, filtres, timeline et traductions
└── README.md
```

## Synchronisation GitHub

Le site utilise l'API publique GitHub :

```text
https://api.github.com/users/MestrieEsteban/repos
```

Les nouveaux dépôts **publics** apparaissent donc automatiquement dans la bibliothèque et la timeline. Les dépôts privés ne sont jamais demandés ni exposés.

Les dépôts `portfolio` et `MestrieEsteban` sont volontairement retirés de la bibliothèque afin d'éviter d'afficher le portfolio lui-même et le dépôt de profil.

## Déploiement

Le site est entièrement statique et peut être déployé sur GitHub Pages, Cloudflare Pages, Netlify ou Vercel sans étape de build.

Pour GitHub Pages, utiliser la racine de la branche `main` comme source de publication.
