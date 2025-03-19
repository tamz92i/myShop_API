import { Request, Response } from 'express';

class ProductsController {
    constructor() {
        // ...initialisation...
    }

    public async getProducts(req: Request, res: Response): Promise<void> {
        // ...logique pour récupérer les produits...
    }

    public async createProduct(req: Request, res: Response): Promise<void> {
        // ...logique pour créer un produit...
    }
}

export default ProductsController;