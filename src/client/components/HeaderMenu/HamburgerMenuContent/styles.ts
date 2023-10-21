import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30%;
  height: 108%;
  background-color: ${(props) => props.theme.palette.primary.background};
  position: fixed;
  left: 0;
  top: -56px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  padding-top: 109px;
  box-shadow: 35px 13px 30px rgba(0, 0, 0, 0.16), 4px 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 3;

  @media (max-width: 768px) {
    width: 50%;
  }
`;
