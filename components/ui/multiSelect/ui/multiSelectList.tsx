import { IMultiSelectList, IOption } from "../lib/types/multiSelect.types";
import { MultiSelectListItem } from "./multiSelectListItem";
import classNames from "classnames";

export function MultiSelectList({
  options,
  size,
  checkboxAction,
}: IMultiSelectList) {
  const ListClasses = classNames({
    "multi-select-list": true,
    "multi-select-list-big": size === "Big",
  });
  return (
    <div className={ListClasses}>
      {options.map((item: IOption) => {
        return (
          <MultiSelectListItem
            option={item}
            checkboxAction={checkboxAction}
            key={item.value}
          />
        );
      })}
    </div>
  );
}
