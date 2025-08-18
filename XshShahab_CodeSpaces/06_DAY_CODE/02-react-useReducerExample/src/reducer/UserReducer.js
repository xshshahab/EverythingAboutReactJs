const initialState = {
  name: "",
  email: "",
  password: "",
  age: "",
  city: "",
  address: "",
};

const userRed = (state, action) => {
  return { ...state, [action.type]: action.value };
};

export { initialState, userRed };
