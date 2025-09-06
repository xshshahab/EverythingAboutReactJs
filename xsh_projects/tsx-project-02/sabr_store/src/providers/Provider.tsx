import { FilterProvider } from "@/context/FilterContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import React, { type ReactNode } from "react";

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <FilterProvider>{children}</FilterProvider>
    </ThemeProvider>
  );
};

export default Provider;
