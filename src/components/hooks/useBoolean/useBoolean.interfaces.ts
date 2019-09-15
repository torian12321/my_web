import { SetStateAction } from "react";

export type UseBooleanActions = {
  setValue: React.Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export type UseBoolean = [boolean, UseBooleanActions];
