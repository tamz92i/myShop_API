# 🛍️ myShop API

## 🌟 Description

Cette API sert de backend pour une boutique en ligne, fournissant des points de terminaison pour la gestion des produits et des commandes. Elle est construite avec Express, TypeScript et PostgreSQL.

## ✨ Fonctionnalités

-   **Produits** :
    -   Récupérer une liste de tous les produits. 📦
    -   Créer de nouveaux produits. ➕
-   **Commandes** :
    -   Récupérer une liste de toutes les commandes. 🧾
    -   Créer de nouvelles commandes. 🛒

## 🛠️ Technologies utilisées

-   [Node.js](https://nodejs.org/) : Environnement d'exécution JavaScript côté serveur.
-   [Express](https://expressjs.com/) : Framework web pour Node.js.
-   [TypeScript](https://www.typescriptlang.org/) : Sur-ensemble typé de JavaScript.
-   [PostgreSQL](https://www.postgresql.org/) : Système de gestion de base de données relationnelle.
-   [dotenv](https://github.com/motdotla/dotenv) : Pour gérer les variables d'environnement.
-   [pg](https://node-postgres.com/) : Pour interagir avec la base de données PostgreSQL.

## ⚙️ Prérequis

-   [Node.js](https://nodejs.org/) (version 14 ou supérieur)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
-   [PostgreSQL](https://www.postgresql.org/)

## 🚀 Installation

1.  Clonez le dépôt :

    ```bash
    git clone <https://github.com/tamz92i/myShop_API.git>
    cd my-api
    ```

2.  Installez les dépendances :

    ```bash
    npm install # ou yarn install
    ```

3.  Configurez la base de données :

    -   Créez un fichier `.env` à la racine du projet avec les variables suivantes :

        ```
        DB_HOST=localhost
        DB_NAME=myshop_db
        DB_USER=votre_utilisateur_db
        DB_PASS=votre_mot_de_passe_db
        DB_PORT=5432
        ```

    -   Assurez-vous que PostgreSQL est en cours d'exécution et que la base de données spécifiée dans `.env` existe.

## 💻 Utilisation

1.  Compilez le projet :

    ```bash
    npm run build
    ```

2.  Démarrez le serveur :

    ```bash
    npm start
    ```

    Alternativement, vous pouvez utiliser le script `dev` pour le développement, qui utilise `ts-node` pour exécuter le serveur directement à partir du code source TypeScript :

    ```bash
    npm run dev
    ```

3.  Points de terminaison de l'API :

    -   `GET /api/products` : Récupérer tous les produits.
    -   `POST /api/products` : Créer un nouveau produit.
        -   Corps de la requête : `{ name: string, price: number, description?: string, stock?: number }`
    -   `GET /api/orders` : Récupérer toutes les commandes.
    -   `POST /api/orders` : Créer une nouvelle commande.
        -   Corps de la requête : `{ productId: number, quantity: number, customerName: string }`

## 🧪 Scripts

-   `build` : Compile le code TypeScript en JavaScript.
-   `start` : Démarre le serveur en utilisant le code JavaScript compilé.
-   `dev` : Démarre le serveur en utilisant `ts-node` pour le développement.

## 🤝 Contribution

N'hésitez pas à contribuer au projet en soumettant des pull requests.

## 📜 Licence

[MIT](https://opensource.org/licenses/MIT)
