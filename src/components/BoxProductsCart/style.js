import styled from "styled-components";

export const Product = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
`;

export const ImgProduct = styled.img`
  width: 100%;
  max-width: 55px;
  height: 55px;
  border-radius: 5px;
`;

export const TextProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
`;
export const NameProduct = styled.p`
  font-size: 0.875rem;
  color: var(--dark-grayish-blue);
  overflow: hidden;
  white-space: nowrap;
  max-width: 135px;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
export const PriceProduct = styled.p`
  color: var(--dark-grayish-blue);
  overflow: hidden;
  span {
    font-weight: 700;
    color: var(--black);
  }
`;
export const BoxDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--dark-grayish-blue);
`;

export const IconDelete = styled.img`
  width: 100%;
  max-width: 18px;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const Box = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
