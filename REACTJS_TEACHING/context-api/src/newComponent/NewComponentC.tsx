import { NameContext } from "../context/NameContext";

const NewComponentC = () => {
  return (
    <NameContext.Consumer>
      {(name) => <h1>Finally Meets : {name}</h1>}
    </NameContext.Consumer>
  );
};

export default NewComponentC;
