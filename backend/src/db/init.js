
import mongoose from 'mongoose';

let connectionPromise;

export function initDatabase() {
    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
        throw new Error('DATABASE_URL environment variable is missing');
    }

    if (mongoose.connection.readyState === 1) {
        return Promise.resolve(mongoose.connection);
    }

    if (!connectionPromise) {
        connectionPromise = mongoose.connect(DATABASE_URL)
            .catch((error) => {
                connectionPromise = null;
                throw error;
            });
    }

    return connectionPromise;
}
