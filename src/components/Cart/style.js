import styled from "styled-components";

export const CartBox = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;

  width: 95%;
  min-height: 220px;
  background: var(--white);
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.178);
  transform: translateX(-50%);
  z-index: 998;
  border-radius: 0.5rem;
  animation: show 0.2s linear forwards;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateX(-50%) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
  }

  @media (min-width: 768px) {
    top: 100%;
    left: 50%;
    width: 100%;
    min-width: 350px;
    left: 25px;
  }
`;

export const CartTitle = styled.h3`
  font-size: 1.2rem;
  padding: 1.2rem;
  border-bottom: 1px solid var(--grayish-blue);
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EmptyCart = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;
