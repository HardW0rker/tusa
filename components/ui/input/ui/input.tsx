import { IInput } from "../lib/types/input.types";
import classNames from "classnames";
import "./input.scss";

export function Input({
  value,
  placeholder,
  icon,
  changeValue,
  type = "Default",
  title,
  unit,
}: IInput) {
  const inputClasses: string = classNames({
    input: true,
    "input-default": type === "Default",
  });
  const inputFrameClasses: string = classNames({
    input__frame: true,
    "input__frame-default": type === "Default",
  });
  const inputFieldClasses: string = classNames({
    input__field: true,
    "input__field-default": type === "Default",
  });
  return (
    <div className={inputClasses}>
      {icon}
      {type === "Double" && <p className="input__title">{title}</p>}
      <div className={inputFrameClasses}>
        <input
          className={inputFieldClasses}
          placeholder={placeholder}
          value={value}
          onChange={(e) => changeValue(e.target.value)}
        />
        {value ? unit : null}
      </div>
    </div>
  );
}
