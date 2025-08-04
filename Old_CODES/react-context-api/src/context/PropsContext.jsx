import { createContext } from "react";

const PropsContext = createContext(null);

export default PropsContext;

// Export PropsProvider
export const PropsProvider = ({ children, value }) => {
    return (
        <PropsContext.Provider value={value}>
            {children}
        </PropsContext.Provider>
    );
};

// Export PropsConsumer
export const PropsConsumer = PropsContext.Consumer;
