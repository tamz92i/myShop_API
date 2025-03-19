# My API

This project is a RESTful API designed to serve as a bridge between the frontend and backend/database for an online store. It exposes endpoints to retrieve and modify data related to products and orders.

## Project Structure

- **src/**: Contains the source code for the application.
  - **controllers/**: Contains the logic for handling requests.
    - `ordersController.ts`: Manages order-related requests.
    - `productsController.ts`: Manages product-related requests.
  - **routes/**: Defines the API routes.
    - `ordersRoutes.ts`: Sets up routes for orders.
    - `productsRoutes.ts`: Sets up routes for products.
  - `app.ts`: Entry point of the application, initializes Express and sets up middleware and routes.

- **config/**: Contains configuration files.
  - `config.ts`: Application configuration, including database connection settings.

- **scripts/**: Contains build and test scripts.
  - `build.sh`: Script to build the project.
  - `test.sh`: Script to run unit tests.

- **tests/**: Contains unit tests for the application.
  - `orders.test.ts`: Tests for order functionalities.
  - `products.test.ts`: Tests for product functionalities.

- **tsconfig.json**: TypeScript configuration file.

- **package.json**: npm configuration file, listing dependencies and scripts.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the API, run:
```
npm start
```

To build the project, run:
```
./scripts/build.sh
```

To run tests, use:
```
./scripts/test.sh
```

## Endpoints

- **Products**
  - `GET /api/products`: Retrieve all products.
  - `POST /api/products`: Create a new product.

- **Orders**
  - `GET /api/orders`: Retrieve all orders.
  - `POST /api/orders`: Create a new order.

## License

This project is licensed under the MIT License.