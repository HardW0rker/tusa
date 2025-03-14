import classNames from "classnames";
import { ActiveCheckBoxIcon } from "../../../icons";
import "./checkbox.scss";

export function Checkbox({
  checked,
  action,
}: {
  checked: boolean;
  action: (value: boolean) => void;
}) {
  const checkboxClasses: string = classNames({
    checkbox: true,
    "checkbox-checked": checked,
  });
  return (
    <button className={checkboxClasses} onClick={() => action(!checked)}>
      {checked && <ActiveCheckBoxIcon />}
    </button>
  );
}
