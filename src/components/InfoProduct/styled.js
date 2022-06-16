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
`;
export const SupTitle = styled.h4`
  color: var(--orange);
  letter-spacing: 1px;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--Black);
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
`;

export const BoxQuant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-grayish-blue);
  padding: 0.8rem;
  border-radius: 0.5rem;
`;

export const QuantSub = styled.button`
  border: 0;
  outline: none;
  font-size: 2rem;
  color: var(--orange);
  font-weight: 700;
  cursor: pointer;
`;

export const QuantAdd = styled(QuantSub)``;

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
`;
