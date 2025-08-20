import React from "react";

interface UserProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

const User: React.FC<UserProps> = ({ name, age, isAdmin }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>{isAdmin === true ? "Welcome back User!" : "Welcome back Admin!"}</p>
    </div>
  );
};

export default User;
