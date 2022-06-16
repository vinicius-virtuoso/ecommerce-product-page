import img_1 from "../assets/images/image-product-1.jpg";
import img_2 from "../assets/images/image-product-2.jpg";
import img_3 from "../assets/images/image-product-3.jpg";
import img_4 from "../assets/images/image-product-4.jpg";

import img_thumb_1 from "../assets/images/image-product-1-thumbnail.jpg";
import img_thumb_2 from "../assets/images/image-product-2-thumbnail.jpg";
import img_thumb_3 from "../assets/images/image-product-3-thumbnail.jpg";
import img_thumb_4 from "../assets/images/image-product-4-thumbnail.jpg";

export const products = [
  {
    id: 1,
    supTitle: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.0,
    discount: 50,
    images: {
      img: [img_1, img_2, img_3, img_4],
      thumb: [img_thumb_1, img_thumb_2, img_thumb_3, img_thumb_4],
    },
  },
];
