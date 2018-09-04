// TODO: Set validation as array object with specific params
function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Require';
  }

  if (!values.email) {
    errors.email = 'Require';
  }

  return errors;
}

export default validate;