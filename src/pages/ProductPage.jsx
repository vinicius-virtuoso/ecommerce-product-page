import React, { useContext } from "react";
import InfoProduct from "../components/InfoProduct";
import SlideDesktop from "../components/SlideDesktop";
import SlideMobile from "../components/SlideMobile";
import { ProductContext } from "../context/providers/products";
import { Container, FlexColumn } from "../style/commons";

const ProductPage = () => {
  const { product } = useContext(ProductContext);
  const image_all = product[0].images;

  return (
    <Container>
      <FlexColumn>
        <SlideMobile image_all={image_all} />
        <SlideDesktop image_all={image_all} />
        <InfoProduct product={product[0]} />
      </FlexColumn>
    </Container>
  );
};

export default ProductPage;
