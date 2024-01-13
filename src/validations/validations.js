const validateData = (object, schema) => {
  console.log('👽 ~ file: validations.js:2 ~ validateData ~ object:', object);
  const result = schema.validate(object);

  return (result.error) 
    ? { error: result.error.message, statusCode: 400 }
    : { error: '', statusCode: 200 };
};

export {
  validateData
};