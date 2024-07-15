import {ReactNode} from 'react'

export type Itype = "Default" | "Double";
export interface IInput{
  type?:Itype;
  unit?:string;
  title?:string;
  value: string;
  placeholder: string;
  icon?:ReactNode;
  changeValue:(value:string) => void;
}
