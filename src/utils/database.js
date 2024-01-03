import 'dotenv/config';
import mongoose from 'mongoose';
import * as logger from '../utils/logger.js';

// Database url
const url = `mongodb+srv://ocamilomontealegre:${process.env.DB_PASSWORD}@pokemon-cluster.y3sj8ew.mongodb.net/Restful_APIs`;

mongoose.set('strictQuery', false);

// Connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    logger.info('Successfully connected to the database');
  } catch (error) {
    logger.error(error.message);
    throw new Error('Couldn"t connect to the database');
  }
};

// Close database connection

const closeDatabaseConnection = async () => {
  try {
    await mongoose.connection.close();
    logger.info('Successfully closed the connection');
  } catch (error) {
    logger.error('Error closing the connection');
  }
};

export {
  connectToDatabase,
  closeDatabaseConnection
};