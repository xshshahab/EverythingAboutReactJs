import JSXExpression from "../expression/JSXExpression";
import Greet from "../Greet";
import GreetWithArrow from "../GreetWithArrow";

const Main = () => {
  return (
    <main>
      <JSXExpression />
      <h2>Main Content On This Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo
        numquam nesciunt enim voluptate aperiam cumque inventore in ea! Tenetur
        in eaque explicabo quod maiores enim. Suscipit nam sunt corporis saepe
        nemo.
      </p>
      {/* Calling Two Greet Components */}
      <Greet />
      <GreetWithArrow />
    </main>
  );
};

export default Main;
