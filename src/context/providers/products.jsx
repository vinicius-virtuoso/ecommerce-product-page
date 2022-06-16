import { createContext } from "react";
import { products } from "../../data/data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const product = products;

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};
