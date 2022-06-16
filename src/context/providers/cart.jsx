import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@Cart")) || []
  );

  function add_cart(product) {
    setCart([product]);
  }

  function remove_cart_item(payload) {
    let updated = cart.filter((product) => product.id !== payload);
    setCart([...updated]);
    localStorage.clear();
  }

  function modal_cart() {
    setShowCart(!showCart);
  }

  useEffect(() => {
    localStorage.setItem("@Cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, add_cart, remove_cart_item, modal_cart, showCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
