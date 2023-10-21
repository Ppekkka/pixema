import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.palette.primary.background};
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 49px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RightContentWrapper = styled.div`
  width: clamp(78%, 1.2vw, 83%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
`;
