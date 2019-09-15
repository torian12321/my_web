export interface IButton {
  children?: never;
  caption?: string;
  alt?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
  type?: "reset" | "submit" | "button";
  form?: string;
}

export interface IButtonGroup {
  children: React.ReactElement<IButton>[] | React.ReactElement<IButton>;
  className?: string;
}
