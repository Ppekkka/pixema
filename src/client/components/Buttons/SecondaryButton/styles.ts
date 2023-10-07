import styled from "styled-components";

export const StyledButton = styled.button`
  width: 199px;
  padding: 17px 0;
  border-radius: 10px;
  text-align: center;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacin${(props) => props.theme.palette.primary.text};
  background-color: ${(props) => props.theme.palette.primary.grey};
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.darkGrey};
    cursor: pointer;
    color: white;
  }
`;
