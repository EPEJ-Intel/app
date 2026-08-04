# Application EPEJ

Application mobile web pour l'Église du Plein Évangile de Jésus-Christ : cultes, messages, prières, louange & adoration, radio en direct, et espace administrateur.

Tout est hébergé sur **GitHub uniquement** — pas de compte séparé à créer. Le dépôt GitHub joue à la fois le rôle d'hébergeur du site et de "base de données" (les contenus sont de simples fichiers dans le dépôt).

## Contenu de départ

`data/config.json` contient déjà quelques informations réelles trouvées via une recherche sur epej.org (le site bloque la lecture automatisée directe de ses pages, donc seuls des extraits ont pu être récupérés) : une adresse (Quartier Gah, Parakou) et un texte de mission/bienvenue s'inspirant du site. **Vérifie et complète ces informations toi-même** (Admin → Général) — je n'ai pas pu confirmer de numéro de téléphone ou d'e-mail, ces champs sont donc restés vides plutôt que d'inventer une donnée.

## Fichiers

- `index.html` — l'application complète
- `site-config.js` — indique à l'appli quel dépôt GitHub utiliser (à compléter)
- `manifest.json`, `sw.js`, `icons/` (vrai logo EPEJ) — rendent l'application installable sur téléphone
- `data/` — les contenus publiés (config — incluant les liens Bible et radio —, cultes, messages, prières, louange, galerie, annonces, émissions radio), au format JSON
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

1. Va sur **https://github.com/settings/tokens**.
2. **Generate new token** → **Generate new token (classic)**.
3. Donne-lui un nom (ex. "EPEJ admin") et une expiration (ex. 90 jours ou 1 an).
4. Coche la case **`repo`** (une seule case, elle couvre tout ce qu'il faut).
5. Descends tout en bas → **Generate token**. GitHub affiche le jeton **une seule fois** (commence par `ghp_...`) : copie-le avec le bouton 📋 et garde-le en lieu sûr (ex. gestionnaire de mots de passe).

⚠️ Ce jeton donne le droit de modifier ton dépôt. Ne le partage qu'avec les personnes qui doivent administrer l'appli, et ne le colle jamais dans un message public. Il reste enregistré uniquement dans le navigateur de la personne qui l'utilise.

## Utilisation

- Ouvre l'appli → icône ⚙︎ en haut à droite → colle ton jeton d'accès → tu es dans l'espace admin.
- **Logo** : le vrai logo EPEJ (globe + livre) est déjà affiché par défaut dans l'en-tête. Pour le changer, Admin → Général → dépose une nouvelle image.
- **Galerie d'accueil** : Admin → onglet "Galerie (accueil)" → ajoute des photos avec une légende optionnelle → elles s'affichent en bandeau défilant sur l'écran d'accueil.
- **Annonces** : Admin → onglet "Annonces" → ajoute un titre, un texte, une image ou vidéo, et/ou un lien → elles apparaissent dans un bandeau qui défile automatiquement vers le haut en haut de l'accueil (l'utilisateur peut le mettre en pause en gardant le doigt/la souris dessus). Idéal pour les infos ponctuelles (événement à venir, changement d'horaire...).
- **Fichiers ouverts dans l'appli** : quand un visiteur tape sur un fichier joint (PDF, Word, image...), il s'ouvre dans une fenêtre à l'intérieur de l'application plutôt que dans un nouvel onglet ou une appli externe.
- **Coordonnées** : Admin → Général → renseigne adresse, téléphone, e-mail, Facebook, YouTube → une carte "Nous contacter" apparaît automatiquement sur l'accueil si au moins un champ est rempli.
- **Texte enrichi** : dans les champs "description" longs (messages, cultes, mission...), tu peux taper du HTML simple (`<b>gras</b>`, `<a href="...">lien</a>`, etc.) et il s'affichera mis en forme chez les visiteurs, pas comme du texte brut.
- Tout ce que tu publies devient visible pour tous les visiteurs après actualisation de leur page — généralement en quelques secondes à quelques minutes. Tout se fait depuis l'appli elle-même : tu n'as plus besoin de modifier quoi que ce soit à la main sur GitHub.com après la mise en place initiale.
- **Fichiers joints** (image, PDF, Word, audio, vidéo) : jusqu'à **~100 Mo** par fichier (limite technique de GitHub — l'envoi passe par son API bas niveau pour dépasser la petite limite habituelle de 1 Mo). L'envoi peut prendre un moment pour les gros fichiers, selon la connexion. Au-delà de 100 Mo, héberge plutôt le fichier sur YouTube et colle le lien dans le champ "Lien externe".
- **Radio** : deux options, utilisables séparément ou ensemble.
  - **Direct intégré** : renseigne une URL de flux audio (`.mp3`/`.aac`) dans "URL du flux audio en direct" → un vrai lecteur play/pause apparaît dans l'appli.
  - **Lien de chaîne** : renseigne un lien (site, Zeno.fm, Mixlr, YouTube en direct) dans "Lien vers la chaîne radio" → s'il n'y a pas de flux direct, le bouton radio ouvre ce lien dans un nouvel onglet.
- **Émissions radio** : Admin → onglet "Émissions radio" → ajoute un titre, une description, un fichier audio et/ou un lien → elles apparaissent en liste écoutable à la demande sur la page Radio, sous le lecteur en direct.

## Bible en 6 langues

L'appli inclut un accès Bible (Français, English, Fon, Bariba, Yoruba, Goun), accessible par l'onglet "📜 Bible" ou le bouton mis en avant sur l'accueil.

Plutôt que d'héberger le texte biblique nous-mêmes (impossible pour des raisons de droits d'auteur, surtout en fon, bariba et goun), l'appli s'appuie sur **YouVersion (Bible.com)** — l'application Bible gratuite la plus utilisée au monde, qui couvre déjà ces 6 langues. Un tap sur une langue ouvre la Bible correspondante sur Bible.com.

Les liens sont préremplis par défaut. Si tu préfères pointer vers une traduction, une autre application ou un site différent pour une langue donnée, modifie-les dans Admin → onglet "📜 Bible".

## Installer l'appli sur le téléphone

Elle s'installe comme une vraie application, avec sa propre icône sur l'écran d'accueil, sans passer par un store :
- **Android (Chrome)** : ouvrir l'appli → menu ⋮ → "Installer l'application" (ou "Ajouter à l'écran d'accueil").
- **iPhone (Safari)** : ouvrir l'appli → bouton Partager (carré avec flèche vers le haut) → "Sur l'écran d'accueil".

## Besoin d'aide ?

Si une étape bloque (message d'erreur, page qui ne s'affiche pas, jeton refusé...), reviens vers moi avec le détail — je t'aiderai à le résoudre.
