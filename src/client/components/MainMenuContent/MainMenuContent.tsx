import React, { useState, useEffect } from "react";
import {
  GetColor,
} from "src/client/components/MainMenuContent/helpers";
import {
  Wrapper,
  SectionWrapper,
  SectionTitle,
} from "src/client/components/MainMenuContent/styles";
import BookmarkSvg from "src/client/components/Svg/BookmarkSvg";
import FireSvg from "src/client/components/Svg/FireSvg";
import HomeSvg from "src/client/components/Svg/HomeSvg";
import SettingsSvg from "src/client/components/Svg/SettingsSvg";
import { useAction } from "src/store/hooks/useAction";
import { useSelector } from "react-redux";
import { sectionsEnum } from "src/globalTypes";
import { getFilmsPerList } from "src/client/helpers";
import { selectors } from "src/store/selectors/selctors";

const MainMenuContent = () => {
  const defaultSection = useSelector(selectors.getSection);

  const [selectedSection, setSelectedSection] = useState(defaultSection);

  const handleSelect = (section: sectionsEnum) => {
    setSelectedSection(section);
  };

  const { setFilmsAsync, changeSection } = useAction();
  
  const width = window.innerWidth;
  const filmsPerList = getFilmsPerList(width);

  useEffect(() => {
    changeSection(selectedSection);
    if (selectedSection === sectionsEnum.TRENDS) {
      setFilmsAsync(true, true, filmsPerList, 1);
    }
  }, [selectedSection]);

  return (
    <Wrapper>
      <SectionWrapper onClick={() => handleSelect(sectionsEnum.HOME)}>
        <HomeSvg fill={GetColor(sectionsEnum.HOME, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.HOME === selectedSection}>
          Home
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper onClick={() => handleSelect(sectionsEnum.TRENDS)}>
        <FireSvg fill={GetColor(sectionsEnum.TRENDS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.TRENDS === selectedSection}>
          Trends
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper onClick={() => handleSelect(sectionsEnum.FAVOURITES)}>
        <BookmarkSvg
          fill={GetColor(sectionsEnum.FAVOURITES, selectedSection)}
        />
        <SectionTitle $selected={sectionsEnum.FAVOURITES === selectedSection}>
          Favorites
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper onClick={() => handleSelect(sectionsEnum.SETTINGS)}>
        <SettingsSvg fill={GetColor(sectionsEnum.SETTINGS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.SETTINGS === selectedSection}>
          Settings
        </SectionTitle>
      </SectionWrapper>
    </Wrapper>
  );
};

export default MainMenuContent;
