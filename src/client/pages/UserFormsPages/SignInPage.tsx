import React, { useState } from "react";
import { useAction } from "src/store/hooks/useAction";
import {
  FormWrapper,
  Title,
  TextField,
  PrimaryButtonWrapper,
  AlreadyHaveTextWrapper,
  AlreadyHaveText,
  TextLink,
} from "src/client/pages/UserFormsPages/styles";
import Label from "src/client/components/Label/Label";
import Input from "src/client/components/Input/Input";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

const emptyUserData = {
  email: "",
  password: "",
};

const emptyInvalidForms = {
  email: false,
  password: false,
};

const SignInPage = () => {
  const [userData, setUserData] = useState(emptyUserData);
  const [invalidForms, setInvalidForms] = useState(emptyInvalidForms);

  const navigate = useNavigate();
  const { signInAsync } = useAction();

  const handleSetUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof emptyUserData
  ) => {
    setUserData(() => {
      return { ...userData, [field]: event.target.value };
    });

    setInvalidForms({ ...invalidForms, [field]: false });
  };

  const handleSetInvalid = (forms: string[]) => {
    const newObject = forms.reduce((object, form) => {
      return { ...object, [form]: true };
    }, {});
    
    setInvalidForms({ ...invalidForms, ...newObject });
  };

  const signIn = () => {
    const checkFormArr = Object.keys(userData).filter((form: string) => {
      return userData[form as keyof typeof userData] === "";
    });

    if (!checkFormArr.length) {
      signInAsync(userData);

      return navigate("/main");
    } else handleSetInvalid(checkFormArr);
  };

  return (
      <FormWrapper>
        <Title>Sign In</Title>

        <TextField>
          <Label label="Email">
            <Input
              inputType="email"
              placeholder="Your email"
              onChange={(event) => handleSetUserData(event, "email")}
              value={userData.email}
              invalid={invalidForms.email}
            ></Input>
          </Label>
        </TextField>

        <TextField>
          <Label label="Password">
            <Input
              inputType="password"
              placeholder="Your password"
              onChange={(event) => handleSetUserData(event, "password")}
              value={userData.password}
              invalid={invalidForms.password}
            ></Input>
          </Label>
        </TextField>

        <PrimaryButtonWrapper>
          <PrimaryButton onClick={signIn}>Sign In</PrimaryButton>
        </PrimaryButtonWrapper>

        <AlreadyHaveTextWrapper>
          <AlreadyHaveText>Already have an account? </AlreadyHaveText>
          <TextLink to="/sign-up"> Sign up</TextLink>
        </AlreadyHaveTextWrapper>
      </FormWrapper>
  );
};

export default SignInPage;
