import { Pool, PoolClient } from 'pg';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

console.log('Variables d\'environnement :', {
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_PORT: process.env.DB_PORT,
});

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'myshop_db',
    user: process.env.DB_USER || 'tcouvilliers',
    password: process.env.DB_PASS || '',
    port: parseInt(process.env.DB_PORT || '5432', 10),
});

// Test de connexion avec les types corrects
pool.connect((err: Error | undefined, client: PoolClient | undefined, release: (release?: any) => void) => {
    if (err) {
        console.error('Erreur de connexion à la base de données', err);
    } else {
        console.log('Connexion à PostgreSQL réussi');
        release();
    }
});

export default pool;