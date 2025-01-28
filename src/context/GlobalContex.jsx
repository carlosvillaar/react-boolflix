import { createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  console.log("SONO NEL DOM");
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export { GlobalProvider, GlobalContext };
