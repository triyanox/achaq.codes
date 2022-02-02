import { useState, createContext } from "react";

export const IsOpenContext = createContext();
export const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IsOpenContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </IsOpenContext.Provider>
  );
};
