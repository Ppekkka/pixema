import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Wrapper,
  CardsContentWrapper,
  CardsWrapper,
  EmptyStateWrapper,
  NotFoundImage,
  EmptyStateText,
} from "src/client/pages/FavFilmsPage/styles";
import Card from "src/client/components/Card/Card";
import MainMenuContent from "src/client/components/MainMenuContent/MainMenuContent";
import { selectors } from "src/store/selectors/selctors";
import { getFilmsPerList } from "src/client/helpers";
import { getFilmsArr } from "src/client/pages/FavFilmsPage/helpers";

const FavFilmsPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSetWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetWidth);
  }, []);

  const favFilms = useSelector(selectors.getFavFilms);
  const filmsPerList = getFilmsPerList(width);
  const filmsArr = getFilmsArr(favFilms, filmsPerList);
  return (
    <Wrapper>
      {width > 1440 && <MainMenuContent />}

      <CardsContentWrapper>
        {filmsArr &&
          filmsArr.map((filmsList, idx) => {
            return (
              <CardsWrapper key={idx}>
                {filmsList.map((film, idx) => {
                  return (
                    <Card
                      imdbID={film.imdbID}
                      key={idx}
                      Poster={film.Poster}
                      Title={film.Title}
                      imdbRating={film.imdbRating}
                    />
                  );
                })}
              </CardsWrapper>
            );
          })}
      </CardsContentWrapper>

      {!favFilms.length && (
        <EmptyStateWrapper>
          <NotFoundImage></NotFoundImage>
          <EmptyStateText>No favourites</EmptyStateText>
        </EmptyStateWrapper>
      )}
    </Wrapper>
  );
};

export default FavFilmsPage;
