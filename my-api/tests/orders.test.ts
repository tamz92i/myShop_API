import request from 'supertest';
import app from '../src/app'; // Assurez-vous que le chemin d'importation est correct

describe('Orders API', () => {
    it('should retrieve all orders', async () => {
        const response = await request(app).get('/api/orders');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should create a new order', async () => {
        const newOrder = {
            productId: 1,
            quantity: 2,
            customerName: 'John Doe'
        };

        const response = await request(app).post('/api/orders').send(newOrder);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.productId).toBe(newOrder.productId);
        expect(response.body.quantity).toBe(newOrder.quantity);
        expect(response.body.customerName).toBe(newOrder.customerName);
    });
});