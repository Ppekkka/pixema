import React, { useState, useEffect } from "react";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "src/client/components/Buttons/SecondaryButton/SecondaryButton";
import {
  Wrapper,
  MainWrapper,
  Title,
  SortByWrapper,
  FilterValueWrapper,
  FilterValue,
  InputsWrapper,
  InputOrButtonWrapper,
  ButtonsWrapper,
  CursorPounterWrapper,
} from "src/client/components/FilterMenu/styles";
import Input from "src/client/components/Input/Input";
import CrossSvg from "src/client/components/Svg/CrossSvg";
import Tabs from "src/client/components/Tabs/Tabs";
import { useAction } from "src/store/hooks/useAction";
import { useSelector } from "react-redux";
import { sectionsEnum } from "src/types/globalTypes";
import { getFilmsPerList } from "src/client/helpers";
import { selectors } from "src/store/selectors/selctors";

const fromToObj = {
  yearFrom: 0,
  yearTo: 0,

  ratingFrom: 0,
  ratingTo: 0,

  useFilters: true,
};

const FilterMenu = () => {
  const [filters, setFilters] = useState(fromToObj);
  const [width, setWidth] = useState(window.innerWidth);

  const {
    closeFilterMenu,
    changeFilters,
    clearFilters,
    changeSection,
    setFilteredFilmsAsync,
  } = useAction();

  const handleSetFilters = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof fromToObj
  ) => {
    setFilters(() => {
      return { ...filters, [field]: +event.target.value, useFilters: true };
    });
  };

  const handleSetWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetWidth);
  }, []);

  useEffect(() => {
    changeFilters(filters);
  }, [filters]);

  const globalFilters = useSelector(selectors.getFilters);

  const showResults = () => {
    if (globalFilters.ratingFrom && globalFilters.ratingFrom < 0)
      alert("Rating can`t be less then 0!");
    else if (globalFilters.ratingTo && globalFilters.ratingTo > 10)
      alert("Rating can`t be bigger then 10!");
    else if (globalFilters.yearFrom && globalFilters.yearFrom < 1896)
      alert("First film was made in 1896!");
    else if (
      globalFilters.yearTo &&
      globalFilters.yearTo <= globalFilters.yearFrom
    )
      alert(
        "Year you want to be the last must be less then year where you want to start or equal!"
      );
    else if (
      globalFilters.ratingTo &&
      globalFilters.ratingTo <= globalFilters.ratingFrom
    )
      alert(
        "Rating you want to be the last must be less then rating where you want to start or equal!"
      );
    else {
      changeSection(sectionsEnum.HOME);
      setFilteredFilmsAsync(true, getFilmsPerList(width), 1, globalFilters);
    }
  };

  const handleClearFilters = () => {
    clearFilters();
    setFilters(fromToObj);
  };

  return (
    <Wrapper>
      <div>
        <MainWrapper>
          <Title>Filters</Title>
          <CursorPounterWrapper onClick={closeFilterMenu}>
            <CrossSvg fill="#AFB2B6" />
          </CursorPounterWrapper>
        </MainWrapper>

        <SortByWrapper>
          <FilterValue>Sort by</FilterValue>
          <Tabs firstText="Rating" secondText="Year" />
        </SortByWrapper>
        <FilterValueWrapper>
          <FilterValue>Years</FilterValue>
          <InputsWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.yearFrom ? filters.yearFrom : ""}
                placeholder="From"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "yearFrom");
                }}
              ></Input>
            </InputOrButtonWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.yearTo ? filters.yearTo : ""}
                placeholder="To"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "yearTo");
                }}
              ></Input>
            </InputOrButtonWrapper>
          </InputsWrapper>
        </FilterValueWrapper>

        <FilterValueWrapper>
          <FilterValue>Rating</FilterValue>
          <InputsWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.ratingFrom ? filters.ratingFrom : ""}
                placeholder="From"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "ratingFrom");
                }}
              ></Input>
            </InputOrButtonWrapper>
            <InputOrButtonWrapper>
              <Input
                value={filters.ratingTo ? filters.ratingTo : ""}
                placeholder="To"
                inputType="number"
                onChange={(event) => {
                  handleSetFilters(event, "ratingTo");
                }}
              ></Input>
            </InputOrButtonWrapper>
          </InputsWrapper>
        </FilterValueWrapper>
      </div>

      <ButtonsWrapper>
        <InputOrButtonWrapper>
          <SecondaryButton onClick={handleClearFilters}>
            Clear filter
          </SecondaryButton>
        </InputOrButtonWrapper>
        <InputOrButtonWrapper>
          <PrimaryButton onClick={showResults}>Show results</PrimaryButton>
        </InputOrButtonWrapper>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default FilterMenu;
