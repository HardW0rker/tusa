"use client";
import { useState } from "react";
import {
  IMultiSelectData,
  IMultiSelectDataItem,
} from "../lib/types/locationSelection.types";
import { Button } from "../../ui/button";
import classNames from "classnames";
import { FilterIcon, SearchIcon } from "../../icons";
import { multiSelectData } from "../lib/constans/multiSelectData";
import { IOption, MultiSelect } from "../../ui/multiSelect";
import { CheckInput } from "../../ui/checkInput";
import { Input } from "../../ui/input";
import "./locationSelection.scss";

export function LocationSelection() {
  const [checked, setchecked] = useState<boolean>(false);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData] = useState<IMultiSelectData>(multiSelectData);
  const [openId, setOpenId] = useState<number | null>(null);

  function changeData(item: IMultiSelectDataItem, option: IOption) {
    const newData = [...data];
    const editItem = newData.filter(
      (dataItem: IMultiSelectDataItem) => dataItem.id === item.id,
    )[0];
    const editOption = editItem.options.filter(
      (optionsItem: IOption) => optionsItem.value === option.value,
    )[0];
    editOption.checked = !editOption.checked;
    const index = editItem.value.indexOf(editOption.value);
    if (index === -1) {
      editItem.value.push(editOption.text);
    } else {
      editItem.value.splice(index, 1);
    }
    setData(newData);
  }

  const dropDownClasses = classNames({
    "location-selection__drop-down": true,
    "location-selection__drop-down-checked": checked,
  });

  return (
    <div className="location-selection__container">
      <div className="location-selection__header">
        <p className="location-selection__header-title">Подбор заведения</p>
        <div className="location-selection__header-check-frame">
          <p className="location-selection__header-check-frame-text">
            Искать по названию
          </p>
          <CheckInput
            checked={checked}
            action={(value: boolean) => setchecked(value)}
          />
        </div>
      </div>
      <div className={dropDownClasses}>
        {!checked ? (
          data.map((item: IMultiSelectDataItem) => {
            return (
              <MultiSelect
                key={item.id}
                value={item.value}
                open={openId === item.id}
                setOpen={() => setOpenId(openId === item.id ? null : item.id)}
                checkboxAction={(option: IOption) => changeData(item, option)}
                title={item.title}
                placeholder={item.placeholder}
                options={item.options}
                size={item.size}
              />
            );
          })
        ) : (
          <Input
            value={searchValue}
            placeholder={"Введите название заведения"}
            icon={<SearchIcon />}
            changeValue={(value: string) => setSearchValue(value)}
          />
        )}
        <Button
          size="Small"
          type="Secondary"
          icon={<FilterIcon />}
          clickEvent={() => setFilterOpen(true)}
        />
        <Button
          size="Small"
          type="Primery"
          icon={<SearchIcon />}
          clickEvent={() => console.log("search")}
        />
      </div>
      {/*<Filter open={filterOpen} onClose={() => setFilterOpen(false)} />*/}
    </div>
  );
}
