# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 19:59:53 · 50 min · 13 page(s) · audit complet

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-181008-complet` · version ?v=2
- Échecs : **2**
- À regarder : **48**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (507), balayage (12), films d’ouverture (24), films de transition (24), bords de l’écran (13), intro accélérable et passable (7), menu (1), clavier (13), liens et boutons (13), liens profonds (16), liens vers la page en cours (12), changements de hauteur (12), parcours du projet (1), tient dans l’écran (16), fluidité (24), défilement selon l’appareil (5), mouvement (24), effets du plan (7), souris immobile (12), vitesse (12), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — div.titres-cadre > ol.titres > li.titre-piste.joue:nth-of-type(1) > span.titre-n:nth-of-type(1) « 01 » — 4.46:1 (minimum 4.5:1) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **contraste insuffisant** — `/en` — div.titres-cadre > ol.titres > li.titre-piste.joue:nth-of-type(1) > span.titre-n:nth-of-type(1) « 01 » — 4.46:1 (minimum 4.5:1) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (30)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dates > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · LE PROJET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#dates > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « STEP 1 OF 4 · PROJECT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(1) > dt « WHO IT'S FOR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(2) > dt « WHAT'S INSIDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 5 autres (rapport.json)

### section sans visuel (3)

- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Formulaire de démonstration : rien n » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. 1 2 3 4 S » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. WHAT IS Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/musique` — à 83 ms (différence 50 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/musique` — à 83 ms (différence 45 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (6)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.3 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/en` — écran différent à la même position après rechargement (15.3 %), voir comparaisons/rechargement-en-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/en/methodes` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-en-methodes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/en/musique` — écran différent à la même position après rechargement (7.8 %), voir comparaisons/rechargement-en-musique-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/methodes` — écran différent à la même position après rechargement (5.1 %), voir comparaisons/rechargement-methodes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/musique` — écran différent à la même position après rechargement (8.2 %), voir comparaisons/rechargement-musique-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2880 ms depuis le premier octet
- Ouverture /bio (1366×768) : 2716 ms depuis le premier octet
- Ouverture /clinics-et-studio (1366×768) : 2714 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2663 ms depuis le premier octet
- Ouverture /en (1366×768) : 2794 ms depuis le premier octet
- Ouverture /en/bio (1366×768) : 2690 ms depuis le premier octet
- Ouverture /en/clinics-et-studio (1366×768) : 2696 ms depuis le premier octet
- Ouverture /en/contact (1366×768) : 2663 ms depuis le premier octet
- Ouverture /en/methodes (1366×768) : 2716 ms depuis le premier octet
- Ouverture /en/musique (1366×768) : 2706 ms depuis le premier octet
- Ouverture /methodes (1366×768) : 2706 ms depuis le premier octet
- film de l'ouverture /methodes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /musique (1366×768) : 2692 ms depuis le premier octet
- Ouverture / (390×844) : 2820 ms depuis le premier octet
- Ouverture /bio (390×844) : 2722 ms depuis le premier octet
- Ouverture /clinics-et-studio (390×844) : 2695 ms depuis le premier octet
- Ouverture /contact (390×844) : 2698 ms depuis le premier octet
- Ouverture /en (390×844) : 2860 ms depuis le premier octet
- Ouverture /en/bio (390×844) : 2739 ms depuis le premier octet
- film de l'ouverture /en/bio 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /en/clinics-et-studio (390×844) : 2711 ms depuis le premier octet
- Ouverture /en/contact (390×844) : 2701 ms depuis le premier octet
- Ouverture /en/methodes (390×844) : 2704 ms depuis le premier octet
- Ouverture /en/musique (390×844) : 2717 ms depuis le premier octet
- Ouverture /methodes (390×844) : 2758 ms depuis le premier octet
- Ouverture /musique (390×844) : 2749 ms depuis le premier octet
- bords de l’écran /en 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /musique 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 891 images d’intro, 59 de voile et 326 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /bio : aucune section épinglée ou plein écran.
- Tient dans l'écran /clinics-et-studio : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/bio : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/clinics-et-studio : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/methodes : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/musique : aucune section épinglée ou plein écran.
- Tient dans l'écran /methodes : aucune section épinglée ou plein écran.
- Tient dans l'écran /musique : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 457, tâche la plus longue 52 ms
- Fluidité /bio 1366×768 (molette) : 0 % d'images lentes sur 333, tâche la plus longue 0 ms
- Fluidité /clinics-et-studio 1366×768 (molette) : 0 % d'images lentes sur 249, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 186, tâche la plus longue 0 ms
- Fluidité /en 1366×768 (molette) : 1 % d'images lentes sur 431, tâche la plus longue 53 ms
- Fluidité /en/bio 1366×768 (molette) : 0 % d'images lentes sur 295, tâche la plus longue 0 ms
- Fluidité /en/clinics-et-studio 1366×768 (molette) : 0 % d'images lentes sur 238, tâche la plus longue 0 ms
- Fluidité /en/contact 1366×768 (molette) : 0 % d'images lentes sur 181, tâche la plus longue 0 ms
- Fluidité /en/methodes 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité /en/musique 1366×768 (molette) : 0 % d'images lentes sur 278, tâche la plus longue 51 ms
- Fluidité /methodes 1366×768 (molette) : 0 % d'images lentes sur 285, tâche la plus longue 0 ms
- Fluidité /musique 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1401, tâche la plus longue 0 ms
- Fluidité /bio 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /clinics-et-studio 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /en 390×844 (doigt) : 0 % d'images lentes sur 1392, tâche la plus longue 51 ms
- Fluidité /en/bio 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /en/clinics-et-studio 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /en/contact 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /en/methodes 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /en/musique 390×844 (doigt) : 0 % d'images lentes sur 1367, tâche la plus longue 0 ms
- Fluidité /methodes 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /musique 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Vitesse / : 0.59 s de calcul au chargement (téléphone ralenti).
- Vitesse /bio : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /clinics-et-studio : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.63 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/bio : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/clinics-et-studio : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/contact : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/methodes : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/musique : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /methodes : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /musique : 0.40 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/en --seulement=fichiers,mesures
```
