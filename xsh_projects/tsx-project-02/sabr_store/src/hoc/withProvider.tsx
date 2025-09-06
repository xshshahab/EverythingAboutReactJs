import Provider from "@/providers/Provider";

export const withProvider = (Component: React.FC) => {
  return function WrappedComponent() {
    return (
      <Provider>
        <Component />
      </Provider>
    );
  };
};
