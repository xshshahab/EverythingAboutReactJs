import { ComponentA } from "./components/ComponentA";
import { ContextInsideProvider } from "./context/ContextInside";
import { NameProvider } from "./context/NameContext";

const App = () => {
  const name = "xshshahab";
  let age = 21;

  return (
    <NameProvider value={name}>
      <ContextInsideProvider value={age}>
        <ComponentA />
      </ContextInsideProvider>
    </NameProvider>
  );
};

export default App;
