import styled from "styled-components";

export const SlideGrid = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 5rem;
  gap: 2rem;
  width: 100%;

  align-content: center;
  justify-content: center;

  display: none;

  @media (min-width: 968px) {
    display: grid;
  }
`;

export const ImageLager = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  grid-column: span 4;
  border-radius: 1rem;

  cursor: pointer;
`;

export const ImageSmall = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.875rem;
  border: 0px solid transparent;
  position: relative;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    display: none;
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: absolute;
    opacity: 0.4;
    transition: all 0.2s ease;
  }

  &:hover::before {
    display: block;
  }

  ${(props) =>
    props.isActive &&
    `
    border: 2px solid var(--orange);
      &::before {
        display: block;
        opacity: 0.7;
    }`};
`;
