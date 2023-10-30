import React from "react";
import MainMenuContent from "src/client/components/MainMenuContent/MainMenuContent";
import {
  Wrapper,
  SettingsContentWrapper,
  SectionTitle,
  SectionWrapper,
  SectionInfo,
  StyledColorModeWrapper,
  StyledColorMode,
  StyledLabel,
} from "src/client/pages/SettingsPage/styles";
import { useSelector } from "react-redux";
import { selectors } from "src/store/selectors/selctors";
import CustomSwitch from "src/client/components/CustomSwitch/CustomSwitch";

const SettingsPage = () => {
  const width = window.innerWidth;
  const userInfo = useSelector(selectors.getUserInfo);

  return (
    <Wrapper>
      {width >= 1440 && <MainMenuContent />}

      <SettingsContentWrapper>
        <SectionTitle>
          Profile
          <SectionWrapper>
            <StyledLabel>
              Name
              <SectionInfo>{userInfo.username}</SectionInfo>
            </StyledLabel>
            <StyledLabel>
              Email
              <SectionInfo>{userInfo.email}</SectionInfo>
            </StyledLabel>
          </SectionWrapper>
        </SectionTitle>

        <SectionTitle>
          Color mode
          <StyledColorModeWrapper>
            <StyledColorMode>Color mode</StyledColorMode>
            <CustomSwitch></CustomSwitch>
          </StyledColorModeWrapper>
        </SectionTitle>
      </SettingsContentWrapper>
    </Wrapper>
  );
};

export default SettingsPage;
