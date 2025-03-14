import { IOption, Isize } from "../../../ui/multiSelect";

export type IMultiSelectData = Array<IMultiSelectDataItem>;

export interface IMultiSelectDataItem {
  id: number;
  title: string;
  size: Isize;
  placeholder: string;
  value: Array<string>;
  options: Array<IOption>;
}
