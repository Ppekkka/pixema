import React, { useState } from "react";
import {
  SearchInput,
  Wrapper,
  FilterSvgWrapper,
} from "src/client/components/Search/styles";
import FilterSvg from "src/client/components/Svg/FilterSvg";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <SearchInput
        placeholder="Search"
        onChange={handleChangeValue}
      ></SearchInput>
      <FilterSvgWrapper>
        <FilterSvg />
      </FilterSvgWrapper>
    </Wrapper>
  );
};

export default Search;
