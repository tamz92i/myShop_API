import { Request, Response } from 'express';
import pool from '../db';

export class OrdersController {
    public async getOrders(req: Request, res: Response): Promise<void> {
        try {
            const result = await pool.query('SELECT * FROM orders');
            res.status(200).json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des commandes' });
        }
    }

    public async createOrder(req: Request, res: Response): Promise<void> {
        const { productId, quantity, customerName } = req.body;
        if (!productId || !quantity || !customerName) {
            res.status(400).json({
                error: 'Les champs productId, quantity et customerName sont requis'
            });
            return;
        }
        try {
            const query = 'INSERT INTO orders (productId, quantity, customerName) VALUES ($1, $2, $3) RETURNING *';
            const values = [productId, quantity, customerName];
            const result = await pool.query(query, values);
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la création de la commande' });
        }
    }
}