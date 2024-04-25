import styled from "styled-components";
import background from "src/assets/background.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.primary.background};
`;

export const SignWrapper = styled.button`
  width: 100%;
  height: 100%;
  background: url(${background});
`;

export const PopupIsOpenedBG = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 900;
  top: 0;
`;
