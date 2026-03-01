# Design - Site web Caroline Arnaud, Avocate

**Date** : 2026-03-01
**Type** : Site vitrine statique (HTML/CSS/JS)
**Client** : Maitre Caroline Arnaud - Avocate en droit du travail

## Informations client

- **Nom** : Maitre Caroline Arnaud
- **Telephone** : 09 72 14 34 50
- **Email** : ca@avocatarnaud.fr
- **Adresse** : 87 rue de la Course, 33000 Bordeaux
- **Case** : 1287
- **Serment** : 2009 (17 ans d'experience)
- **Cabinet** : CALL AVOCATS
- **Specialite** : Droit du travail (salaries et employeurs)

## Approche technique

- HTML/CSS pur + JS minimal
- Aucun framework, aucun build tool
- Formulaire de contact via Formspree
- Google Fonts (Inter + Playfair Display)
- Google Maps embed pour la localisation
- Mobile-first, 100% responsive

## Architecture fichiers

```
avocatarnaud/
├── index.html              (Accueil)
├── expertise.html          (Domaines d'expertise)
├── cabinet.html            (Le cabinet)
├── contact.html            (Contact + formulaire)
├── mentions-legales.html   (Mentions legales)
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    └── caroline-arnaud.jpg
```

## Design visuel

### Palette de couleurs

| Role        | Couleur   | Hex       |
|-------------|-----------|-----------|
| Fond        | Blanc casse | #FAFAF8 |
| Principal   | Bleu-vert doux | #2A6F6F |
| Texte       | Gris chaud | #4A4A4A |
| Accent      | Dore subtil | #C8A96E |
| Fond alt    | Gris clair | #F0EFEB |

### Typographies

- **Titres** : Playfair Display (serif, elegance)
- **Corps** : Inter (sans-serif, lisibilite)
- Source : Google Fonts CDN

### Responsive

- **Approche** : Mobile-first
- **Breakpoints** : 480px, 768px, 1024px
- **Mobile** : Menu burger anime, sections empilees, bouton "Appeler" sticky
- **Tablette** : Grilles 2 colonnes, navigation horizontale
- **Desktop** : Grilles 3 colonnes, hero plein ecran, header fixe semi-transparent

## Pages - Structure et contenu

### 1. Accueil (index.html)

- **Hero** : Photo de Caroline en fond/cote, titre accroche "Votre avocate en droit du travail a Bordeaux", sous-titre, 2 CTA (Prendre RDV / Decouvrir nos expertises)
- **Section domaines** : 3 blocs (Salaries, Employeurs, Contentieux) avec icones et resume
- **Section chiffres** : Bandeau avec compteurs (17 ans experience, Barreau de Bordeaux, +X dossiers)
- **Section reassurance** : Temoignage ou citation, valeurs cles
- **CTA final** : Bandeau "Besoin d'un conseil ?" avec lien contact

### 2. Expertise (expertise.html)

- **Introduction** : Texte presentant l'approche de Caroline en droit du travail
- **Section Salaries** : Liste des prestations (licenciement, harcelement, prud'hommes, contrat, negociation...)
- **Section Employeurs** : Liste des prestations (redaction contrats, procedure disciplinaire, restructuration, conseil RH...)
- **CTA** : Lien vers contact pour chaque section

### 3. Le cabinet (cabinet.html)

- **Portrait** : Photo + biographie de Caroline
- **Parcours** : Formation, serment 2009, experience
- **Cabinet CALL AVOCATS** : Presentation du cabinet
- **Valeurs** : Ecoute, rigueur, engagement, proximite
- **Localisation** : Mention Bordeaux, accessibilite

### 4. Contact (contact.html)

- **Coordonnees** : Telephone, email, adresse, horaires
- **Formulaire** : Nom, email, telephone, objet (select: salarie/employeur/autre), message. Via Formspree
- **Carte** : Google Maps embed centree sur 87 rue de la Course Bordeaux
- **Bouton appel** : CTA direct tel: sur mobile

### 5. Mentions legales (mentions-legales.html)

- Identite (nom, barreau, CARPA)
- Hebergeur
- RGPD / politique de confidentialite
- Credits

## Navigation

- Header fixe : Logo typo "Caroline Arnaud" + liens pages + CTA Contact
- Footer : Coordonnees, liens rapides, mentions legales, barreau de Bordeaux
- Fil d'ariane sur pages internes

## Formulaire de contact

- Service : Formspree (plan gratuit, 50 soumissions/mois)
- Champs : Nom, Email, Telephone, Type (salarie/employeur/autre), Message
- Validation JS cote client
- Message de confirmation apres envoi

## Performance

- Pas de framework = chargement rapide
- Images optimisees (WebP avec fallback)
- CSS minifie en production
- Score Lighthouse cible : 95+
