import React, { useEffect } from "react";
import {
  ActivationWrapper,
  ActivationText,
  PrimaryButtonLinkWrapper,
} from "src/client/pages/UserFormsPages/styles";
import { useParams } from "react-router-dom";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import { activateAccountAsync } from "src/store/thunks/userThunks/activateAccountAsync";
import { sectionsEnum } from "src/types/globalTypes";
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
      <ActivationWrapper>
        <ActivationText>
          {uid && token ? "Success!" : "Please, check out your email!"}
        </ActivationText>
        {uid && token && (
          <PrimaryButtonLinkWrapper to="/main" onClick={returnToMain}>
            <PrimaryButton>Go to home!</PrimaryButton>
          </PrimaryButtonLinkWrapper>
        )}
      </ActivationWrapper>
  );
};

export default ActivateAccountPage;
