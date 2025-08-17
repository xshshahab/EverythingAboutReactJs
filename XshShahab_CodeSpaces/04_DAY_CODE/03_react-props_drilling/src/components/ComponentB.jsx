import { ComponentC } from "./ComponentC";

export const ComponentB = ({ age, region }) => {
  return (
    <div>
      <h1>My age is : {age}</h1>
      <ComponentC region={region} />
    </div>
  );
};
