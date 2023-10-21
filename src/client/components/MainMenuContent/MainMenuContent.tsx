import React, { useState } from "react";
import { GetColor } from "src/client/components/MainMenuContent/helpers";
import {
  Wrapper,
  SectionWrapper,
  SectionTitle,
} from "src/client/components/MainMenuContent/styles";
import BookmarkSvg from "src/client/components/Svg/BookmarkSvg";
import FireSvg from "src/client/components/Svg/FireSvg";
import HomeSvg from "src/client/components/Svg/HomeSvg";
import SettingsSvg from "src/client/components/Svg/SettingsSvg";

export enum SectionsEnum {
  HOME = "HOME",
  TRENDS = "TRENDS",
  FAVOURITES = "FAVOURITES",
  SETTINGS = "SETTINGS",
}

const MainMenuContent = () => {
  const [selected, setSelected] = useState(SectionsEnum.HOME);

  const handleSelect = (section: SectionsEnum) => {
    setSelected(section);
  };

  return (
    <Wrapper>
      <SectionWrapper onClick={() => handleSelect(SectionsEnum.HOME)}>
        <HomeSvg fill={GetColor(SectionsEnum.HOME, selected)} />
        <SectionTitle $selected={SectionsEnum.HOME === selected}>
          Home
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper onClick={() => handleSelect(SectionsEnum.TRENDS)}>
        <FireSvg fill={GetColor(SectionsEnum.TRENDS, selected)} />
        <SectionTitle $selected={SectionsEnum.TRENDS === selected}>
          Trends
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper onClick={() => handleSelect(SectionsEnum.FAVOURITES)}>
        <BookmarkSvg fill={GetColor(SectionsEnum.FAVOURITES, selected)} />
        <SectionTitle $selected={SectionsEnum.FAVOURITES === selected}>
          Favorites
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper onClick={() => handleSelect(SectionsEnum.SETTINGS)}>
        <SettingsSvg fill={GetColor(SectionsEnum.SETTINGS, selected)} />
        <SectionTitle $selected={SectionsEnum.SETTINGS === selected}>
          Settings
        </SectionTitle>
      </SectionWrapper>
    </Wrapper>
  );
};

export default MainMenuContent;
