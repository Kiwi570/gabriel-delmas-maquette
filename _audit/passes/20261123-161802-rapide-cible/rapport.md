# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 17:38:04 · 20 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/musique,/methodes,/clinics-et-studio,/bio,/contact

## Résumé

- Statut : **107 échec(s)**
- Passe : `20261123-161802-rapide-cible` · version ?v=1
- Échecs : **107**
- À regarder : **49**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (36), films d’ouverture (12), films de transition (12), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (2), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (7), souris immobile (6), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien mort (2)

- **lien mort** — `contact.html` — href="#"
- **lien mort** — `en/contact.html` — href="#"

### textes qui se chevauchent (28)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte > p.surtitre.hero-surtitre « BATTEUR · JAZZ, FUNK, NEW ORLEANS » — avec div.hero-texte > h1.hero-titre.titre-geant > span.ligne-masque:nth-of-type(1) > span.hero-ligne « GABRIEL » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#album > div.conteneur.album-grille > div.album-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « L'ALBUM » — avec section#album > div.conteneur.album-grille > div.album-texte:nth-of-type(2) > h2.titre-geant « NEW STEP » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#album > div.conteneur.album-grille > div.album-texte:nth-of-type(2) > h2.titre-geant « NEW STEP » — avec section#album > div.conteneur.album-grille > div.album-texte:nth-of-type(2) > p.album-sous:nth-of-type(2) « Gabriel Delmas Trio & Gaël Horellou » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div:nth-of-type(1) > ul.chiffres-liste.fx-fini > li:nth-of-type(1) > strong.chiffre.chiffre--plus « 300 » — avec div:nth-of-type(1) > ul.chiffres-liste.fx-fini > li:nth-of-type(1) > span « exercices en vidéo dans Le Rythme Intérieur » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-titre:nth-of-type(1) « ÉCRIRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-email:nth-of-type(2) > span « Gabriel » _(1366×768 normal)_
- **textes qui se chevauchent** — `/bio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « BIO & MATÉRIEL » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « UNE VIE » _(390×844 normal, 390×844 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/bio` — div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « EN RYTHME » — avec section#debut > div.conteneur.tete-plein-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Premiers cours à 4 ans · formé à Toulouse » _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/bio` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-titre:nth-of-type(1) « ÉCRIRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/bio` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-email:nth-of-type(2) > span « Gabriel » _(1366×768 normal)_
- **textes qui se chevauchent** — `/clinics-et-studio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « CLINICS, SESSIONS ET STUDIO » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « TRANSMETTRE » _(390×844 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/clinics-et-studio` — div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « LE GROOVE » — avec section#debut > div.conteneur.tete-plein-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Magasins de musique · festivals · écoles de batter » _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/clinics-et-studio` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-titre:nth-of-type(1) « ÉCRIRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/clinics-et-studio` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-email:nth-of-type(2) > span « Gabriel » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte > p.surtitre.hero-surtitre « CONTACT » — avec div.tete-scindee-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « PARLONS DE » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — div.tete-scindee-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « VOTRE PROJET » — avec div.conteneur.tete-scindee-grille > div.tete-scindee-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Réponse par e-mail · delmas648@hotmail.com » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — div.tete-scindee-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « VOTRE PROJET » — avec div.tete-scindee-texte > div.hero-detail > p.hero-info:nth-of-type(2) > span.email-texte « delmas648@hotmail.com » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-titre:nth-of-type(1) « ÉCRIRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-email:nth-of-type(2) > span « Gabriel » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — avec div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__num:nth-of-type(1) « 4 » _(844×390 normal)_
- **textes qui se chevauchent** — `/methodes` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.surtitre.hero-surtitre « LES MÉTHODES DE GABRIEL DELMAS » — avec div.tete-scindee-texte:nth-of-type(1) > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « DU PAD » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **textes qui se chevauchent** — `/methodes` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-titre:nth-of-type(1) « ÉCRIRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/methodes` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-email:nth-of-type(2) > span « Gabriel » _(1366×768 normal)_
- **textes qui se chevauchent** — `/methodes` — div.tete-scindee-texte:nth-of-type(1) > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « AU GROOVE » — avec div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > div.hero-detail > p.hero-info:nth-of-type(2) « À partir de 15 € · PDF disponibles tout de suite » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/musique` — section#debut > div.conteneur.tete-album-grille > div.tete-album-texte > p.surtitre.hero-surtitre « GABRIEL DELMAS TRIO & GAËL HORELLOU » — avec div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « NEW » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **textes qui se chevauchent** — `/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Sorti le 29 mai 2026 · CD le 5 juin · Jazz Family » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/musique` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec footer#pied > div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-titre:nth-of-type(1) « ÉCRIRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/musique` — div.pied-nom:nth-of-type(1) > p.pied-marque:nth-of-type(1) > span.marque:nth-of-type(1) > span:nth-of-type(2) « DELMAS » — avec div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > p.pied-email:nth-of-type(2) > span « Gabriel » _(1366×768 normal)_

### contraste insuffisant (1)

- **contraste insuffisant** — `/` — section#scenes > div.mots:nth-of-type(1) > p:nth-of-type(1) « SONNY EMORY · AARON SPEARS · ROBERT SPUT · BENNY G » — 1.00:1 (minimum 3:1) _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### image non chargée (6)

- **image non chargée** — `/` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 844×390 normal)_
- **image non chargée** — `/bio` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **image non chargée** — `/clinics-et-studio` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **image non chargée** — `/contact` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl)_
- **image non chargée** — `/methodes` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **image non chargée** — `/musique` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — div.album-visuel:nth-of-type(1) > figure.media.album-pochette > picture > img « Visuel de l'album New Step : une planète noire et  » — new-step-pochette (3/5, faible, 43 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/musique` — div.album-visuel:nth-of-type(1) > figure.media.album-pochette > picture > img « Visuel de l'album New Step : une planète noire et  » — new-step-pochette (3/5, faible, 43 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### zone tactile sous 44 px (58)

- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(1) « Charleston, Pas 1 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case.tete:nth-of-type(2) « Charleston, Pas 2 » — 16 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(3) « Charleston, Pas 3 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(4) « Charleston, Pas 4 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(1) « Ka · caisse claire, Pas 1 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case.tete:nth-of-type(2) « Ka · caisse claire, Pas 2 » — 16 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(3) « Ka · caisse claire, Pas 3 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(4) « Ka · caisse claire, Pas 4 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(1) « Koum · grosse caisse, Pas 1 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case.tete:nth-of-type(2) « Koum · grosse caisse, Pas 2 » — 16 × 44 px _(844×390 normal)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(3) « Koum · grosse caisse, Pas 3 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(4) « Koum · grosse caisse, Pas 4 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(1) « Charleston, Pas 5 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(2) « Charleston, Pas 6 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(3) « Charleston, Pas 7 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(4) « Charleston, Pas 8 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(1) « Ka · caisse claire, Pas 5 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(2) « Ka · caisse claire, Pas 6 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(3) « Ka · caisse claire, Pas 7 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(4) « Ka · caisse claire, Pas 8 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(1) « Koum · grosse caisse, Pas 5 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(2) « Koum · grosse caisse, Pas 6 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(3) « Koum · grosse caisse, Pas 7 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(4) « Koum · grosse caisse, Pas 8 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(1) « Charleston, Pas 9 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(2) « Charleston, Pas 10 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(3) « Charleston, Pas 11 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(4) « Charleston, Pas 12 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(1) « Ka · caisse claire, Pas 9 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(2) « Ka · caisse claire, Pas 10 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(3) « Ka · caisse claire, Pas 11 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > button.seq-case:nth-of-type(4) « Ka · caisse claire, Pas 12 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(1) « Koum · grosse caisse, Pas 9 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(2) « Koum · grosse caisse, Pas 10 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(3) « Koum · grosse caisse, Pas 11 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > button.seq-case:nth-of-type(4) « Koum · grosse caisse, Pas 12 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(1) « Charleston, Pas 13 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(2) « Charleston, Pas 14 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(3) « Charleston, Pas 15 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.sequenceur:nth-of-type(2) > div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--ti:nth-of-type(1) > button.seq-case:nth-of-type(4) « Charleston, Pas 16 » — 16 × 44 px _(844×390 normal, 320×568 sansJs)_
- … et 18 autres (rapport.json)

### contraste sur image (5)

- **contraste sur image** — `/bio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « BIO & MATÉRIEL » — 3.65:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/bio` — div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « EN RYTHME » — 1.82:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/bio` — section#debut > div.conteneur.tete-plein-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Premiers cours à 4 ans · formé à Toulouse » — 3.88:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/bio` — div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.hero-ligne--rouge « EN RYTHME » — 2.79:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/clinics-et-studio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « CLINICS, SESSIONS ET STUDIO » — 2.86:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/bio` — div.conteneur.tete-plein-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton « Voir le parcours » _(390×844 sansJs)_

### texte coupé (3)

- **texte coupé** — `/clinics-et-studio` — div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « TRANSMETTRE » — coupé par section#debut « Illustration générée CLINICS, SESSIONS ET STUDIO T » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(844×390 normal)_

### lien profond (1)

- **lien profond** — `/musique → /contact?sujet=methodes#demande` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### journal du projet (1)

- **journal du projet** — _audit/journal.json absent (modèle : journal.exemple.json) : heure de chaque étape, attentes, modules, audit

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (32)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte > p.surtitre.hero-surtitre « BATTEUR · JAZZ, FUNK, NEW ORLEANS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#groove > div.conteneur.groove-grille > div.groove-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « À VOUS DE JOUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#methodes > div.conteneur.methodes-grille > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « LES MÉTHODES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#clinics > div.conteneur > p.surtitre:nth-of-type(1) « TRANSMETTRE ET ENREGISTRER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#scenes > div.conteneur.scenes-grille:nth-of-type(2) > div > p.surtitre:nth-of-type(1) « ILS ONT PARTAGÉ LA SCÈNE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dates > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dates > div.conteneur.fin-contenu > p.surtitre:nth-of-type(3) « DERNIÈRES SCÈNES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/bio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « BIO & MATÉRIEL » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « CLINICS, SESSIONS ET STUDIO » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · LE PROJET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.coordonnees-grille > ul.cartes-contact.fx-fini > li:nth-of-type(1) > p.surtitre:nth-of-type(1) « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.coordonnees-grille > ul.cartes-contact.fx-fini > li:nth-of-type(2) > p.surtitre:nth-of-type(1) « BOOKING DU QUARTET » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.coordonnees-grille > ul.cartes-contact.fx-fini > li:nth-of-type(3) > p.surtitre:nth-of-type(1) « MASTERCLASS SONOR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.coordonnees-grille > ul.cartes-contact.fx-fini > li:nth-of-type(4) > p.surtitre « SUR LES RÉSEAUX » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/methodes` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.surtitre.hero-surtitre « LES MÉTHODES DE GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/methodes` — article#livre-rythme-interieur > div.livre-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « LIVRE, 108 PAGES · 2025 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 7 autres (rapport.json)

### typographie française (1)

- **typographie française** — `/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > div > p.petit:nth-of-type(4) « Cours de batterie : Formats et disponibilités sur  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### section sans visuel (1)

- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Formulaire de démonstration : rien n » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 75 ms (différence 49 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/musique` — à 75 ms (différence 42 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/musique` — à 86 ms (différence 37 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (17.2 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/methodes` — écran différent à la même position après rechargement (4.9 %), voir comparaisons/rechargement-methodes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/musique` — écran différent à la même position après rechargement (10.3 %), voir comparaisons/rechargement-musique-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Audit rapide : étapes lourdes sur /, /bio, /clinics-et-studio, /contact, /methodes, /musique.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2803 ms depuis le premier octet
- Ouverture /bio (1366×768) : 2697 ms depuis le premier octet
- Ouverture /clinics-et-studio (1366×768) : 2695 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2682 ms depuis le premier octet
- Ouverture /methodes (1366×768) : 2795 ms depuis le premier octet
- film de l'ouverture /methodes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /musique (1366×768) : 2746 ms depuis le premier octet
- Ouverture / (390×844) : 2834 ms depuis le premier octet
- Ouverture /bio (390×844) : 2707 ms depuis le premier octet
- Ouverture /clinics-et-studio (390×844) : 2676 ms depuis le premier octet
- Ouverture /contact (390×844) : 2745 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /methodes (390×844) : 2754 ms depuis le premier octet
- Ouverture /musique (390×844) : 2784 ms depuis le premier octet
- bords de l’écran /musique 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 453 images d’intro, 22 de voile et 153 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /bio : aucune section épinglée ou plein écran.
- Tient dans l'écran /clinics-et-studio : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methodes : aucune section épinglée ou plein écran.
- Tient dans l'écran /musique : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 480, tâche la plus longue 0 ms
- Fluidité /bio 1366×768 (molette) : 0 % d'images lentes sur 332, tâche la plus longue 0 ms
- Fluidité /clinics-et-studio 1366×768 (molette) : 0 % d'images lentes sur 241, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 176, tâche la plus longue 0 ms
- Fluidité /methodes 1366×768 (molette) : 0 % d'images lentes sur 280, tâche la plus longue 0 ms
- Fluidité /musique 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /bio 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /clinics-et-studio 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 60 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /methodes 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /musique 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /bio : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /clinics-et-studio : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /methodes : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /musique : 0.34 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
