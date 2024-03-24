import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.primary.text};
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
