import React from "react";
import { useBoolean } from "../../hooks";
import { MenuButton } from "./MenuButton";
import { MenuPanel } from "./MenuPanel";

const Menu = () => {
  const [isOpen, isOpenActions] = useBoolean(false);

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={isOpenActions.toggle} />
      <MenuPanel isOpen={isOpen}>abc</MenuPanel>
    </>
  );
};

export { Menu };
