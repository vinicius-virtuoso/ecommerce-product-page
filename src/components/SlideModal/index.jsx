import { Container } from "../../style/commons";
import {
  AbsoluteSlideModal,
  BoxButtons,
  BoxLargeImage,
  GridSlideModal,
  IconCloseSlideModal,
  ImageLager,
  Next,
  Prev,
} from "./style";

import next_icon from "../../assets/icons/icon-next.svg";
import prev_icon from "../../assets/icons/icon-previous.svg";
import { ImageSmall } from "../SlideDesktop/style";
import { useState } from "react";
import { IconClose } from "../Icons";

const SlideModal = ({ image_all, active, setActive, setImageModal }) => {
  const [activeImg, setActiveImg] = useState(0);

  const slide_next = () => {
    if (activeImg < image_all.img.length - 1) {
      setActiveImg(activeImg + 1);
    } else {
      setActiveImg(0);
    }
  };
  const slide_prev = () => {
    if (activeImg === 0) {
      setActiveImg(image_all.img.length - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };

  return (
    <AbsoluteSlideModal>
      <Container>
        <GridSlideModal>
          <IconCloseSlideModal onClick={() => setImageModal(false)}>
            <IconClose color="#ffffff" />
          </IconCloseSlideModal>

          <BoxLargeImage>
            <ImageLager
              src={image_all.img[activeImg]}
              alt={image_all.img[activeImg]}
            />

            <BoxButtons>
              <Prev onClick={slide_prev} xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" />
              </Prev>
              <Next onClick={slide_next} xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" />
              </Next>
            </BoxButtons>
          </BoxLargeImage>

          {image_all.thumb.map((thumb, index) => (
            <ImageSmall
              src={thumb}
              key={thumb}
              isActive={activeImg === index ? true : false}
              onClick={() => setActive(index)}
            />
          ))}
        </GridSlideModal>
      </Container>
    </AbsoluteSlideModal>
  );
};

export default SlideModal;
