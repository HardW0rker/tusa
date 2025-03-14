export type Isize = "Small" | "Big";

export interface IMultiSelect {
  setOpen: () => void;
  checkboxAction: (option: IOption) => void;
  open: boolean;
  title: string;
  placeholder: string;
  options: Array<IOption>;
  size?: Isize;
  value: Array<string>;
}

export interface IMultiSelectList {
  checkboxAction: (option: IOption) => void;
  options: Array<IOption>;
  size: Isize;
}

export interface IMultiSelectListItem {
  option: IOption;
  checkboxAction: (option: IOption) => void;
}

export interface IOption {
  text: string;
  value: string;
  checked: boolean;
}
