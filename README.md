- nom : VICAIRE
- prénom : Jeremy
- URL Netlify :

# Travail

N'oublier pas votre nom, prénom et l'URL de publication Netlify...

# Complétez le CSS

**Faire plusieurs commits** pour chaque étape du CSS

Pour styler l'accordéon ouvert, utilisez l'attribut `open` (entre crochet en CSS `[open]` :

```css
details {
  /* fermé et ouvert */
}

details[open] {
  /* ouvert */
}
```

Compléter le fichier [accordeon.css](/src/css/components/accordeon.css) et visualiser l'effet sur [index.html](/index.html) .

Vous devez obtenir comme la premiére video sur Moodle.

Voir https://css-tricks.com/using-styling-the-details-element/

# Manuellement sans JS

Simplement, cliquez sur les `summary`...

# Refermer les autres par code JS

Testez dans la console :

```js
accordeon = document.querySelector(".accordeon");
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
```

À faire, adapter le code dans les fichiers [script.js](/src/js/script.js) pour le faire suite à un clic sur un des `summary`.

**Commit** : referme les détails suite à un clic sur un `summary`

# Version avec [triangle CSS](https://css-tricks.com/snippets/css/css-triangle/)

Voir seconde video sur Moodle.

Pour supprimer le triangle "d'origine" :

```css
.accordeon > details > summary {
  list-style: none;
}
.accordeon > details > summary::marker,
.accordeon > details > summary::-webkit-details-marker {
  display: none;
}
```

**Faire plusieurs commits** pour chaque étape du CSS

# Notes de réalisation

## Supports et adaptations

- [CM 4 : événements et délégation](https://moodle.univ-fcomte.fr/mod/page/view.php?id=798825) : un seul `addEventListener` sur `.accordeon`, contrôle de `event.target.tagName`, puis `querySelectorAll` et `forEach` du README pour fermer les autres panneaux.
- Le HTML du TP contient une image dans chaque `summary`. Si la cible est l'image, `parentElement` permet de retrouver son `summary`, puis son `details`. Le panneau cliqué est exclu de la fermeture pour conserver sa bascule native, y compris au second clic. Aucun gestionnaire n'est ajouté sur le contenu.
- [TD 4 : effet de volet](https://moodle.univ-fcomte.fr/mod/page/view.php?id=798832) : `overflow: hidden`, transition de largeur pour la première version, puis `interpolate-size: allow-keywords` et transition vers `height: auto` pour la version verticale. Le sélecteur `[open]` du README remplace `:hover`.
- Le triangle reprend les bordures transparentes et la rotation de l'exemple du TD. Il est placé dans `summary::after`, à droite de l'image, pour suivre la seconde vidéo. Le marqueur natif est supprimé avec le code du README.
- Les dimensions, les fonds gris et la couleur rose du triangle ouvert sont adaptés aux images fournies et au modèle vertical observé dans Moodle. La hauteur fermée de 151 px correspond aux images de 102 × 77 px affichées sur 200 px de largeur.

## Étapes conservées dans Git

1. `221ae67` : disposition des aperçus et masquage du débordement.
2. `7d0613d` : volet horizontal ouvert avec `[open]` et transition de largeur ; version sans JavaScript.
3. `ed974df` : fermeture des autres panneaux par délégation des clics.
4. `acd4656` : variante verticale et suppression du marqueur natif.
5. `c44e0ec` : triangle CSS et rotation suivant `[open]`.

Le dernier état correspond à la variante verticale ; la version horizontale reste consultable dans les étapes 2 et 3 de l'historique.

## Vérifications

- Syntaxe JavaScript : `node --check` réussi.
- Analyse syntaxique du CSS avec Lightning CSS réussie ; chemins des ressources HTML vérifiés.
- Scénarios DOM testés avec jsdom : ouverture indépendante sans JS, clic sur l'image, clic sur le `summary`, fermeture du panneau courant au second clic, clic sur le texte sans changement, neuf changements successifs avec un seul panneau ouvert.
- `git diff --check` réussi.
- Limite : ces contrôles ne valident pas le rendu, les animations ou l'activation au clavier. Le navigateur connecté n'a pas pu charger les adresses locales et Live Server ne fonctionne pas non plus côté utilisateur. Ces vérifications visuelles et clavier restent à effectuer.

L'URL Netlify sera renseignée par l'utilisateur à la fin du TP. Aucun push ni déploiement n'a été effectué.
