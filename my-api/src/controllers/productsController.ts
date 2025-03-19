import { Request, Response } from 'express';
import pool from '../db';

class ProductsController {
    async getProducts(req: Request, res: Response) {
        try {
            console.log("Récupération des produits...");
            const result = await pool.query('SELECT * FROM produits');
            res.status(200).json(result.rows);
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
            res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const { name, price, description = '', stock = 0 } = req.body;
            if (!name || price === undefined) {
                return res.status(400).json({ error: 'Les champs name et price sont requis' });
            }
            
            const query = 'INSERT INTO produits (nom, description, prix, stock) VALUES ($1, $2, $3, $4) RETURNING *';
            const values = [name, description, price, stock];
            const result = await pool.query(query, values);
            
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error("Erreur lors de la création du produit:", error);
            res.status(500).json({ error: 'Erreur lors de la création du produit' });
        }
    }
}

export default ProductsController;