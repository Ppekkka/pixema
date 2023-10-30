import React, { useState } from "react";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import Input from "src/client/components/Input/Input";
import Label from "src/client/components/Label/Label";
import {
  Wrapper,
  Title,
  TextField,
  PrimaryButtonWrapper,
  AlreadyHaveTextWrapper,
  AlreadyHaveText,
  TextLink,
} from "src/client/pages/UserFormsPages/styles";
import { useAction } from "src/store/hooks/useAction";

const emptyUserData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const [userData, setUserData] = useState(emptyUserData);

  const { signUpAsync } = useAction();

  const handleSetUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof emptyUserData
  ) => {
    setUserData(() => {
      return { ...userData, [field]: event.target.value };
    });
  };

  const signUp = () => {
    if (userData.password !== userData.confirmPassword)
      alert("Check out your password!");
    else if (Object.values(userData).includes(""))
      alert("All fields must be filled!");
    else {
      signUpAsync(userData);
    }
  };

  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <TextField>
        <Label label="Name">
          <Input
            inputType="name"
            placeholder="Your name"
            onChange={(event) => handleSetUserData(event, "username")}
            value={userData.username}
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
          ></Input>
        </Label>
      </TextField>

      <PrimaryButtonWrapper to='/activate-account'>
        <PrimaryButton onClick={signUp}>Sign Up</PrimaryButton>
      </PrimaryButtonWrapper>

      <AlreadyHaveTextWrapper>
        <AlreadyHaveText>Already have an account? </AlreadyHaveText>
        <TextLink to="/sign-in"> Sign in</TextLink>
      </AlreadyHaveTextWrapper>
    </Wrapper>
  );
};

export default SignUpPage;
