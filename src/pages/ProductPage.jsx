import React, { useContext } from "react";
import InfoProduct from "../components/InfoProduct";
import Slide from "../components/SlideMobile";
import { ProductContext } from "../context/providers/products";
import { FlexColumn } from "../style/commons";

const ProductPage = () => {
  const { product } = useContext(ProductContext);
  const image_all = product[0].images;

  return (
    <FlexColumn>
      <Slide image_all={image_all} />
      <InfoProduct product={product[0]} />
    </FlexColumn>
  );
};

export default ProductPage;
