import User from "./components/User";
import Counter from "./components/Counter";
import CounterApp from "./components/CounterApp";
import Friends from "./components/Friends";
import Movie from "./components/Movie";
import MoviesList from "./shared/MoviesList";

const App = () => {
  return (
    <div style={{ padding: "10px", margin: "10px 0" }}>
      <User />
      <Counter />
      <CounterApp />
      <Friends />
      <br />
      <hr />
      <br />
      <Movie />
      <br />
      <hr />
      <br />
      <MoviesList />
    </div>
  );
};

export default App;
