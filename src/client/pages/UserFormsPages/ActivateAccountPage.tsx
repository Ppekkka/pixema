import React, { useEffect } from "react";
import {
  Wrapper,
  FormWrapper,
  ActivationText,
  PrimaryButtonWrapper,
} from "src/client/pages/UserFormsPages/styles";
import { useParams } from "react-router-dom";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import { activateAccountAsync } from "src/store/thunks/userThunks/activateAccountAsync";
import { sectionsEnum } from "src/globalTypes";
import { useAction } from "src/store/hooks/useAction";

const ActivateAccountPage = () => {
  const { uid, token } = useParams();

  useEffect(() => {
    if (uid && token) {
      activateAccountAsync(uid!, token!);
    }
  }, [uid, token]);

  const { changeSection } = useAction();

  const returnToMain = () => {
    changeSection(sectionsEnum.HOME);
  };

  return (
    <Wrapper>
      <FormWrapper>
        <ActivationText>
          {uid && token ? "Success!" : "Please, check out your email!"}
        </ActivationText>
        {uid && token && (
          <PrimaryButtonWrapper to="/main" onClick={returnToMain}>
            <PrimaryButton>Go to home!</PrimaryButton>
          </PrimaryButtonWrapper>
        )}
      </FormWrapper>
    </Wrapper>
  );
};

export default ActivateAccountPage;
