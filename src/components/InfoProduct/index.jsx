import React, { useContext, useState } from "react";
import { CartContext } from "../../context/providers/cart";
import {
  BoxPrice,
  BoxText,
  ContainerInfo,
  Description,
  ModPrice,
  Price,
  SupTitle,
  Title,
  Discount,
  OldPriced,
  BoxQuant,
  QuantSub,
  Cont,
  QuantAdd,
  Button,
} from "./styled";
import plus_icon from "../../assets/icons/icon-plus.svg";
import minus_icon from "../../assets/icons/icon-minus.svg";
import IconCart from "../IconCart";

const InfoProduct = ({ product }) => {
  const [volume, setVolume] = useState(0);
  const { addCart } = useContext(CartContext);

  const addQuant = () => {
    if (volume <= 99) {
      setVolume(volume + 1);
    }
  };
  const subQuant = () => {
    if (volume > 0) {
      setVolume(volume - 1);
    }
  };

  return (
    <ContainerInfo>
      <BoxText>
        <SupTitle>{product.supTitle}</SupTitle>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <BoxPrice>
          <ModPrice>
            <Price>
              ${(product.price * (product.discount / 100)).toFixed(2)}
            </Price>
            <Discount>{product.discount}%</Discount>
          </ModPrice>
          <OldPriced>${product.price.toFixed(2)}</OldPriced>
        </BoxPrice>
        <BoxQuant>
          <QuantSub onClick={subQuant}>
            <img src={minus_icon} alt="-" />
          </QuantSub>
          <Cont>{volume}</Cont>
          <QuantAdd onClick={addQuant}>
            <img src={plus_icon} alt="+" />
          </QuantAdd>
        </BoxQuant>
        <Button
          onClick={() =>
            volume > 0 ? addCart({ ...product, quant: volume }) : null
          }
        >
          <IconCart color="#ffffff" />
          Add to cart
        </Button>
      </BoxText>
    </ContainerInfo>
  );
};

export default InfoProduct;
