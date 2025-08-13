import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    // Inline css
    <div style={{ border: "2px dotted #ccc" }}>
      <Weather temp={10} />
      <Weather temp={20} />
      <Weather temp={30} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greeting timeOfDay={"morning"} />
    </div>
  );
};

export default App;
