import Joi from 'joi';

// Alias Property
const alias = Joi.string().regex(/^[a-zA-Z]+$/).required().messages({
  'string.base': 'It should be a string',
  'string.pattern.base': 'Invalid characters in alias. Only letters allowed.',
  'any.required': 'Alias is required.'
});

// Real Name Property
const realName = Joi.string().regex(/^[a-zA-Z]+$/).required().messages({
  'string.base': 'It should be a string',
  'string.pattern.base': 'Invalid characters in alias. Only letters allowed.',
  'any.required': 'Alias is required.'
});

// Powers Property
const powers = Joi.array().min(1).required().messages({
  'array.base': 'Powers should be provided as an array.',
  'array.min': 'At least one power must be specified.',
  'any.required': 'Powers are required.'
});

// Description Property
const description = Joi.string().alphanum().min(10).required().messages({
  'string.base': 'Description should be a string.',
  'string.alphanum': 'Description should only contain alphanumeric characters.',
  'string.min': 'Description must be at least 10 characters long.',
  'any.required': 'Description is required.'
});

// Color property
const color = Joi.string().regex(/^[a-zA-Z]+$/).min(4).required().messages({
  'string.base': 'Color should be a string.',
  'string.alphanum': 'Invalid characters in Color. Only letters allowed.',
  'string.min': 'Color must be at least 4 characters long.',
  'any.required': 'Color is required.'
});

// superheroAliasSchema
const superheroAliasSchema = alias;

// superheroEntitySchema
const superheroEntitySchema = Joi.object({
  realName,
  alias,
  powers,
  description,
  color
});

export {
  superheroAliasSchema,
  superheroEntitySchema
};