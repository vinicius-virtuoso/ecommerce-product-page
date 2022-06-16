import styled from "styled-components";
import { Container } from "../../style/commons";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 4.5rem;
  background: var(--white);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    box-shadow: none;
    padding: 0;
    height: 6rem;
  }
`;
export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0.75rem 1.5rem;
  position: relative;

  @media (min-width: 968px) {
    border-bottom: 1px solid var(--grayish-blue);
    padding: 0;
    align-items: initial;
  }
`;
export const Bars = styled.div`
  width: 25px;

  @media (min-width: 968px) {
    display: none;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;

  object-position: center;
  object-fit: contain;

  @media (min-width: 968px) {
    max-width: 170px;
    height: 100%;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: initial;

  @media (min-width: 968px) {
    gap: 3rem;
    position: relative;
  }
`;
export const IconMenu = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
`;

export const BoxIcon = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 968px) {
    width: 25px;
    height: 25px;
  }
`;
export const IconAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid var(--orange);
  }

  @media (min-width: 968px) {
    width: 50px;
    height: 50px;
  }
`;

export const Cont = styled.div`
  width: 18px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--orange);
  color: var(--white);
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  padding: 0.5rem;
  top: -10px;
  right: -3px;
  border-radius: 7px;
`;

export const Menu = styled.nav`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 100px 1fr;
  transition: all 0.2s ease-in;
  z-index: 998;

  ${(props) =>
    props.isOpen
      ? "visibility: visible;"
      : "visibility: hidden; pointer-events: none;"};

  @media (min-width: 968px) {
    position: initial;
    display: flex;
    width: 100%;
    height: 100%;
    visibility: visible;
    min-height: initial;
    background: transparent;
    height: 100%;
    pointer-events: initial;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 100px 1rem;
  background: var(--white);
  min-height: 100vh;
  z-index: 99;
  position: relative;
  overflow: hidden;
  list-style: none;
  gap: 1.5rem;
  transition: all 0.2s ease-in;
  ${(props) => (props.isOpen ? "width: 65%;" : "width: 0%;padding: 100px 0;")};

  @media (min-width: 968px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: auto;
    overflow: initial;
    padding: 0;
    position: initial;
    align-items: baseline;
    gap: 2.5rem;
  }
`;

export const NavLink = styled.li`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;

  @media (min-width: 968px) {
    font-size: 1rem;
    color: var(--dark-grayish-blue);
    font-weight: 400;
    padding-left: 0;
    height: 100%;

    &:after {
      content: "";
      display: block;
      width: 0%;
      height: 4px;
      background-color: var(--orange);
      position: absolute;
      bottom: -1px;
      left: 50%;
      transition: all 0.2s ease;
      transform: translateX(-50%);
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

export const Link = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--black);
  text-decoration: none;
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  @media (min-width: 968px) {
    font-size: 1rem;
    color: var(--dark-grayish-blue);
    font-weight: 400;
    &:hover {
      color: var(--black);
    }
  }
`;
