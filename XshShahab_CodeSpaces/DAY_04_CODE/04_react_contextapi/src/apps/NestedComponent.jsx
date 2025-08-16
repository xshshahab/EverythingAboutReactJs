import { NameConsumer } from "../context/NameContext";
import { ContextInsideConsumer } from "../context/ContextInside";

const NestedComponent = () => {
  return (
    <NameConsumer>
      {(name) => {
        return (
          <ContextInsideConsumer>
            {(age) => {
              return (
                <h1>
                  My Name is: {name} and I'm {age} years old.
                </h1>
              );
            }}
          </ContextInsideConsumer>
        );
      }}
    </NameConsumer>
  );
};

export default NestedComponent;
