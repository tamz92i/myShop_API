# myShop API

## Description

This API serves as the backend for an online store, providing endpoints for managing products and orders. It's built with Express, TypeScript, and PostgreSQL.

## Features

-   **Products**:
    -   Retrieve a list of all products.
    -   Create new products.
-   **Orders**:
    -   Retrieve a list of all orders.
    -   Create new orders.

## Technologies Used

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [dotenv](https://github.com/motdotla/dotenv) for managing environment variables
-   [pg](https://node-postgres.com/) for interacting with the PostgreSQL database

## Prerequisites

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [PostgreSQL](https://www.postgresql.org/)

## Installation

1.  Clone the repository:

    ```bash
    git clone <https://github.com/tamz92i/myShop_API.git>
    cd my-api
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Configure the database:

    -   Create a `.env` file in the root directory with the following variables:

        ```
        DB_HOST=localhost
        DB_NAME=myshop_db
        DB_USER=your_db_user
        DB_PASS=your_db_password
        DB_PORT=5432
        ```

    -   Make sure PostgreSQL is running and the database specified in `.env` exists.

## Usage

1.  Build the project:

    ```bash
    npm run build
    ```

2.  Start the server:

    ```bash
    npm start
    ```

    Alternatively, you can use the `dev` script for development, which uses `ts-node` to run the server directly from the TypeScript source:

    ```bash
    npm run dev
    ```

3.  API Endpoints:

    -   `GET /api/products`: Retrieve all products.
    -   `POST /api/products`: Create a new product.
        -   Request body: `{ name: string, price: number, description?: string, stock?: number }`
    -   `GET /api/orders`: Retrieve all orders.
    -   `POST /api/orders`: Create a new order.
        -   Request body: `{ productId: number, quantity: number, customerName: string }`

## Scripts

-   `build`: Compiles the TypeScript code to JavaScript.
-   `start`: Starts the server using the compiled JavaScript code.
-   `dev`: Starts the server using `ts-node` for development.

## Contributing

Feel free to contribute to the project by submitting pull requests.

## License

[MIT](https://opensource.org/licenses/MIT)
```
