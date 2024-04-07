import React, { useState, useEffect, useMemo } from "react";
import { useAction } from "src/store/hooks/useAction";
import { useSelector } from "react-redux";

import {
  Wrapper,
  CardsContentWrapper,
  CardsWrapper,
  ShowMoreButton,
  EmptyStateText,
} from "src/client/pages/MainPage/styles";
import Card from "src/client/components/Card/Card";
import MainMenuContent from "src/client/components/MainMenuContent/MainMenuContent";
import { getPage } from "src/client/pages/MainPage/helpers";
import { sectionsEnum } from "src/types/globalTypes";
import { getFilmsPerList } from "src/client/helpers";
import { selectors } from "src/store/selectors/selctors";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [isThereMoreFilms, setIsThereMoreFilms] = useState(true);

  const { setFilmsAsync, setFilteredFilmsAsync, setSearchedFilmsAsync } =
    useAction();

  const width = useMemo(() => window.innerWidth, []);

  const filmsPerList = useMemo(() => getFilmsPerList(width), []);
  const isTrend = useSelector(selectors.getSection) === sectionsEnum.TRENDS;
  const filters = useSelector(selectors.getFilters);
  const searchTitle = useSelector(selectors.getFilms).searchTitle;

  useEffect(() => {
    if (searchTitle) {
      setSearchedFilmsAsync(searchTitle, filmsPerList, page);
    } else {
      filters.useFilters
        ? setFilteredFilmsAsync(false, filmsPerList, page, filters)
        : setFilmsAsync(false, isTrend, filmsPerList, page);
    }
  }, [page]);

  const filmsResponse = useSelector(selectors.getFilms);
  const filmsArr = useMemo(
    () => filmsResponse.filmsObject.arrayOfFilmsList,
    [filmsResponse]
  );

  useEffect(() => {
    if (
      (filmsResponse &&
        !filmsResponse.filmsObject.remnant.length &&
        filters.yearTo > filters.ratingFrom) ||
      (!filmsResponse.totalResults && filmsArr.length)
    ) {
      setIsThereMoreFilms(false);
    } else if (!filmsResponse.totalResults && filmsResponse.searchTitle)
      setIsThereMoreFilms(false);
    else if (filmsResponse.totalResults) setIsThereMoreFilms(true);
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
      {isThereMoreFilms && (
        <ShowMoreButton
          onClick={() => {
            const newPage = getPage(
              page,
              filmsArr[filmsArr.length - 1][0],
              filmsResponse.filmsObject.remnant[
                filmsResponse.filmsObject.remnant.length - 1
              ],
              filters.yearFrom
            );
            if (page === newPage) {
              setFilteredFilmsAsync(false, filmsPerList, page, filters);
            } else setPage(newPage);
          }}
        >
          Show more
        </ShowMoreButton>
      )}
      {!filmsResponse.totalResults && (
        <EmptyStateText>Oops, nothing had been found</EmptyStateText>
      )}
    </Wrapper>
  );
};

export default MainPage;
