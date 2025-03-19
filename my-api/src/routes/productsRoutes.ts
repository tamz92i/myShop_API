import { Router, Application } from 'express';
import ProductsController from '../controllers/productsController';

const productsController = new ProductsController();

export const setProductsRoutes = (app: Application) => {
    // Pour correspondre aux attentes des tests
    app.get('/api/products', productsController.getProducts.bind(productsController));
    app.post('/api/products', productsController.createProduct.bind(productsController));
    
    // Pour maintenir la compatibilité avec les routes en français
    app.get('/api/produits', productsController.getProducts.bind(productsController));
    app.post('/api/produits', productsController.createProduct.bind(productsController));
};