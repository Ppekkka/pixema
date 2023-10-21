import React, { useState } from "react";
import {
  SearchInput,
  Wrapper,
  FilterSvgWrapper,
} from "src/client/components/Search/styles";
import FilterSvg from "src/client/components/Svg/FilterSvg";
import { useAction } from "src/store/hooks/useAction";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { openFilterMenu } = useAction();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <SearchInput
        placeholder="Search"
        onChange={handleChangeValue}
      ></SearchInput>
      <FilterSvgWrapper onClick={openFilterMenu}>
        <FilterSvg />
      </FilterSvgWrapper>
    </Wrapper>
  );
};

export default Search;
