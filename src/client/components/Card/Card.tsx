import React from "react";
import {
  Wrapper,
  ImageWrapper,
  Image,
  Rating,
  HotRatingWrapper,
  HotRating,
  FavWrapper,
  Title,
  GenreWrapper,
  Genre,
} from "src/client/components/Card/styles";
import BookmarkSvg from "src/client/components/Svg/BookmarkSvg";
import FireSvg from "src/client/components/Svg/FireSvg";

interface ICardProps {
  image: string;
  title: string;
  genres: string[];
  rating: number;
}

const Card = ({ image, title, genres, rating }: ICardProps) => {
  const isFav = true; //will be changed

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} />
        {rating >= 8 ? (
          <HotRatingWrapper>
            <FireSvg />
            <HotRating>{rating}</HotRating>
          </HotRatingWrapper>
        ) : (
          <Rating>{rating}</Rating>
        )}
        {isFav && (
        <FavWrapper>
          <BookmarkSvg fill="#7B61FF" />
        </FavWrapper>
        )}
      </ImageWrapper>
      <Title>{title}</Title>

      <GenreWrapper>
      {genres.map((genre) => (
        <Genre key={genre}>{genre}</Genre>
      ))}
      </GenreWrapper>
    </Wrapper>
  );
};

export default Card;
