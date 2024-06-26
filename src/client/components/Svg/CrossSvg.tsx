import React from "react";
import { Wrapper } from "src/client/components/Svg/styles";

interface IProps {
  fill?: string;
}

const CrossSvg = ({ fill }: IProps) => {
  return (
    <Wrapper>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path
          d="M16.8187 8.2099C17.1201 7.88681 17.1111 7.37164 16.7987 7.05922C16.4863 6.7468 15.9887 6.75544 15.6873 7.07852L12.2796 10.7317L8.72611 7.29955C8.40831 6.9926 7.89306 6.9926 7.57526 7.29955C7.25746 7.60649 7.25746 8.10415 7.57526 8.4111L11.1887 11.9011L7.79986 15.5339C7.49848 15.857 7.50742 16.3722 7.81984 16.6846C8.13226 16.997 8.62985 16.9884 8.93123 16.6653L12.339 13.0122L15.8924 16.4442C16.2102 16.7512 16.7255 16.7512 17.0433 16.4442C17.3611 16.1373 17.3611 15.6396 17.0433 15.3327L13.4299 11.8427L16.8187 8.2099Z"
          fill="white"
        />
      </svg>
    </Wrapper>
  );
};

export default CrossSvg;
