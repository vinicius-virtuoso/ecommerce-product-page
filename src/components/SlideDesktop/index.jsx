import React, { useState } from "react";
import SlideModal from "../SlideModal";
import { ImageLager, ImageSmall, SlideGrid } from "./style";

const SlideDesktop = ({ image_all }) => {
  const [active, setActive] = useState(0);
  const [imageModal, setImageModal] = useState(false);

  return (
    <>
      <SlideGrid>
        <ImageLager
          src={image_all.img[active]}
          onClick={() => setImageModal(true)}
        />
        {image_all.thumb.map((thumb, index) => (
          <ImageSmall
            src={thumb}
            key={thumb}
            isActive={active === index ? true : false}
            onClick={() => setActive(index)}
          />
        ))}
      </SlideGrid>
      {imageModal && (
        <SlideModal
          image_all={image_all}
          active={active}
          setActive={setActive}
          setImageModal={setImageModal}
        />
      )}
    </>
  );
};

export default SlideDesktop;
