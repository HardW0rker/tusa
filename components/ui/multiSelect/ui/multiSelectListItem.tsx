import { IMultiSelectListItem } from "../lib/types/multiSelect.types";
import { Checkbox } from "../../checkbox";

export function MultiSelectListItem({
  option,
  checkboxAction,
}: IMultiSelectListItem) {
  return (
    <button
      className="multi-select-list-item"
      onClick={() => checkboxAction(option)}
    >
      <Checkbox
        checked={option.checked}
        action={(value) => console.log(value)}
      />
      {option.text}
    </button>
  );
}
