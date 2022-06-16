import React from "react";
import { CartProvider } from "./providers/cart";
import { ProductProvider } from "./providers/products";

const Context = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};

export default Context;
