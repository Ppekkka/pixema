import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background};
  padding: 49px 56px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const CardsContentWrapper = styled.div`
  width: clamp(78%, 1.2vw, 83%);

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1440px) {
    grid: repeat(2, 1fr) / repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    grid: repeat(2, 1fr) / repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid: repeat(3, 1fr) / repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid: repeat(4, 1fr) / repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

export const ShowMoreButton = styled.button`
  position: absolute;
  background-color: ${(props) => props.theme.palette.primary.grey};
  padding: 8px 24px;
  border-radius: 10px;
  color: white;
  border: 0;
  cursor: pointer;
  bottom: 0;
  right: calc(50% - 115.41px);

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.darkGrey};
  }

  @media (min-width: 1440px) {
    right: calc(50% - 115.41px - clamp(123px, 1.2vw, 48%));
  }
`;
