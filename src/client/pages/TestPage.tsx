import React from "react";
import Input from "src/client/components/Input/Input";
import CustomSelect from "src/client/components/CustomSelect/CustomSelect";
import Tabs from "src/client/components/Tabs/Tabs";
import PrimaryButton from "src/client/components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "src/client/components/Buttons/SecondaryButton/SecondaryButton";
import HomeSvg from "src/client/components/Svg/HomeSvg";
import CustomSwitch from "src/client/components/CustomSwitch/CustomSwitch";
import User from "src/client/components/User/User";
import Search from "src/client/components/Search/Search";
import ButtonsGroup from "src/client/components/Buttons/ButtonsGroup/ButtonsGroup";
import Card from "src/client/components/Card/Card";

const TestPage = () => {
  return (
    <div>
      <Input inputType="text" label="text" placeholder="text"></Input>
      <Tabs firstText="text" secondText="text"></Tabs>
      <CustomSelect
        label="text"
        placeholder="Choose one"
        optionsValues={["1", "2"]}
        isMulti={false}
      ></CustomSelect>
      <CustomSelect
        label="text"
        placeholder="Choose one"
        optionsValues={["1", "2"]}
        isMulti
      ></CustomSelect>
      <PrimaryButton>text</PrimaryButton>
      <SecondaryButton>text</SecondaryButton>
      <HomeSvg></HomeSvg>
      <CustomSwitch></CustomSwitch>
      <User></User>
      <Search></Search>
      <ButtonsGroup></ButtonsGroup>
      <Card
        title="ygtfrdewsdc 98udenew f7uh2wiofr"
        genres={["oiduy", "oi3uy", "oiguy"]}
        rating={9}
        image="https://freedomrockradio.co/wp-content/uploads/2021/12/ARCH-ENEMY-To-Release-New-Song-House-Of-Mirrors-Next.jpg"
      ></Card>
    </div>
  );
};

export default TestPage;
