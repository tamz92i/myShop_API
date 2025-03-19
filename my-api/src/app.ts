import express from 'express';
import { setOrdersRoutes } from './routes/ordersRoutes';
import { setProductsRoutes } from './routes/productsRoutes';
import config from '../config/config';

const app = express();
const PORT = config.port || 3000;

app.use(express.json());

setOrdersRoutes(app);
setProductsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});