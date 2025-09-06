import React from "react";
import NewComponentA from "./newComponent/NewComponentA";
import { NameContext } from "./context/NameContext";

const NewApp: React.FC = () => {
  let name = "Irfan ki Bhabhi";
  return (
    <NameContext.Provider value={name}>
      <h2>New App Main</h2>
      <NewComponentA />
    </NameContext.Provider>
  );
};

export default NewApp;
