import { Router, Application } from 'express';
import { OrdersController } from '../controllers/ordersController';

const router = Router();
const ordersController = new OrdersController();

export function setOrdersRoutes(app: Application) {
    app.use('/api/orders', router);
    
    router.get('/', ordersController.getOrders.bind(ordersController));
    router.post('/', ordersController.createOrder.bind(ordersController));
}