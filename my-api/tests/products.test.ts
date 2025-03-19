import request from 'supertest';
import app from '../src/app'; // Assurez-vous que le chemin d'importation est correct

describe('Products API', () => {
    it('should fetch all products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should create a new product', async () => {
        const newProduct = {
            name: 'Test Product',
            price: 100,
            description: 'This is a test product'
        };

        const response = await request(app).post('/api/products').send(newProduct);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(newProduct.name);
    });
});