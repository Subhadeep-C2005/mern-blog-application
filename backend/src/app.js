
import { postsRoutes } from './routes/posts.js';
import { initDatabase } from './db/init.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Ensure MongoDB is connected before handling requests
app.use(async (req, res, next) => {
    try {
        await initDatabase();
        next();
    } catch (error) {
        console.error('Database connection failed:', error);
        next(error);
    }
});

postsRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

export { app };
export default app;
