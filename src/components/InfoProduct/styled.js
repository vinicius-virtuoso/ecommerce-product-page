import styled from "styled-components";

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 968px) {
    gap: 2rem;
    max-width: 90%;
  }
`;
export const SupTitle = styled.h4`
  color: var(--orange);
  letter-spacing: 1px;
  font-size: 1.3rem;
  text-transform: uppercase;

  @media (min-width: 968px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--Black);
  @media (min-width: 968px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--dark-grayish-blue);
  font-weight: 400;
`;

export const BoxPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 968px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const ModPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const Discount = styled.span`
  font-size: 1rem;
  background-color: var(--pale-orange);
  color: var(--orange);
  font-weight: 700;
  padding: 0.25rem 0.35rem;
  border-radius: 0.25rem;
  letter-spacing: 1px;
`;

export const OldPriced = styled.span`
  font-size: 1.3rem;
  text-decoration: line-through;
  color: var(--dark-grayish-blue);
  font-weight: 700;
  opacity: 0.5;

  @media (min-width: 968px) {
    font-size: 1rem;
  }
`;

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 968px) {
    grid-template-columns: 35% 1fr;
  }
`;

export const BoxQuant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-grayish-blue);
  padding: 0.8rem;
  border-radius: 0.5rem;
  gap: 1rem;
`;

export const QuantSub = styled.button`
  border: 0;
  outline: none;
  font-size: 3rem;
  color: var(--orange);
  font-weight: 700;
  cursor: pointer;

  width: 100%;
  padding: 0.5rem 0;
  min-height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease;
  background: transparent;

  &:hover {
    opacity: 0.7;
  }
`;

export const QuantAdd = styled(QuantSub)`
  justify-content: flex-end;
`;

export const Cont = styled.span`
  font-size: 1.2rem;
  color: var(--Black);
  font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  min-height: 3rem;
  background-color: var(--orange);
  color: var(--white);
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
