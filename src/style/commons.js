import styled from "styled-components";

export const AppComponent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--white);

  display: grid;
  grid-template-rows: 4.5rem 1fr;

  @media (min-width: 768px) {
    grid-template-rows: 6rem 1fr;
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background: var(--orange);
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  transition: all 0.2s ease;
  &:hover {
    opacity: 0.5;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  height: calc(100vh - 4.5rem);
  flex: 1;

  @media (min-width: 968px) {
    max-width: 90%;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    padding: 5rem 2rem;
    height: 100%;
    flex: 1;
  }
`;
