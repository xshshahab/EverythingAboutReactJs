import { createContext } from "react";

export const data = {
  username: "XshShahab",
  age: "21",
};

export const UserData = createContext();

export const UserDataProvider = ({ children }) => {
  return <UserData.Provider value={data}>{children}</UserData.Provider>;
};
