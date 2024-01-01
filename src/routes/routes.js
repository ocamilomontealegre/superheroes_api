import { Router } from 'express';

const router = Router();

// Get index
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

export default router;
