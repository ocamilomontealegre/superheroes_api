import express from 'express';
import routes from './src/routes/routes.js';

const app = express();

app.use(routes);

export default app;