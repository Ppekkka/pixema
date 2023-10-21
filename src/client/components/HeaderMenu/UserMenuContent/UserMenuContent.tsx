import React from "react";
import {
  Wrapper,
  SectionWrapper,
  SectionText,
} from "src/client/components/HeaderMenu/UserMenuContent/styles";

interface IProps {
  $isAuthorized: boolean;
}

const UserMenuContent = ({ $isAuthorized }: IProps) => {
  return $isAuthorized ? (
    <Wrapper>
      <SectionWrapper $isAuthorized>
        <SectionText>Edit profile</SectionText>
      </SectionWrapper>
      <SectionWrapper $isAuthorized>
        <SectionText>Log Out</SectionText>
      </SectionWrapper>
    </Wrapper>
  ) : (
    <Wrapper>
      <SectionWrapper $isAuthorized>
        <SectionText>Log In</SectionText>
      </SectionWrapper>
    </Wrapper>
  );
};

export default UserMenuContent;
