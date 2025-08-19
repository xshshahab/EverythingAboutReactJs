import Input from "./components/Input";
import FocusInput from "./apps/FocusInput";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div>
      <Input />
      <hr />
      <FocusInput />
      <hr />
      <Timer />
    </div>
  );
};

export default App;
