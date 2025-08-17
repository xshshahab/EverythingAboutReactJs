import { useState } from "react";
import ComponentOne from "./components/comp/ComponentOne";
import ComponentTwo from "./components/comp/ComponentTwo";
import ExampleOne from "./components/example/ExampleOne";
import ExampleTwo from "./components/example/ExampleTwo";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <section>
        <ComponentOne
          count={count}
          onClickHandler={() => setCount(count + 1)}
        />
        <ComponentTwo
          count={count}
          onClickHandler={() => setCount(count + 1)}
        />
      </section>
      <section>
        <ExampleOne />
        <ExampleTwo />
      </section>
    </main>
  );
};

export default App;
