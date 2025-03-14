"use client";

import { IDropDown, IOption } from "../lib/types/dropDown.types";
import { DropDownList } from "./dropDownList";
import React, { useRef, useState, useEffect } from "react";
import { ChevronIcon } from "../../../icons";
import "./dropDown.scss";
import classNames from "classnames";

export function DropDown({
  value,
  selectItem,
  title,
  options,
  size = "Big",
}: IDropDown) {
  const [open, setOpen] = useState<boolean>(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        blockRef?.current &&
        !blockRef?.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const dropDownContainerClasses = classNames({
    "drop-down__container": true,
    "drop-down__container-big": size === "Big",
    "drop-down__container-open": open,
  });
  const dropDownTextClasses = classNames({
    "drop-down__text": true,
    "drop-down__text-big": size === "Big",
  });
  return (
    <div className={"drop-down"} ref={blockRef}>
      <button
        className={dropDownContainerClasses}
        onClick={() => setOpen(!open)}
      >
        <div className={dropDownTextClasses}>
          <p className="drop-down__text-title">{title}</p>
          <p className="drop-down__text-subtitle">{value.text}</p>
        </div>
        <ChevronIcon
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.35s",
          }}
        />
      </button>
      {open ? (
        <DropDownList
          options={options}
          size={size}
          selectItem={(value: IOption) => {
            selectItem(value);
            setOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
