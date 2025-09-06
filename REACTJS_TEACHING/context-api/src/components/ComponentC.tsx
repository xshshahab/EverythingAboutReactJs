interface ComponentCProps {
  name: string;
}

const ComponentC = ({ name }: ComponentCProps) => {
  return (
    <div>
      <h1>Finally Meets : {name}</h1>
    </div>
  );
};

export default ComponentC;
