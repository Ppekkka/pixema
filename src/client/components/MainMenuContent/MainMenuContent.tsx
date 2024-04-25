import React, { useState, useEffect } from "react";
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
import { useAction } from "src/store/hooks/useAction";
import { useSelector } from "react-redux";
import { sectionsEnum } from "src/types/globalTypes";
import { getFilmsPerList } from "src/client/helpers";
import { selectors } from "src/store/selectors/selctors";
import { useNavigate } from "react-router-dom";

const MainMenuContent = () => {
  const defaultSection = useSelector(selectors.getSection);
  const userInfo = useSelector(selectors.getUserInfo);

  const [selectedSection, setSelectedSection] = useState(defaultSection);
  const [width, setWidth] = useState(window.innerWidth);

  const handleSelect = (section: sectionsEnum) => {
    setSelectedSection(section);
  };

  const handleSetWidth = () => {
    setWidth(window.innerWidth);
  };

  const { setFilmsAsync, changeSection } = useAction();

  const filmsPerList = getFilmsPerList(width);

  useEffect(() => {
    changeSection(selectedSection);
    if (selectedSection === sectionsEnum.TRENDS) {
      setFilmsAsync(true, true, filmsPerList, 1);
    } else if(selectedSection === sectionsEnum.HOME) {
      setFilmsAsync(true, false, filmsPerList, 1);
    }
  }, [selectedSection]);

  useEffect(() => {
    window.addEventListener("resize", handleSetWidth);
  }, []);

  const navigate = useNavigate();

  const goToAnotherSection = (section: sectionsEnum, link: string) => {
    handleSelect(section);

    if (link === "settings") {
      userInfo.username
        ? setTimeout(() => navigate(`/${link}`), 500)
        : setTimeout(() => navigate(`/sign-up`), 500);
    } else setTimeout(() => navigate(`/${link}`), 500);
  };

  return (
    <Wrapper>
      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.HOME, "main")}
      >
        <HomeSvg fill={GetColor(sectionsEnum.HOME, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.HOME === selectedSection}>
          Home
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.TRENDS, "trends")}
      >
        <FireSvg fill={GetColor(sectionsEnum.TRENDS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.TRENDS === selectedSection}>
          Trends
        </SectionTitle>
      </SectionWrapper>
      <SectionWrapper
        onClick={() =>
          goToAnotherSection(sectionsEnum.FAVOURITES, "favourites")
        }
      >
        <BookmarkSvg
          fill={GetColor(sectionsEnum.FAVOURITES, selectedSection)}
        />
        <SectionTitle $selected={sectionsEnum.FAVOURITES === selectedSection}>
          Favorites
        </SectionTitle>
      </SectionWrapper>

      <SectionWrapper
        onClick={() => goToAnotherSection(sectionsEnum.SETTINGS, "settings")}
      >
        <SettingsSvg fill={GetColor(sectionsEnum.SETTINGS, selectedSection)} />
        <SectionTitle $selected={sectionsEnum.SETTINGS === selectedSection}>
          Settings
        </SectionTitle>
      </SectionWrapper>
    </Wrapper>
  );
};

export default MainMenuContent;
