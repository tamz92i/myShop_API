import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();
const productsController = new ProductsController();

import { Application } from 'express';

export const setProductsRoutes = (app: Application) => {
    app.get('/api/products', productsController.getProducts.bind(productsController));
    app.post('/api/products', productsController.createProduct.bind(productsController));
};