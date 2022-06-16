import styled from "styled-components";

export const ContainerSlide = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  max-height: 40%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: all 0.2s ease;
`;

export const Next = styled.div`
  top: 50%;
  right: 1.5rem;
  position: absolute;
  width: 40px;
  height: 40px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.363);
`;
export const Prev = styled(Next)`
  top: 50%;
  left: 1.5rem;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
