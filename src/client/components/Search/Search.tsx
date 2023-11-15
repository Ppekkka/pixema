import React, { useState, useMemo } from "react";
import {
  SearchInput,
  Wrapper,
  FilterSvgWrapper,
} from "src/client/components/Search/styles";
import FilterSvg from "src/client/components/Svg/FilterSvg";
import { getFilmsPerList } from "src/client/helpers";
import { useAction } from "src/store/hooks/useAction";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const { openFilterMenu, setSearchedFilmsAsync, setFilmsAsync } = useAction();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      if (searchValue)
        setSearchedFilmsAsync(searchValue, getFilmsPerList(width));
      else setFilmsAsync(true, false, getFilmsPerList(width));
    }
  };

  const width = useMemo(() => window.innerWidth, []);

  return (
    <Wrapper>
      <SearchInput
        placeholder="Search"
        onChange={handleChangeValue}
        onKeyDown={handleKeyPress}
      ></SearchInput>
      <FilterSvgWrapper onClick={openFilterMenu}>
        <FilterSvg />
      </FilterSvgWrapper>
    </Wrapper>
  );
};

export default Search;
