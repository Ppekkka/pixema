import React, { memo } from "react";
import {
  Wrapper,
  ImageWrapper,
  Image,
  Rating,
  HotRatingWrapper,
  HotRating,
  FavWrapper,
  CardTitle,
} from "src/client/components/Card/styles";
import BookmarkSvg from "src/client/components/Svg/BookmarkSvg";
import FireSvg from "src/client/components/Svg/FireSvg";
import { ICard } from "src/types/globalTypes";
import { useSelector } from "react-redux";
import { selectors } from "src/store/selectors/selctors";
import { isFilmFav } from "src/client/helpers";
import { useAction } from "src/store/hooks/useAction";
import { useNavigate } from "react-router-dom";

const Card = ({ Poster, Title, imdbRating, imdbID }: ICard) => {
  const favFilms = useSelector(selectors.getFavFilms);
  const isFav = isFilmFav(imdbID!, favFilms);

  const { setFullFilmAsync } = useAction();

  const navigate = useNavigate();

  const goToTheFilm = async () => {
    await setFullFilmAsync(imdbID);

    navigate(`/film/${imdbID}`);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={Poster} />
        {+imdbRating >= 8 ? (
          <HotRatingWrapper>
            <FireSvg fill="white" />
            <HotRating data-testid="hot-rating">{imdbRating}</HotRating>
          </HotRatingWrapper>
        ) : (
          <Rating data-testid="common-rating">{imdbRating}</Rating>
        )}
        {isFav && (
          <FavWrapper data-testid="fav-pin">
            <BookmarkSvg fill="#7B61FF" />
          </FavWrapper>
        )}
      </ImageWrapper>
      <CardTitle onClick={goToTheFilm} data-testid="link">{Title}</CardTitle>
    </Wrapper>
  );
};

export default memo(Card);
