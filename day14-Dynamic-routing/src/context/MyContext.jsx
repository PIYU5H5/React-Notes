import { createContext, useState } from "react";
import { useSearchParams } from "react-router";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  return (
    <MyStore.Provider value={{ productData, setProductData }}>
      {children}
    </MyStore.Provider>
  );
};
