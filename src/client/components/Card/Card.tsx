import React, {memo} from "react";
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
import { ICard } from "src/globalTypes";

const Card = ({ Poster, Title, imdbRating }: ICard) => {
  const isFav = true; //will be changed

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={Poster} />
        {+imdbRating >= 8 ? (
          <HotRatingWrapper>
            <FireSvg fill="white"/>
            <HotRating>{imdbRating}</HotRating>
          </HotRatingWrapper>
        ) : (
          <Rating>{imdbRating}</Rating>
        )}
        {isFav && (
          <FavWrapper>
            <BookmarkSvg fill="#7B61FF" />
          </FavWrapper>
        )}
      </ImageWrapper>
      <CardTitle>{Title}</CardTitle>
    </Wrapper>
  );
};

export default memo(Card);
