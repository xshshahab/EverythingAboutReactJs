import { useContext } from "react";
import { UserData } from "../context/UserData";

const ComponentC = () => {
  const { username, age } = useContext(UserData);

  return (
    <div>
      My name is : {username}, and I'm {age} years old.
    </div>
  );
};

export default ComponentC;
