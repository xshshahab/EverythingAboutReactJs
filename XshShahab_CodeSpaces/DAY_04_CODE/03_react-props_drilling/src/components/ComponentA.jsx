import { ComponentB } from "./ComponentB";

export const ComponentA = (props) => {
  return (
    <div>
      <h2>Hello, {props?.user?.username}</h2>
      <ComponentB age={props?.user?.age} region={props?.user?.region} />
    </div>
  );
};
