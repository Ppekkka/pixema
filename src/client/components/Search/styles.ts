import FilterSvg from "src/client/components/Svg/FilterSvg";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1184px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 23px 21px;
  outline: 0;
  background-color: ${(props) => props.theme.palette.primary.grey};
  border-radius: 10px;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  border: 0;

  &:focus {
    border: 2px solid #7b61ff;
  }
`;

export const FilterSvgWrapper = styled.div`
width: max-content;
position: absolute;
right: 2%;
top: 36%;
cursor: pointer;
`