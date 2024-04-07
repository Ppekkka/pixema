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

const emptyUserData = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const [userData, setUserData] = useState(emptyUserData);

  const { signInAsync } = useAction();

  const handleSetUserData = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof emptyUserData
  ) => {
    setUserData(() => {
      return { ...userData, [field]: event.target.value };
    });
  };

  const signIn = () => {
    if (Object.values(userData).includes(""))
      alert("All fields must be filled!");
    else {
      signInAsync(userData);
    }
  };

  return (
    <div>
      <FormWrapper>
        <Title>Sign In</Title>

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

        <PrimaryButtonWrapper to="/main">
          <PrimaryButton onClick={signIn}>Sign In</PrimaryButton>
        </PrimaryButtonWrapper>

        <AlreadyHaveTextWrapper>
          <AlreadyHaveText>Already have an account? </AlreadyHaveText>
          <TextLink to="/sign-up"> Sign up</TextLink>
        </AlreadyHaveTextWrapper>
      </FormWrapper>
    </div>
  );
};

export default SignInPage;
