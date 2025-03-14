import { IButton } from "../lib/types/button.types";
import classNames from "classnames";
import "./button.scss";

export function Button({
  type,
  size,
  text,
  icon,
  disable,
  clickEvent,
}: IButton) {
  const buttonClass: string = classNames({
    button: true,
    "button-secondary": type === "Secondary",
    "button-big": size === "Big",
    "button-disable": disable,
  });
  return (
    <button className={buttonClass} onClick={clickEvent}>
      {icon ? icon : null}
      {text ? <p>{text}</p> : null}
    </button>
  );
}
