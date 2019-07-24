# PolyTeam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Standards de programmations

Cette section présente les différents standards de programmations que vous devez respecter lors de la réalisation de ce projet et qui seront utilisés pour la correction de l'assurance qualité de votre projet.

## Indentation

Les fichiers .html doivent être indentés avec 2 espaces.

Les fichiers .ts doivent être indentés avec 4 espaces.

Les fichiers .css doivent être indentés avec 4 espaces.

Vous pouvez utiliser Alt+Shift+F dans Visual Studio Code pour indenter votre code automatiquement, mais assurez vous qu'il soit configuré avec ces standards.

## Format

Une accolade fermante occupe sa propre ligne de code, sauf dans le cas d'une if/else, où l'accolade fermante du if se trouve sur la ligne du else.

Une ligne de code devrait normalement avoir entre 45 et 80 caractères.

Une ligne de code ne devrait JAMAIS dépasser les 140 caractères.

## Conventions de nommage

Utilisez le ALL_CAPS pour les constantes.

Utilisez le PascalCase pour les noms de types et les valeurs d'énumérations.

Utilisez le camelCase pour les noms de fonctions, de propriétés et de variables.

Utilisez le kebab-case pour les noms de balises des composants Angular.

Évitez les abbréviations dans les noms de variables ou de fonctions.

Un tableau/list/dictionnaire devrait avoir un nom indiquant qu'il contient plusieurs objets, par exemple "Cars".

On évite de mettre le type de l'objet dans le noms, par exemple on préfère "Cars" à "ListOfCars" lorsqu'on déclare une liste.

Un objet ne devrait pas avoir un nom qui porte à croire qu'il s'agit d'un tableau.

Vous devez coder dans une langue et une seule l'anglais

## Autres standards

N'utilisez jamais var. Utilisez let et const.

Utiliser $ a la fin d'une observable variable: variable$.

Creer un nouveau fichier pour chaque feature.

N'utilisez jamais any, que ce soit implicitement ou explicitement.

N'utilisez pas le mot-clé function, utilisez les fonctions anonymes: `() => {...}`.

Déclarez tous les modificateurs d'accès des variables et des fonctions (public/private/protected).

Déclarez tous les types de retour des fonctions (incluant void).

Évitez les fonctions qui ont plus d'une responsabilité.

N'utilisez pas de nombres magiques.

N'utilisez pas de chaînes de caractères magiques.

Une fonction devrait avoir 3 paramètres ou moins.

Évitez la duplication de code.

Évitez d'avoir plus de deux boucles imbriquées.

Séparez votre code Typescript du CSS et du HTML.

## GIT

Une seule fonctionnalité par branche.

Une branche fonctionnalité devrait se nommer `feature/nom-du-feature`.

Une branche correction de bogue devrait se nommer `hotfix/nom-du-bug`.

Les messages de commit doivent être courts et significatifs.

Vous devez utiliser votre nom complet comme auteur de vos commit et garder le même courriel, peu importe l'ordinateur que vous utilisez. Il ne devrait donc pas y avoir plus de 6 contributeurs dans votre repo.

Nous vous recommandons fortement de suivre le [Github-Flow](https://guides.github.com/introduction/flow/). [Lecture suggérée](http://scottchacon.com/2011/08/31/github-flow.html)

## Lectures suggérées

[AntiPatterns](https://sourcemaking.com/antipatterns) (plus spécifiquement [Software Development AntiPatterns](https://sourcemaking.com/antipatterns/software-development-antipatterns))

# Cadriciel

Nous vous avons fourni plusieurs pièces de code.
