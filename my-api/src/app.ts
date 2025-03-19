import express from 'express';
import config from '../config/config';
import { setProductsRoutes } from './routes/productsRoutes';
import { setOrdersRoutes } from './routes/ordersRoutes';

const app = express();
const PORT = config.port || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Log toutes les requêtes pour le débogage
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Appliquer les routes
setProductsRoutes(app);
if (typeof setOrdersRoutes === 'function') {
    setOrdersRoutes(app);
}

// Route de test pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
    res.json({ message: 'API myShop fonctionne correctement' });
});

// Route de test directement dans app.ts
app.get('/test', (req, res) => {
    res.json({ message: 'API Test route' });
});

// Middleware pour gérer les erreurs 404
app.use((req, res) => {
    console.log(`Route non trouvée: ${req.method} ${req.url}`);
    res.status(404).json({ error: 'Route non trouvée' });
});

if (require.main === module) {
    // Démarre le serveur uniquement si ce fichier est appelé directement
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
}

// Exporter l'application pour les tests
export default app;