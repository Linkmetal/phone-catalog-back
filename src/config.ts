import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const config = {
  db: {
    mongodb: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'develop',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'develop',
    },
  },
  listeningPort: parseInt(process.env.APP_PORT || '8080', 10),
};

export default config;
