import ValidPassword from "./ValidPassword";
import InvalidPassword from "./InvalidPassword";

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;
};

export default Password;
