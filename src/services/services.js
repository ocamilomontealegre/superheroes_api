import axios from 'axios';
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

// Get superhero data by his alias
const getSuperheroByAlias = async (alias) => {
  try {
    const result = await SuperHeroModel.findOne({ alias });
    return result;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

// Get superhero picture
const getSuperheroPicture = async (alias) => {
  const baseUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=pDG7aKNDRchZCPELriCXd2pVtXknNFno&s=';

  try {
    const result = await axios.get(`${baseUrl}${alias}&weidness=0`);
    return result.data.data.images.original.url;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

export {
  getAllSuperheroes,
  getSuperheroByAlias,
  getSuperheroPicture
};