import NestedComponent from "../apps/NestedComponent";
import { NameConsumer } from "../context/NameContext";

export const ComponentC = () => {
  return (
    <>
      <NameConsumer>{(name) => <p>Hello, {name}!</p>}</NameConsumer>
      <br />
      <NestedComponent />
    </>
  );
};
