export const validate = (input) => {
  let { name, life_span, weight, height, temperament } = input;
  let errors = {};
  if (!name) {
    errors.name = "Name is required";
  } else if (!/^[xX=a-zA-Z\s]*$/.test(name)) {
    errors.name = "You can only use Letters";
  }
  if (!weight) {
    errors.weight = "Weight is required";
  } else if (!/^[xX=0-9]*$/.test(input.weight)) {
    errors.weight = "You can only use one Numbers";
  }
  if (!life_span) {
    errors.life_span = "Life Span is required";
  } else if (!/^[xX=0-9]*$/.test(input.life_span)) {
    errors.life_span = "You can only use one Numbers";
  }
  if (!height) {
    errors.height = "Height is required";
  } else if (!/^[xX=0-9]*$/.test(input.height)) {
    errors.height = "You can only use one Numbers";
  }
  if (!temperament[0]) {
    errors.temperament = "Select Your Temperament";
  }
  return errors;
};
