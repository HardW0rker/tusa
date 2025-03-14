import { IDropDownList, IOption } from "../lib/types/dropDown.types";
import classNames from "classnames";
import { DropDownListItem } from "./dropDownListItem";

export function DropDownList({ options, size, selectItem }: IDropDownList) {
  const listClasses = classNames({
    "drop-down__list": true,
    "drop-down__list-big": size === "Big",
  });
  return (
    <div className={listClasses}>
      {options.map((item: IOption) => {
        return (
          <DropDownListItem
            option={item}
            selectItem={selectItem}
            key={item.value}
          />
        );
      })}
    </div>
  );
}
