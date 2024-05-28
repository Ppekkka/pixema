import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "src/store/selectors/selctors";
import { useParams, Navigate } from "react-router-dom";
import {
  getColorOfFavSvg,
  getStringFromArr,
} from "src/client/pages/FilmPage/helpers";
import { useAction } from "src/store/hooks/useAction";
import {
  Wrapper,
  ReturnArrow,
  FilmContentWrapper,
  LeftContentWrapper,
  ImageWrapper,
  Image,
  FavButton,
  RightContentWrapper,
  GenresWrapper,
  StyledGenre,
  Title,
  NumberDataWrapper,
  NumberData,
  PlotText,
  ProductionDataWrapper,
  ProductionDataElementWrapper,
  ProductionDataType,
  ProductionData,
  RecommendationsWrapper,
  RecommendationsTitle,
  NewSwiper,
  NewSlide
} from "src/client/pages/FilmPage/styles";
import ArrowSvg from "src/client/components/Svg/ArrowSvg";
import BookmarkSvg from "src/client/components/Svg/BookmarkSvg";
import IMDBRatingSvg from "src/client/components/Svg/IMDBRatingSvg";
import { isFilmFav } from "src/client/helpers";
import { sectionsEnum } from "src/types/globalTypes";
import Card from "src/client/components/Card/Card";
import Navigation from "src/client/components/Navigation/Navigation";

const FilmPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const fullFilmInfo = useSelector(selectors.getFullFilm);
  const recommendations = useSelector(
    selectors.getFilms
  ).filmsObject.arrayOfFilmsList[0].slice(0, 6);
  const favFilms = useSelector(selectors.getFavFilms);
  const isFavDefault = isFilmFav(id!, favFilms);

  const [isFav, setIsFav] = useState(isFavDefault);

  const { addToFavs, removeFromFavs, changeSection } = useAction();

  const handlePressOnFavSvg = () => {
    isFav ? removeFromFavs(fullFilmInfo!) : addToFavs(fullFilmInfo!);
    setIsFav(!isFav);
  };

  const returnToMain = () => {
    changeSection(sectionsEnum.HOME);
  };

  if (fullFilmInfo.Genre) {
    const genresArr = getStringFromArr(fullFilmInfo.Genre);

    return (
      <Wrapper>
        <ReturnArrow to="/main" onClick={returnToMain}>
          <ArrowSvg />
        </ReturnArrow>

        <FilmContentWrapper>
          <LeftContentWrapper>
            <ImageWrapper>
              <Image src={fullFilmInfo.Poster} />
            </ImageWrapper>

            <FavButton onClick={handlePressOnFavSvg}>
              <BookmarkSvg fill={getColorOfFavSvg(isFav)} />
            </FavButton>
          </LeftContentWrapper>
          <RightContentWrapper>
            <GenresWrapper>
              {genresArr.map((genre, idx) => (
                <StyledGenre key={idx}>{genre}</StyledGenre>
              ))}
            </GenresWrapper>

            <Title>{fullFilmInfo!.Title}</Title>

            <NumberDataWrapper>
              <NumberData>
                <IMDBRatingSvg /> {fullFilmInfo.imdbRating}
              </NumberData>
              <NumberData>{fullFilmInfo.Runtime}</NumberData>
            </NumberDataWrapper>

            <PlotText>{fullFilmInfo.Plot}</PlotText>

            <ProductionDataWrapper>
              <ProductionDataElementWrapper>
                <ProductionDataType>Year</ProductionDataType>
                <ProductionData>{fullFilmInfo.Year}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Released</ProductionDataType>
                <ProductionData>{fullFilmInfo.Released}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>BoxOffice</ProductionDataType>
                <ProductionData>{fullFilmInfo.BoxOffice}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Country</ProductionDataType>
                <ProductionData>{fullFilmInfo.Country}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Production</ProductionDataType>
                <ProductionData>{fullFilmInfo.Production}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Actors</ProductionDataType>
                <ProductionData>{fullFilmInfo.Actors}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Director</ProductionDataType>
                <ProductionData>{fullFilmInfo.Director}</ProductionData>
              </ProductionDataElementWrapper>

              <ProductionDataElementWrapper>
                <ProductionDataType>Writers</ProductionDataType>
                <ProductionData>{fullFilmInfo.Writer}</ProductionData>
              </ProductionDataElementWrapper>
            </ProductionDataWrapper>

            <NewSwiper
              navigation
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{
                810: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <RecommendationsWrapper>
                <RecommendationsTitle>Recommendations</RecommendationsTitle>
                <Navigation />
              </RecommendationsWrapper>

              {recommendations.map((recommendation) => {
                return (
                  <NewSlide>
                    <Card
                      Poster={recommendation.Poster}
                      Title={recommendation.Title}
                      imdbRating={recommendation.imdbRating}
                      imdbID={recommendation.imdbID}
                    ></Card>
                  </NewSlide>
                );
              })}
            </NewSwiper>
          </RightContentWrapper>
        </FilmContentWrapper>
      </Wrapper>
    );
  } else {
    return <Navigate to="/error" />;
  }
};

export default FilmPage;
