import { useContext } from "react";
import { CartContext } from "../../context/providers/cart";
import { Button } from "../../style/commons";
import delete_icon from "../../assets/icons/icon-delete.svg";

import {
  Box,
  BoxDesc,
  IconDelete,
  ImgProduct,
  NameProduct,
  PriceProduct,
  Product,
  TextProduct,
} from "./style";

const BoxProductsCart = ({ product }) => {
  const { remove_cart_item } = useContext(CartContext);
  let newPrice = product.price.toFixed(2) * (50 / 100);

  return (
    <Box>
      <Product>
        <ImgProduct src={product.images.img[0]} alt={product.images.img[0]} />
        <TextProduct>
          <BoxDesc>
            <NameProduct>{product.title}</NameProduct>
            <PriceProduct>
              ${newPrice.toFixed(2)} x {product.quant}{" "}
              <span>${(newPrice * product.quant).toFixed(2)}</span>
            </PriceProduct>
          </BoxDesc>
          <IconDelete
            src={delete_icon}
            alt={delete_icon}
            onClick={() => remove_cart_item(product.id)}
          />
        </TextProduct>
      </Product>
      <Button>Checkout</Button>
    </Box>
  );
};
export default BoxProductsCart;
