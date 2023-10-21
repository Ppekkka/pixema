import React, { useState, useEffect, useMemo } from "react";
import { useAction } from "src/store/hooks/useAction";
import { filmsSelectors } from "src/store/selectors/filmsSelectors";
import { useSelector } from "react-redux";

import {
  Wrapper,
  CardsContentWrapper,
  CardsWrapper,
  ShowMoreButton,
} from "src/client/pages/MainPage/styles";
import Card from "src/client/components/Card/Card";
import MainMenuContent from "src/client/components/MainMenuContent/MainMenuContent";
import { getFilmsPerList } from "src/client/pages/MainPage/helpers";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [isThereMoreFilms, setIsThereMoreFilms] = useState(true);

  const { setFilmsAsync } = useAction();

  const width = useMemo(() => window.innerWidth, []);

  const filmsPerList = useMemo(() => getFilmsPerList(width), []);

  useEffect(() => {
    setFilmsAsync(filmsPerList, page);
  }, [page]);

  const filmsResponse = useSelector(filmsSelectors.getFilms);
  const filmsArr = useMemo(
    () => filmsResponse.filmsObject.arrayOfFilmsList,
    [filmsResponse]
  );

  useEffect(() => {
    if (filmsResponse.filmsObject.arrayOfFilmsList.length && !filmsResponse.filmsObject.remnant.length) setIsThereMoreFilms(false);
  }, [filmsArr]);

  return (
    <Wrapper>
      {width >= 1440 && <MainMenuContent />}
     
        <CardsContentWrapper>
          {filmsArr &&
            filmsArr.map((filmsList, idx) => {
              return (
                <CardsWrapper key={idx}>
                  {filmsList.map((film, idx) => {
                    return (
                      <Card
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
        {isThereMoreFilms && (
            <ShowMoreButton onClick={() => setPage(page + 1)}>
              Show more
            </ShowMoreButton>
        )}

    </Wrapper>
  );
};

export default MainPage;
