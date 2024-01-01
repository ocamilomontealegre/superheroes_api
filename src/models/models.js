import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
  realName: { type: String, required: true },
  alias: { type: String, required: true },
  powers: [String],
  description: { type: String, required: true },
  color: { type: String, required: true }
});

const SuperHeroModel = new  mongoose.model('Superhero', superheroSchema);

export {
  SuperHeroModel
};