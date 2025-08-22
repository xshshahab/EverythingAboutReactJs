import React from "react";
import UserList from "./components/UserList";

import UserMine from "./shared/mine/UserList";

import UserAi from "./shared/AI/UserList";

const App: React.FC = () => {
  return (
    <div>
      {/* Youtuber */}
      <h1>Youtuber Developed</h1>
      <UserList />
      <br /> <br />
      <hr />
      <br />
      <br />
      {/* Mine  */}
      <h1>Mine Design</h1>
      <UserMine />
      <br /> <br />
      <hr />
      <br />
      <br />
      {/* AI  */}
      <h1>AI Design</h1>
      <UserAi />
    </div>
  );
};

export default App;
