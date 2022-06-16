import React, { useState } from "react";
import { ContainerSlide, Icon, Img, Next, Prev } from "./style";

import next_icon from "../../assets/icons/icon-next.svg";
import prev_icon from "../../assets/icons/icon-previous.svg";

function SlideMobile({ image_all }) {
  const [active, setActive] = useState(0);

  const slide_next = () => {
    if (active < image_all.img.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };
  const slide_prev = () => {
    if (active === 0) {
      setActive(image_all.img.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <ContainerSlide>
      <Img src={image_all.img[active]} alt={image_all.img[active]} />

      <Next onClick={slide_next}>
        <Icon src={next_icon} alt="next" />
      </Next>
      <Prev onClick={slide_prev}>
        <Icon src={prev_icon} alt="prev" />
      </Prev>
    </ContainerSlide>
  );
}

export default SlideMobile;
