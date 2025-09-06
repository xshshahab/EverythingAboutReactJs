import ComponentC from "./ComponentC";

interface ComponentBProps {
  name: string;
}

const ComponentB = ({ name }: ComponentBProps) => {
  return (
    <div>
      <h1>ComponentB</h1>
      <ComponentC name={name} />
    </div>
  );
};

export default ComponentB;
