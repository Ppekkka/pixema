import React, { useEffect } from "react";
import {
  Wrapper,
  ActivationText,
  PrimaryButtonWrapper,
} from "src/client/pages/UserFormsPages/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectors } from "src/store/selectors/selctors";
import { Link } from "react-router-dom";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import { useAction } from "src/store/hooks/useAction";

const ActivateAccountPage = () => {
  const { uid, token } = useParams();

  const { activateAccountAsync } = useAction();

  useEffect(() => {
    if (uid && token) {
      activateAccountAsync(uid!, token!);
    }
  }, [uid, token]);

  return (
    <Wrapper>
      <ActivationText>
        {uid && token ? "Success!" : "Please, check out your email!"}
      </ActivationText>
      {uid && token && (
        <Link to="/main">
          <PrimaryButtonWrapper to="/main">
            <PrimaryButton>Go to home!</PrimaryButton>
          </PrimaryButtonWrapper>
        </Link>
      )}
    </Wrapper>
  );
};

export default ActivateAccountPage;
