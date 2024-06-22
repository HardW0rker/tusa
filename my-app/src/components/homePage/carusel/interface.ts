import { ReactNode } from "react";

export interface ICaruselItemArray extends ICaruselItem {}

export interface ICaruselItem {
  text: string;
  icon: ReactNode;
}
