import { createContext } from "react";

export const NameContext = createContext();

export const NameProvider = NameContext.Provider;
export const NameConsumer = NameContext.Consumer;
