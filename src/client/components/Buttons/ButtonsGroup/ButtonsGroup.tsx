import React from "react";
import {
  Button,
  Wrapper,
} from "src/client/components/Buttons/ButtonsGroup/styles";
import BookmarkSvg from "src/client/components/Svg/BookmarkSvg";
import ShareSvg from "src/client/components/Svg/ShareSvg";

const ButtonsGroup = () => {
  return (
    <Wrapper>
      <Button>
        <BookmarkSvg></BookmarkSvg>
      </Button>
      <Button>
        <ShareSvg></ShareSvg>
      </Button>
    </Wrapper>
  );
};

export default ButtonsGroup;
