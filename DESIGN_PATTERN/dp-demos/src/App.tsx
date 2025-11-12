import React from "react";
import SplitScreen from "./components/dev/SplitScreen";
import Left from "./components/dev/Left";
import Right from "./components/dev/Right";

export const App: React.FC = () => {
  return (
    <>
      <SplitScreen leftWeight={15} rightWeight={80}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
};
