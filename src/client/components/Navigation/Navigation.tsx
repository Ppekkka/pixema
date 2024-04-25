import React, { useState, useEffect } from "react";
import {
  NavigationWrapper,
  RightArrowSvg,
} from "src/client/components/Navigation/styles";
import ArrowSvg from "src/client/components/Svg/ArrowSvg";
import { useSwiper } from "swiper/react";

const Navigation = () => {
  const swiper = useSwiper();
  const [location, setLocation] = useState({
    isBeginning: swiper.isBeginning,
    isEnd: swiper.isEnd,
  });

  const handleSetLocation = () => {
    setLocation({
      ...location,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  useEffect(() => {
    swiper.on("slideChange", handleSetLocation);

    return () => {
      swiper.off("slideChange", handleSetLocation);
    };
  }, [swiper]);

  return (
    <NavigationWrapper>
      <ArrowSvg
        color={location.isBeginning ? "#AFB2B6" : ""}
        onClick={() => swiper?.slidePrev()}
      />

      <RightArrowSvg onClick={() => swiper?.slideNext()}>
        <ArrowSvg color={location.isEnd ? "#AFB2B6" : ""} />
      </RightArrowSvg>
    </NavigationWrapper>
  );
};

export default Navigation;
