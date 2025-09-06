import NewComponentB from "./NewComponentB";

const NewComponentA = () => {
  return (
    <div>
      <p>NewComponentA </p>
      <NewComponentB />
    </div>
  );
};

export default NewComponentA;
