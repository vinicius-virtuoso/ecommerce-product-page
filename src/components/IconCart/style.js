import styled from "styled-components";

export const Svg = styled.svg`
  width: 22px;
  height: 20px;
  transition: all 0.2s ease;
  ${(props) =>
    props.color
      ? `path{ 
    fill:${props.color};
    }`
      : "opacity:0.5; &:hover{opacity:1;}"};
`;
