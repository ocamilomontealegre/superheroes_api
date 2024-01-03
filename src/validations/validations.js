const validateData = (object, schema) => {
  const result = schema.validate(object);

  return (result.error) 
    ? { error: result.error.message, statusCode: 400 }
    : { error: '', statusCode: 200 };
};

export {
  validateData
};