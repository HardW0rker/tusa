export type Isize = "Small" | "Big";

export interface IDropDown{
  selectItem: (option: IOption) => void;
  title: string;
  options: Array<IOption>;
  size?: Isize;
  value: IOption;
}

export interface IDropDownList {
  selectItem: (option: IOption) => void;
  options: Array<IOption>;
  size: Isize;
}

export interface IDropDownListItem {
  option: IOption;
  selectItem: (option: IOption) => void;
}

export interface IOption {
  text: string;
  value: string;
}
