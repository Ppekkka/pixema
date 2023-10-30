import React from "react";
import {
  Wrapper,
  SectionWrapper,
  SectionText,
  SectionLink,
} from "src/client/components/HeaderMenu/UserMenuContent/styles";
import { useAction } from "src/store/hooks/useAction";

interface IProps {
  $isAuthorized: boolean;
}

const UserMenuContent = ({ $isAuthorized }: IProps) => {
  const { logOutAsync } = useAction();

  return $isAuthorized ? (
    <Wrapper>
      <SectionWrapper $isAuthorized>
        <SectionLink to="/settings">Edit profile</SectionLink>
      </SectionWrapper>
      <SectionWrapper $isAuthorized>
        <SectionText onClick={logOutAsync}>Log Out</SectionText>
      </SectionWrapper>
    </Wrapper>
  ) : (
    <Wrapper>
      <SectionWrapper $isAuthorized>
        <SectionLink to="/sign-in">Log In</SectionLink>
      </SectionWrapper>
    </Wrapper>
  );
};

export default UserMenuContent;
