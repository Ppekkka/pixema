import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 266px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 357px;
  border-radius: 20px;
  position: relative;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const Rating = styled.p`
  position: absolute;
  width: 37px;
  padding: 2px 0;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  border-radius: 6px;
  background-color: #00a340;
  color: #ffffff;
  top: 20px;
  left: 20px;
`;

export const HotRatingWrapper = styled.div`
  display: flex;
  padding: 2px 8px;
  background-color: #7b61ff;
  border-radius: 6px;
  top: 20px;
  left: 20px;
  position: absolute;
`;

export const HotRating = styled.p`
  color: #ffffff;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding-left: 4px;
`;

export const FavWrapper = styled.div`
  border-radius: 6px;
  padding: 2px 8px;
  background-color: #323537;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Title = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${(props) => props.theme.palette.primary.text};
  cursor: pointer;
  margin: 24px 0 4px 0;

  &:hover {
    color: #7b61ff;
  }
`;

export const GenreWrapper = styled.div`
  display: flex;
`;

export const Genre = styled.p`
  display: flex;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #afb2b6;

  &:after {
    content: "";
    display: flex;
    width: 4px;
    height: 4px;
    background-color: #afb2b6;
    border-radius: 50%;
    margin: 10px 8px;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`;