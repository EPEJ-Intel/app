# Application EPEJ

Application mobile web pour l'Église du Plein Évangile de Jésus-Christ : cultes, messages, prières, louange & adoration, annonces, radio (direct + émissions), Bible en 6 langues, galerie, et espace administrateur.

**Connexion admin par simple code d'accès** — pas de jeton, pas de paramètres développeur à configurer. Les contenus publiés sont stockés sur **Firebase** (gratuit) et se mettent à jour **en temps réel** chez tous les visiteurs.

## Fichiers

- `index.html` — l'application complète
- `firebase-config.js` — connexion à ta base de données (à compléter, voir ci-dessous)
- `manifest.json`, `sw.js`, `icons/` (logo EPEJ) — rendent l'application installable sur téléphone
- `README.md` — ce guide

## Étape 1 — Créer la base de données (Firebase, gratuit)

1. Va sur **https://console.firebase.google.com**, connecte-toi avec un compte Google.
2. **Ajouter un projet** → donne-lui un nom (ex. `epej-app`) → termine la création.
3. Menu de gauche → **Firestore Database** → **Créer une base de données** → mode **production** → choisis une région → valide.
4. Une fois créée, onglet **Règles** → colle ceci → **Publier** :

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /epej/{document=**} {
         allow read: if true;
         allow write: if true;
       }
     }
   }
   ```

5. Retourne à la page d'accueil du projet (icône maison) → icône **`</>`** ("Ajouter une application Web") → donne-lui un nom → **Enregistrer l'application**.
6. Firebase affiche un bloc `firebaseConfig = { apiKey: ..., ... }`. Copie ces valeurs.

⚠️ **Pas de Storage.** Depuis fin 2024, Firebase Storage exige le forfait payant "Blaze" (carte bancaire), même pour un usage 100% gratuit. Pour rester sans carte bancaire, l'appli n'envoie aucun fichier vers Firebase : à la place, chaque contenu (culte, message, photo, vidéo...) accepte un **lien** — l'appli détecte automatiquement s'il s'agit d'une image, d'une vidéo YouTube, d'un audio ou d'un document, et l'affiche en conséquence. Voir la section "Ajouter des images et vidéos sans compte payant" plus bas.

## Étape 2 — Compléter firebase-config.js

Ouvre `firebase-config.js`, remplace les valeurs `"VOTRE_..."` par celles de l'étape précédente, enregistre.

## Étape 3 — Héberger l'appli

N'importe quel hébergeur de site statique fonctionne (GitHub Pages, Netlify, Vercel...). Le plus simple si tu as déjà un compte GitHub :
1. Crée un dépôt public sur GitHub, dépose les fichiers (`index.html`, `firebase-config.js`, `manifest.json`, `sw.js`, dossier `icons/`).
2. **Settings → Pages** → branche `main`, dossier `/ (root)` → **Save**.
3. Ton appli est en ligne après 1-2 minutes, à l'adresse indiquée.

## Utilisation

- **Code d'accès admin par défaut : `2026`** — change-le dès que possible dans Admin → Général → "Code d'accès admin".
- Ouvre l'appli → icône ⚙︎ en haut à droite → entre le code → tu es dans l'espace admin.
- Tout ce que tu publies (cultes, messages, prières, louange, galerie, annonces, émissions radio, réglages, logo, coordonnées) apparaît **instantanément** chez tous les visiteurs, sur tous les appareils — pas besoin d'actualiser.
- **Logo** : le vrai logo EPEJ est affiché par défaut. Pour le changer, Admin → Général → colle un lien direct vers une image.
- **Fichiers/médias** : chaque contenu (culte, message, prière, louange, annonce, émission, photo de galerie) a un champ **"Lien"** — colle une adresse et l'appli affiche automatiquement le bon format : image, vidéo YouTube intégrée, audio avec lecteur, ou bouton "Ouvrir le lien" pour tout le reste (PDF, Word...). Voir la section dédiée plus bas pour savoir où héberger tes images/vidéos gratuitement.
- **Texte enrichi** : dans les champs de description longs, tu peux taper du HTML simple (`<b>gras</b>`, `<a href="...">lien</a>`) et il s'affichera mis en forme.
- **Radio** : deux options, utilisables ensemble.
  - **Direct intégré** : URL de flux audio (`.mp3`/`.aac`) → lecteur play/pause dans l'appli.
  - **Lien de chaîne** : lien vers le site/Zeno.fm/Mixlr/YouTube en direct → bouton qui ouvre la chaîne si pas de flux direct.
  - **Émissions radio** (onglet dédié dans l'admin) : programmes à écouter à la demande, sous le lecteur en direct.
- **Annonces** : bandeau qui défile automatiquement vers le haut sur l'accueil (texte, image, vidéo, lien) — se met en pause au toucher/survol.
- **Galerie d'accueil** : photos (via lien direct) avec légende, affichées en bandeau défilant sur l'accueil.
- **Coordonnées** : adresse, téléphone, e-mail, Facebook, YouTube → carte "Nous contacter" automatique sur l'accueil.

## Ajouter des images et vidéos sans compte payant

- **Vidéos** : mets-les sur **YouTube** (compte gratuit, uploads illimités) → colle le lien normal (`youtube.com/watch?v=...` ou `youtu.be/...`) dans le champ "Lien" → l'appli l'intègre automatiquement en lecteur vidéo.
- **Photos** : héberge-les gratuitement sur un service comme **imgur.com** (aucun compte requis pour un upload simple) → clique-droit sur l'image affichée → "Copier l'adresse de l'image" (l'adresse doit se terminer par `.jpg`, `.png`, etc.) → colle ce lien dans le champ "Lien".
- **Audio** : la plupart des hébergeurs de fichiers audio gratuits (ex. liens directs `.mp3`) fonctionnent aussi automatiquement.
- **Documents (PDF, Word...)** : héberge-les sur Google Drive → clic droit → "Partager" → "Copier le lien" (assure-toi que l'accès est "Tous les utilisateurs disposant du lien") → colle-le ; l'appli affichera un bouton "Ouvrir le lien".

## Bible en 6 langues

Accessible par l'onglet "📜 Bible" ou le bouton mis en avant sur l'accueil. Plutôt que d'héberger le texte biblique nous-mêmes (impossible pour des raisons de droits d'auteur, surtout en fon, bariba et goun), l'appli s'appuie sur **YouVersion (Bible.com)**, qui couvre déjà le français, l'anglais, le fon, le bariba, le yoruba et le goun. Un tap sur une langue l'ouvre sur Bible.com. Les liens sont préremplis par défaut ; modifiables dans Admin → "📜 Bible" si tu préfères une autre traduction ou appli.

## Contenu de départ

La mission/vision et l'adresse pré-remplies s'inspirent d'informations trouvées sur epej.org (le site bloque la lecture automatisée complète, donc seuls des extraits ont pu être récupérés). **Vérifie et complète-les toi-même** (Admin → Général) — aucun téléphone ni e-mail n'a été inventé, ces champs sont volontairement vides.

## Installer l'appli sur le téléphone

- **Android (Chrome)** : ouvrir l'appli → menu ⋮ → "Installer l'application".
- **iPhone (Safari)** : ouvrir l'appli → Partager → "Sur l'écran d'accueil".

## Besoin d'aide ?

Si une étape bloque, reviens vers moi avec le détail (message d'erreur, capture d'écran) — je t'aiderai à le résoudre.
