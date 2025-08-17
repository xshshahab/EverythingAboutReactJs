import Button from "./components/Button";
import Copy from "./components/Copy";
import IconComponents from "./components/IconComponents";
import Move from "./components/Move";
import ProfileCard from "./styles/ProfileCard";
import StyleCard from "./styles/StyleCard";

const App = () => {
  const handleCLick = () => {
    console.log("You Clicked me : ", Math.round(Math.random() * 10));
  };

  const copyHandler = () => {
    console.log("You stealing my content!");
  };

  return (
    <div>
      <StyleCard />
      <ProfileCard />
      <IconComponents />
      <hr />
      <br />
      <Button onClick={handleCLick}>Click Me</Button>
      <Copy onCopy={copyHandler} />
      <hr />
      <br />
      <Move />
    </div>
  );
};

export default App;
