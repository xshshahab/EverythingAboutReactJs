import WithoutUse from "./without-use/WithoutUse";
import WithApp from "./with-use/App";

const App = () => {
  return (
    <div>
      <WithApp />
      <WithoutUse />
    </div>
  );
};

export default App;
