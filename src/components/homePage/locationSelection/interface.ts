import { Isize, IOption } from "../../minorComponents/multiSelect/interface";

export interface IMultiSelectData extends Array<IMultiSelectDataItem> {}

export interface IMultiSelectDataItem {
  id: number;
  title: string;
  size: Isize;
  placeholder: string;
  value: Array<string>;
  options: Array<IOption>;
}
