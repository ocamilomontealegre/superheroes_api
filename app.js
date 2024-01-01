import express from 'express';
import routes from './src/routes/routes.js';
import * as database from './src/utils/database.js';
import handleUnknownEndpoint from './src/utils/middleware.js';

database.connectToDatabase();

const app = express();

// Use API routes
app.use(routes);

// Handle unknown API endpoints
app.use(handleUnknownEndpoint);

export default app;