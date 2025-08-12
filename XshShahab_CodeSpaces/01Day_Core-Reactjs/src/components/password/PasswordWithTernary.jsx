import ValidPassword from "./ValidPassword";
import InvalidPassword from "./InvalidPassword";

const PasswordWithTernary = ({ isValid }) => {
  return <div>{isValid ? <ValidPassword /> : <InvalidPassword />}</div>;
};

export default PasswordWithTernary;
