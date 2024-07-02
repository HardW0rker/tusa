import { ReactNode } from "react";

export type Itype = "Primery" | "Secondary";
export type Isize = "Small" | "Big";

export interface IButton {
  type: Itype;
  size: Isize;
  clickEvent?: () => void;
  disable?: boolean;
  text?: string;
  icon?: ReactNode;
}
