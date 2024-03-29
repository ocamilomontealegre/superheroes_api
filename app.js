import express from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';
import * as database from './src/utils/database.js';
import handleUnknownEndpoint from './src/utils/middleware.js';

database.connectToDatabase();

const app = express();

// Allow CORS (Cross Origin Resource Sharing)
app.use(cors());

// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Use API routes
app.use(routes);

// Handle unknown API endpoints
app.use(handleUnknownEndpoint);

export default app;