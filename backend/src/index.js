
import dotenv from 'dotenv';
dotenv.config();

import { app } from './app.js';
import { initDatabase } from './db/init.js';

// Connect to MongoDB before handling requests
await initDatabase();

console.info('MongoDB database connection established');

// Export Express app for Vercel
export default app;
