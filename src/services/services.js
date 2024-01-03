import { SuperHeroModel } from '../models/models.js';

// Get all superheroes data from the database
const getAllSuperheroes = async () => {
  try {
    const result =  await SuperHeroModel.find({});
    return result;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

const getSuperheroByAlias = async (alias) => {
  try {
    const result = await SuperHeroModel.findOne({ alias });
    return result;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

export {
  getAllSuperheroes,
  getSuperheroByAlias
};