import { Router } from 'express';
import * as controller from '../controller/controller.js';

const router = Router();

// Get index
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

// Get all Superheroes
router.get('/api/superheroes', controller.getAllSuperheroes);

// Get superhero by name
router.get('/api/superheroes/:alias', controller.getSuperheroByAlias);

// Create new superhero entry
router.post('/api/superheroes/create', controller.createSuperheroEntry);

export default router;
