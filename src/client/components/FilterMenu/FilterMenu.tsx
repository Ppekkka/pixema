import React from "react";
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
  CursorPounterWrapper
} from "src/client/components/FilterMenu/styles";
import Input from "src/client/components/Input/Input";
import CrossSvg from "src/client/components/Svg/CrossSvg";
import Tabs from "src/client/components/Tabs/Tabs";
import { useAction } from "src/store/hooks/useAction";

const FilterMenu = () => {
  const { closeFilterMenu } = useAction();

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
              <Input placeholder="From" inputType="text"></Input>
            </InputOrButtonWrapper>
            <InputOrButtonWrapper>
              <Input placeholder="To" inputType="text"></Input>
            </InputOrButtonWrapper>
          </InputsWrapper>
        </FilterValueWrapper>

        <FilterValueWrapper>
          <FilterValue>Rating</FilterValue>
          <InputsWrapper>
            <InputOrButtonWrapper>
              <Input placeholder="From" inputType="text"></Input>
            </InputOrButtonWrapper>
            <InputOrButtonWrapper>
              <Input placeholder="To" inputType="text"></Input>
            </InputOrButtonWrapper>
          </InputsWrapper>
        </FilterValueWrapper>
      </div>

      <ButtonsWrapper>
        <InputOrButtonWrapper>
          <SecondaryButton>Clear filter</SecondaryButton>
        </InputOrButtonWrapper>
        <InputOrButtonWrapper>
          <PrimaryButton>Show results</PrimaryButton>
        </InputOrButtonWrapper>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default FilterMenu;
