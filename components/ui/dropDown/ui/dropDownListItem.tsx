import { IDropDownListItem } from "../lib/types/dropDown.types";

export function DropDownListItem({ option, selectItem }: IDropDownListItem) {
  return (
    <button className={"drop-down__item"} onClick={() => selectItem(option)}>
      {option.text}
    </button>
  );
}
