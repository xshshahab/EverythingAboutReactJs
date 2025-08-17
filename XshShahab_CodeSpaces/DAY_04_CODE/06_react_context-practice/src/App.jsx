import UpdateUser from "./components/UpdateUser";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <br />
      <br />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
