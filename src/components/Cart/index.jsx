import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/providers/cart";
import { CartBox, CartTitle, InfoBox, EmptyCart } from "./style";
import BoxProductsCart from "../BoxProductsCart";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartBox>
      <CartTitle>Cart</CartTitle>
      {cart.length > 0 ? (
        <InfoBox>
          {cart.map((product) => (
            <BoxProductsCart product={product} key={product.id} />
          ))}
        </InfoBox>
      ) : (
        <EmptyCart>Your cart is empty.</EmptyCart>
      )}
    </CartBox>
  );
};

export default Cart;
