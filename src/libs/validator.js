const isEmail = email => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return required(email) && re.test(String(email).toLowerCase());
}

const isPassword = password => {
  const re = /^[a-zA-Z0-9_!#$]+$/
  return required(password) && re.test(String(password));
}

const required = value => {
  return !!value;
}

const validate = value => ({
  is: {
    email: isEmail(value),
    password: isPassword(value)
  },
  required: required(value)
})

export default validate