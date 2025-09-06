import ComponentB from "./ComponentB";

// type ComponentAProps = {
//   name: string;
// };

interface ComponentAProps {
  name: string;
}

const ComponentA = ({ name }: ComponentAProps) => {
  return (
    <div>
      <p>ComponentA </p>
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
