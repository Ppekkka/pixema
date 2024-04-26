import styled from "styled-components";
import notFound from "src/assets/notFound.png";

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
    flex-direction: column;
    align-items: center;
  }
`;

export const EmptyStateWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1440x) {
    padding-right: clamp(123px, 1.2vw, 48%);
  }
`;

export const NotFoundImage = styled.div`
  background-image: url(${notFound});
  background-size: contain;
  background-repeat: no-repeat;
  width: 404px;
  height: 362px;
  margin: auto;

  @media (max-width: 768px) {
    width: 336px;
    height: 298px;
  }

  @media (max-width: 465px) {
    width: 202px;
    height: 180px;
  }
`;

export const EmptyStateText = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #80858b;
  margin-top: 32px;
`;
