import React from "react";
import ExternalContextWrapper from "./utils/ExternalContextWrapper";
import ContextApp from "./app/ContextApp";
import ContextWrapper from "./utils/ContextWrapper";
import MyApp from "./app/MyApp";
import UserWrapper from "./utils/UserWrapper";
import UserApp from "./app/UserApp";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <>
      <Header />
      <ContextWrapper>
        <MyApp />
      </ContextWrapper>
      <ExternalContextWrapper>
        <ContextApp />
      </ExternalContextWrapper>
      <br /> <hr />
      <UserWrapper>
        <UserApp />
      </UserWrapper>
      <Footer />
    </>
  );
}

export default App;
