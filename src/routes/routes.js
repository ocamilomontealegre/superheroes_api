import { Router } from 'express';
import * as controller from '../controller/controller.js';

const router = Router();

// Get index
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

// Get all Superheroes
router.get('/api/superheroes', controller.getAllSuperheroes);

export default router;
