import React, { useState } from "react";
import {
  Wrapper,
  Line,
} from "src/client/components/HeaderMenu/HamburgerMenu/styles";

const HamburgerMenu = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <Wrapper onClick={handleOpen}>
        <Line $opened={opened} />
    </Wrapper>
  );
};

export default HamburgerMenu;
