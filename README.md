# Jeu de Karaoké Sahria

## Description
Application web interactive de karaoké avec interface élégante et moderne.

## Structure du projet
```
sahria_project/
├── index.html          # Page principale
├── style.css           # Styles CSS modernes et élégants
├── script.js           # Logique JavaScript
├── videos/             # Dossier pour les vidéos MP4
│   ├── video1.mp4
│   ├── video2.mp4
│   ├── ...
│   └── video20.mp4
└── README.md           # Ce fichier
```

## Installation et utilisation

### 1. Ajouter les vidéos
Placez vos fichiers vidéo MP4 dans le dossier `videos/` avec les noms suivants :
- `video1.mp4` pour le numéro 1
- `video2.mp4` pour le numéro 2
- ...
- `video20.mp4` pour le numéro 20

### 2. Lancer l'application
Ouvrez le fichier `index.html` dans un navigateur web moderne.

## Fonctionnalités

### Interface utilisateur
- Design moderne avec dégradés élégants
- Effets de verre (glassmorphism)
- Animations fluides et transitions
- Interface responsive (mobile et desktop)

### Fonctionnalités principales
- Grille de 20 numéros interactifs
- Lecture vidéo en plein écran
- Système de numéros "utilisés" pour éviter les répétitions
- Gestion d'erreurs pour les vidéos manquantes
- Contrôles intuitifs (fermeture avec Échap, clic sur fond)

### Améliorations apportées
1. **Design élégant** : Nouvelle palette de couleurs avec dégradés sophistiqués
2. **Vidéos locales** : Remplacement des liens YouTube par des fichiers MP4 locaux
3. **Gestion d'erreurs** : Messages d'erreur stylés pour les vidéos manquantes
4. **Animations** : Effets visuels améliorés et animations d'entrée
5. **Responsive** : Adaptation parfaite aux différentes tailles d'écran

## Personnalisation

### Modifier les couleurs
Éditez le fichier `style.css` et modifiez les variables de couleur dans les dégradés.

### Ajouter plus de vidéos
1. Ajoutez les fichiers MP4 dans le dossier `videos/`
2. Modifiez le tableau `songsData` dans `script.js`
3. Ajustez la grille CSS si nécessaire

### Fonctions de débogage
- `resetAllNumbers()` : Réinitialise tous les numéros
- `checkVideoFiles()` : Affiche la liste des vidéos configurées

## Compatibilité
- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Support mobile et tactile
- Formats vidéo : MP4 (recommandé)

## Notes techniques
- Utilise les APIs HTML5 Video
- Effets CSS3 avancés (backdrop-filter, gradients)
- JavaScript ES6+
- Aucune dépendance externe requise

