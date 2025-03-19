import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
    port: process.env.PORT || 3000,
    // ...autres configurations...
};

export default config;