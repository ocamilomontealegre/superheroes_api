import * as services from '../services/services.js';
import * as logger from '../utils/logger.js';

// Get all supeheroes data
const getAllSuperheroes = async (req, res) => {
  try {
    const result = await services.getAllSuperheroes();

    logger.info(req.method, req.url, result);

    if (!result || result.length === 0) {
      res.status(400).json({ error: 'Invalid response from the service' });
      return;
    }

    res.status(200).json(result);
  } catch (error) {
    logger.error(req.method, req.url, error);
    res.status(500).json({ error: 'Error getting all superheroes' });
  }
};

export {
  getAllSuperheroes
};
