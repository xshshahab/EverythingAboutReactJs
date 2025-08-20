import React from "react";
import User from "./components/User";
import Student from "./components/Student";

const App: React.FC = () => {
  return (
    <div>
      <User name="xsh_shahab" age={21} isAdmin={false} />
      <Student name="XshShahab" age={21} isStudent={true} />
    </div>
  );
};

export default App;
