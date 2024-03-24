import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: max-content;
  display: flex;
  height: max-content;
`;

export const StyledFillSvg = styled.svg`
  fill: ${(props) => props.theme.palette.primary.text};
`;

export const StyledStrictSvg = styled.svg`
  stroke: ${(props) => props.theme.palette.primary.text};
`;

export const StyledPixemaSvg = styled.svg`
  width: clamp(152px, 1.2vw, 100%);
`;

export const StyledPixemaWrapper = styled(Link)`
  width: clamp(152px, 1.2vw, 100%);
`;