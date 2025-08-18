import Counter from "./components/Counter";
import LearnReducer from "./understanding/LearnReducer";
import { Seperator } from "./utils/Seperator";

const App = () => {
  return (
    <section>
      <LearnReducer />
      <Seperator />
      <Counter />
    </section>
  );
};

export default App;
