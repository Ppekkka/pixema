import React, { useState } from "react";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import Input from "src/client/components/Input/Input";
import Label from "src/client/components/Label/Label";
import {
  FormWrapper,
  Title,
  TextField,
  PrimaryButtonWrapper,
  AlreadyHaveTextWrapper,
  AlreadyHaveText,
  TextLink,
} from "src/client/pages/UserFormsPages/styles";
import { useAction } from "src/store/hooks/useAction";
import { useNavigate } from "react-router-dom";

const emptyUserData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const emptyInvalidForms = {
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
};

const SignUpPage = () => {
  const [userData, setUserData] = useState(emptyUserData);
  const [invalidForms, setInvalidForms] = useState(emptyInvalidForms);

  const navigate = useNavigate();
  const { signUpAsync } = useAction();

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

  const signUp = () => {
    const checkFormArr = Object.keys(userData).filter((form: string) => {
      return userData[form as keyof typeof userData] === "";
    });

    if (userData.confirmPassword !== userData.password)
      checkFormArr.push("confirmPassword");

    if (!checkFormArr.length) {
      signUpAsync(userData);

      return navigate("/main");
    } else handleSetInvalid(checkFormArr);
  };

  return (
      <FormWrapper>
        <Title>Sign Up</Title>
        <TextField>
          <Label label="Name">
            <Input
              inputType="name"
              placeholder="Your name"
              onChange={(event) => handleSetUserData(event, "username")}
              value={userData.username}
              invalid={invalidForms.username}
            ></Input>
          </Label>
        </TextField>

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

        <TextField>
          <Label label="Confirm password">
            <Input
              inputType="password"
              placeholder="Confirm password"
              onChange={(event) => handleSetUserData(event, "confirmPassword")}
              value={userData.confirmPassword}
              invalid={invalidForms.confirmPassword}
            ></Input>
          </Label>
        </TextField>

        <PrimaryButtonWrapper>
          <PrimaryButton onClick={signUp}>Sign Up</PrimaryButton>
        </PrimaryButtonWrapper>

        <AlreadyHaveTextWrapper>
          <AlreadyHaveText>Already have an account? </AlreadyHaveText>
          <TextLink to="/sign-in"> Sign in</TextLink>
        </AlreadyHaveTextWrapper>
      </FormWrapper>
  );
};

export default SignUpPage;
