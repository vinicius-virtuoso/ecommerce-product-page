import styled from "styled-components";

export const AbsoluteSlideModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const GridSlideModal = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 5rem;
  gap: 2rem;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;

  align-content: center;
  justify-content: center;
  position: relative;
`;

export const IconCloseSlideModal = styled.div`
  display: block;
  position: absolute;
  top: -2rem;
  right: -1rem;
  cursor: pointer;
`;

export const BoxLargeImage = styled.div`
  width: 100%;
  position: relative;
  grid-column: span 4;
`;

export const ImageLager = styled.img`
  width: 100%;

  border-radius: 1rem;
`;

export const BoxButtons = styled.div`
  position: absolute;
  width: 110%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

export const Prev = styled.svg`
  width: 50px;
  height: 50px;
  background: var(--white);
  padding: 1rem;
  object-fit: contain;
  border-radius: 50%;
  cursor: pointer;
  stroke: var(--black);
  transition: all 0.2s ease;

  fill: none;
  stroke-width: 3px;

  &:hover {
    stroke: var(--orange);
  }
`;
export const Next = styled(Prev)``;
