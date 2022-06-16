import { createContext, useEffect, useState } from "react";
import img_1 from "../../assets/images/image-product-1.jpg";
import img_2 from "../../assets/images/image-product-2.jpg";
import img_3 from "../../assets/images/image-product-3.jpg";
import img_4 from "../../assets/images/image-product-4.jpg";

import img_thumb_1 from "../../assets/images/image-product-1-thumbnail.jpg";
import img_thumb_2 from "../../assets/images/image-product-2-thumbnail.jpg";
import img_thumb_3 from "../../assets/images/image-product-3-thumbnail.jpg";
import img_thumb_4 from "../../assets/images/image-product-4-thumbnail.jpg";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@Cart")) || []
  );

  function addCart(product) {
    setCart([product]);
  }

  function removeCartItem(payload) {
    let updated = cart.filter((product) => product.id !== payload);
    setCart([...updated]);
    localStorage.clear();
  }

  useEffect(() => {
    localStorage.setItem("@Cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addCart, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
