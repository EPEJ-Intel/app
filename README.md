# Application EPEJ

Application mobile web pour l'Église du Plein Évangile de Jésus-Christ : cultes, messages, prières, louange & adoration, radio en direct, et espace administrateur.

Tout est hébergé sur **GitHub uniquement** — pas de compte séparé à créer. Le dépôt GitHub joue à la fois le rôle d'hébergeur du site et de "base de données" (les contenus sont de simples fichiers dans le dépôt).

## Fichiers

- `index.html` — l'application complète
- `site-config.js` — indique à l'appli quel dépôt GitHub utiliser (à compléter)
- `data/` — les contenus publiés (config, cultes, messages, prières, louange, galerie), au format JSON
- `README.md` — ce guide

## Étape 1 — Créer le dépôt GitHub

1. Va sur **github.com**, connecte-toi (ou crée un compte gratuit).
2. Clique sur **New repository**. Nom suggéré : `epej-app`. Coche **Public**. Crée-le.
3. Sur la page du dépôt, dépose (glisser-déposer) tous les fichiers et dossiers fournis ici : `index.html`, `site-config.js`, `README.md`, et le dossier `data/` avec ses 5 fichiers `.json`. Valide ("Commit changes").

## Étape 2 — Compléter site-config.js

Ouvre `site-config.js` directement sur GitHub.com (icône crayon ✎) et remplace :

```js
const GITHUB_REPO = {
  owner: "TON-NOM-UTILISATEUR",   // ton nom d'utilisateur GitHub
  repo: "epej-app",               // le nom exact de ton dépôt
  branch: "main"
};
```

par tes vraies valeurs, puis valide ("Commit changes").

## Étape 3 — Activer GitHub Pages

Dans le dépôt : **Settings** → **Pages** → sous **Source**, choisis la branche `main` et le dossier `/ (root)` → **Save**. Après une à deux minutes, ton application est en ligne à l'adresse indiquée (généralement `https://TON-NOM-UTILISATEUR.github.io/epej-app/`).

## Étape 4 — Créer ton jeton d'accès admin

C'est ce qui remplace un mot de passe classique : un "jeton" (token) que toi seul possèdes, qui autorise l'appli à publier du contenu en ton nom.

1. Sur GitHub, clique sur ta photo de profil → **Settings** → tout en bas du menu de gauche, **Developer settings**.
2. **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
3. Donne-lui un nom (ex. "EPEJ admin"), une expiration (ex. 1 an).
4. Sous **Repository access**, choisis **Only select repositories** → sélectionne ton dépôt `epej-app`.
5. Sous **Permissions** → **Repository permissions**, trouve **Contents** → mets-le sur **Read and write**.
6. **Generate token**. GitHub affiche le jeton **une seule fois** (commence par `github_pat_...`) : copie-le et garde-le en lieu sûr (ex. gestionnaire de mots de passe).

⚠️ Ce jeton donne le droit de modifier ton dépôt. Ne le partage qu'avec les personnes qui doivent administrer l'appli, et ne le colle jamais dans un message public. Il reste enregistré uniquement dans le navigateur de la personne qui l'utilise.

## Utilisation

- Ouvre l'appli → icône ⚙︎ en haut à droite → colle ton jeton d'accès → tu es dans l'espace admin.
- **Logo** : Admin → Général → dépose une image carrée (1 Mo max) → elle remplace l'icône dans l'en-tête pour tous les visiteurs.
- **Galerie d'accueil** : Admin → onglet "Galerie (accueil)" → ajoute des photos avec une légende optionnelle → elles s'affichent en bandeau défilant sur l'écran d'accueil.
- **Coordonnées** : Admin → Général → renseigne adresse, téléphone, e-mail, Facebook, YouTube → une carte "Nous contacter" apparaît automatiquement sur l'accueil si au moins un champ est rempli.
- Tout ce que tu publies (cultes, messages, prières, louange, galerie, réglages radio, mission/vision, logo, coordonnées) devient visible pour tous les visiteurs après actualisation de leur page — généralement en quelques secondes à quelques minutes. Tout se fait depuis l'appli elle-même : tu n'as plus besoin de modifier quoi que ce soit à la main sur GitHub.com après la mise en place initiale.
- **Fichiers joints** (image, PDF, Word, court audio/vidéo) : limités à **1 Mo** par fichier via le bouton d'envoi intégré (limite technique de GitHub). Pour un fichier plus lourd :
  - dépose-le toi-même dans le dossier `uploads/` de ton dépôt sur GitHub.com (glisser-déposer, jusqu'à ~25 Mo), en créant un sous-dossier si besoin ;
  - ou, mieux, pour une vidéo longue, héberge-la sur YouTube et colle le lien dans le champ "Lien externe" de l'appli.
- Pour la radio : renseigne dans Admin → Général l'URL d'un flux audio en direct (`.mp3`/`.aac`), ainsi que le nom et la fréquence à afficher.

## Besoin d'aide ?

Si une étape bloque (message d'erreur, page qui ne s'affiche pas, jeton refusé...), reviens vers moi avec le détail — je t'aiderai à le résoudre.
