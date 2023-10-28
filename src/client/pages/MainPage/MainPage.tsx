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
import { getPage } from "src/client/pages/MainPage/helpers";
import { sectionsSelectors } from "src/store/selectors/sectionsSelectors";
import { sectionsEnum } from "src/globalTypes";
import { getFilmsPerList } from "src/client/helpers";
import { filtersSelectors } from "src/store/selectors/filtersSelectors";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [isThereMoreFilms, setIsThereMoreFilms] = useState(true);

  const { setFilmsAsync, setFilteredFilmsAsync } = useAction();

  const width = useMemo(() => window.innerWidth, []);

  const filmsPerList = useMemo(() => getFilmsPerList(width), []);
  const isTrend =
    useSelector(sectionsSelectors.getSection) === sectionsEnum.TRENDS;
  const filters = useSelector(filtersSelectors.getFilters);

  useEffect(() => {
    filters.useFilters
      ? setFilteredFilmsAsync(false, filmsPerList, page, filters)
      : setFilmsAsync(false, isTrend, filmsPerList, page);
  }, [page]);

  const filmsResponse = useSelector(filmsSelectors.getFilms);
  const filmsArr = useMemo(
    () => filmsResponse.filmsObject.arrayOfFilmsList,
    [filmsResponse]
  );

  useEffect(() => {
    if (
      !filmsResponse.filmsObject.remnant.length &&
      filters.yearTo > filters.ratingFrom
    )
      setIsThereMoreFilms(false);
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
        <ShowMoreButton
          onClick={() => {
            const newPage = getPage(
              page,
              filmsArr[filmsArr.length - 1][0],
              filmsResponse.filmsObject.remnant[
                filmsResponse.filmsObject.remnant.length - 1
              ]
            );
            if (page === newPage) {
              setFilteredFilmsAsync(false, filmsPerList, page, filters);
            } else setPage(newPage);
          }}
        >
          Show more
        </ShowMoreButton>
      )}
    </Wrapper>
  );
};

export default MainPage;
