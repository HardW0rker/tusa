import { IMultiSelect } from "../lib/types/multiSelect.types";
import { MultiSelectList } from "./multiSelectList";
import classNames from "classnames";
import "./multiSelect.scss";
import { ChevronIcon } from "../../../icons";

export function MultiSelect({
  open,
  value,
  setOpen,
  checkboxAction,
  title,
  placeholder,
  options,
  size = "Big",
}: IMultiSelect) {
  const containerClasses: string = classNames({
    "multi-select__container": true,
    "multi-select__container-big": size === "Big",
    "multi-select__container-open": open,
  });
  const textClasses: string = classNames({
    "multi-select__text": true,
    "multi-select__text-big": size === "Big",
    "subtitle-primary": value.length !== 0,
  });

  return (
    <div className="multi-select">
      <button className={containerClasses} onClick={() => setOpen()}>
        <div className={textClasses}>
          <p className="multi-select__text-title">{title}</p>
          <p className="multi-select__text-subtitle">
            {value.length
              ? value.map((item: string, index: number) =>
                  index !== 0 ? "," + item : item,
                )
              : placeholder}
          </p>
        </div>
        <ChevronIcon
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.35s",
          }}
        />
      </button>
      {open ? (
        <MultiSelectList
          options={options}
          size={size}
          checkboxAction={checkboxAction}
        />
      ) : null}
    </div>
  );
}
