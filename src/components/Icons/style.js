import styled from "styled-components";

export const SvgClose = styled.svg`
  width: 32px;
  height: 30px;
  transition: all 0.2s ease;
  display: flex;

  display: flex;
  align-items: center;

  path {
    fill: var(--white);
    transition: all 0.2s ease;
    &:hover {
      fill: var(--orange);
    }
  }
`;

export const SvgCart = styled.svg`
  width: 22px;
  height: 20px;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  ${(props) =>
    props.color
      ? `path{ 
    fill:${props.color};
    }`
      : "opacity:0.5; &:hover{opacity:1;}"};
`;
