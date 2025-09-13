# Contexte du Projet Portfolio - Mehdi DIAS GOMES

## Vue d'ensemble du projet

Ce projet est le portfolio personnel de **Mehdi DIAS GOMES**, un développeur full-stack passionné par la création d'applications web modernes et performantes. Le portfolio présente ses compétences, projets et expériences professionnelles avec une interface moderne, responsive et accessible.

## Technologies principales

### Framework et environnement
- **Nuxt.js 3** (v3.15.4) - Framework Vue.js full-stack
- **Vue.js** (latest) - Framework JavaScript progressif
- **TypeScript** (v5.7.3) - Langage de programmation typé
- **Bun** - Runtime JavaScript et gestionnaire de paquets

### Styling et UI
- **Tailwind CSS** (v6.13.1) - Framework CSS utility-first
- **shadcn-nuxt** (v0.11.3) - Composants UI réutilisables
- **Radix Vue** (v1.9.13) - Primitives UI accessibles
- **Lucide Vue Next** (v0.485.0) - Icônes
- **Tailwind Animate** - Animations CSS

### Fonctionnalités spéciales
- **@nuxtjs/i18n** (v9.4.0) - Internationalisation (FR/EN)
- **@nuxt/content** (v3.4.0) - Gestion de contenu
- **@nuxtjs/color-mode** (v3.5.2) - Mode sombre/clair
- **Vue Recaptcha v3** (v2.0.1) - Protection anti-spam
- **EmailJS** (v4.4.1) - Envoi d'emails
- **Vee-validate + Zod** - Validation de formulaires

## Structure du projet

### Pages principales
- **/** - Page d'accueil avec header, présentation et navigation
- **/about** - Page "À propos" avec éducation, expériences et compétences
- **/projects** - Page des projets réalisés
- **/contact** - Page de contact avec formulaire
- **/privacy** - Politique de confidentialité (FR/EN)

### Composants organisés par fonctionnalité

#### Composants principaux
- `Header.vue` - En-tête principal du site
- `Navbar.vue` - Navigation principale
- `Footer.vue` - Pied de page
- `ContactForm.vue` - Formulaire de contact avec validation
- `Projects.vue` - Affichage des projets
- `WorkXp.vue` - Expériences professionnelles

#### Composants About
- `About.vue` - Section principale à propos
- `AboutHeader.vue` - En-tête de la section
- `AboutEducation.vue` - Formation et éducation
- `AboutExperiences.vue` - Expériences professionnelles
- `AboutSkills.vue` - Compétences techniques

#### Composants UI (shadcn)
- Boutons, formulaires, inputs, labels
- Dropdown menus, sheets, toasts
- Composants stylés et accessibles

#### Icônes organisées par catégorie
- Technologies : React, Vue, Nuxt, TypeScript, Laravel, etc.
- Outils : VSCode, Git, Docker, Figma, etc.
- Réseaux sociaux : LinkedIn, Email, etc.

### Gestion du contenu et des données

#### Internationalisation
- Locale par défaut : Français (fr)
- Langues supportées : Français, Anglais
- Fichiers de traduction : `i18n/locales/fr.json` et `en.json`

#### Constants et types
- `constants/projects/` - Données des projets
- `constants/about/` - Informations personnelles
- `constants/skills/` - Compétences techniques
- `types/` - Définitions TypeScript pour les composants et props

#### Assets
- Images du portfolio, projets et arrière-plans
- Icônes et logos
- CSS personnalisé (Tailwind)

## Fonctionnalités clés

### Responsive Design
- Interface adaptée à tous les appareils
- Design mobile-first
- Breakpoints Tailwind CSS

### Animations et interactivité
- Animations fluides avec Tailwind Animate
- Auto-animate pour les transitions
- Effets de scroll et intersections

### Sécurité et performance
- Google reCAPTCHA v3 intégré
- Validation côté client et serveur
- Optimisation des images et assets

### SEO et accessibilité
- Meta tags optimisés
- Structure sémantique
- Support des lecteurs d'écran
- Mode sombre/clair

## Configuration de développement

### Scripts disponibles
- `bun dev` - Serveur de développement
- `bun build` - Build de production
- `bun generate` - Génération statique
- `bun preview` - Prévisualisation du build

### Variables d'environnement
- Configuration reCAPTCHA
- URLs d'API
- Variables de déploiement

## Projets présentés

Le portfolio inclut des projets comme :
- **Portfolio** - Ce site même (Nuxt.js, TypeScript, Tailwind)
- **Quizify** - Application de quiz (en développement)
- Autres projets avec technologies variées

## Profil développeur

**Mehdi DIAS GOMES** se présente comme :
- Développeur full-stack junior/intermédiaire
- Spécialisé en Vue.js/Nuxt.js et TypeScript
- Expérience avec Laravel, PHP, bases de données
- Passionné par l'UX/UI et les performances web
- Localisé en France, parlant français et anglais

## Notes pour les LLMs

- Le projet suit les conventions Nuxt.js 3
- Architecture modulaire avec composants réutilisables
- Code TypeScript strict avec validation Zod
- Styling avec Tailwind CSS et composants shadcn
- Internationalisation complète FR/EN
- Focus sur l'accessibilité et les performances
- Utilisation de Bun comme runtime et gestionnaire de paquets