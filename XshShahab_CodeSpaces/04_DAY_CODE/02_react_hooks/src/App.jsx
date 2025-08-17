import DataFetching from "./components/DataFetching";
import Increment from "./components/Increment";
import BasicComponents from "./practice/BasicComponents";
import CounterEffect from "./practice/CounterEffect";

const App = () => {
  return (
    <>
      <section>
        <h1>Practice components</h1>
        <Div>
          <BasicComponents />
        </Div>
        <Div>
          <CounterEffect />
        </Div>
      </section>
      <section>
        <Div>
          <h1>Learning</h1>
          <Increment />
          <DataFetching />
        </Div>
      </section>
    </>
  );
};

export default App;

const Div = ({ children }) => {
  return (
    <div>
      <br />
      {children}
      <br /> <hr />
    </div>
  );
};
