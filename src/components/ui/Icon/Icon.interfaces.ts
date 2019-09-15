type IconName = "linkedin" | "calendar" | "chat" | "cog";

export interface IIcon {
  children?: never;
  name: IconName;
  color?: string;
  className?: string;

  /** Size in ems */
  width?: number;

  /** Size in ems */
  height?: number;

  /** Angle in deg */
  rotate?: number;
}
