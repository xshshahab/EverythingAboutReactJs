import React from "react";
import ComponentA from "./components/ComponentA";

const OldApp: React.FC = () => {
  let name: string = "Irfan ki Bhabhi";
  return (
    <div>
      <p style={{ marginBottom: "10px" }}>APP MAIN </p>
      <ComponentA name={name} />
    </div>
  );
};

export default OldApp;
