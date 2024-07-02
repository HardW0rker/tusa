import {ReactNode} from 'react'


export interface IInput{
  value: string;
  placeholder: string;
  icon:ReactNode;
  changeValue:(value:string) => void;
}
