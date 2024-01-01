import * as logger from '../utils/logger.js';

// Handle unknow API endpoints
const handleUnknownEndpoints =  (req, res) => {
  logger.error(req.method, req.url);
  res.status(404).json({ error: 'Endpoint not found!' });
};

export default handleUnknownEndpoints;