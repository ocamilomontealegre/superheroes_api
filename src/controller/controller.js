import * as services from '../services/services.js';
import * as validations from '../validations/validations.js';
import * as schemas from '../validations/schemas.js';
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

// Get superhero data by his name
const getSuperheroByAlias = async (req, res) => {
  const alias = req.params.alias;

  const validation = validations.validateData(alias, schemas.superheroAliasSchema);
  if (validation.statusCode !== 200) {
    logger.error(req.method, req.url, { error: validation.error });
    res.status(validation.statusCode).json({ error: validation.error });
    return;
  }

  try {
    const result = await services.getSuperheroByAlias(alias);
    
    if (!result) {
      logger.error(req.method, req.url);
      res.status(400).json({ error: 'Invalid response from the service' });
      return;
    }

    logger.info(req.method, req.url, result);

    res.status(200).json(result);
  } catch (error) {
    logger.error(req.method, req.url, error);
    res.status(500).json({ error: 'Error getting superhero data' });
  }
};

// Create new superhero entry
const createSuperheroEntry = async (req, res) => {
  const superheroData = { ...req.body };

  const validation = validations.validateData(superheroData, schemas.superheroEntitySchema);
  if (validation.statusCode !== 200) {
    logger.error(req.method, req.url, { error: validation.error });
    res.status(validation.statusCode).json({ error: validation.error });
    return;
  }

  try {
    const result = await services.createSuperheroEntry(superheroData);

    if (!result) {
      logger.error(req.method, req.url);
      res.status(400).json({ error: 'Invalid response from the service' });
      return;
    }

    logger.info(req.method, req.url, result);

    res.status(200).json(result);
  } catch (error) {
    logger.error(req.method, req.url, error);
    res.status(500).json({ error: 'Error creating the new entry' });
  }
};

// Get superhero images
const getSuperheroPicture = async (req, res) => {
  const { alias = 'superman' } = req.params;
  if (!alias) {
    logger.error(req.method, req.url, { error: 'No alias found as a request param' });
    res.status(400).json({ error: 'No alias found as a request param' });
    return;
  }

  try {
    const result = await services.getSuperheroPicture(alias);

    if (!result) {
      logger.error(req.method, req.url, { error: 'Error fetching the data' });
      res.status(400).json({ error: 'Error fetching the data' });
      return;
    }

    logger.info(req.method, req.url, result);
    res.status(200).json({ pictureUrl: result });
  } catch (error) {
    logger.error(req.method, req.url, error);
    res.status(500).json({ error: 'Error getting superhero data' });
  }
};

export {
  getAllSuperheroes,
  getSuperheroByAlias,
  createSuperheroEntry,
  getSuperheroPicture
};
