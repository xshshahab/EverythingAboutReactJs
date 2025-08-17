import ComponentA from "./components/ComponentA";
import { UserDataProvider } from "./context/UserData";

export const App = () => {
  return (
    <section style={{ padding: "20px" }}>
      <UserDataProvider>
        <ComponentA />
      </UserDataProvider>
    </section>
  );
};
