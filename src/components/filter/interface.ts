import React from "react";
import LocationSelect from "./filterWidgets/locationSelect/LocationSelect";
import LocationSelectList from "./filterWidgets/locationSelect/LocationSelectList";
import {IOption} from "../minorComponents/dropDown/interface";

export interface IFilter {
    open:boolean,
    onClose:()=>void
}
export interface IFilterWraper {
    onClose:()=>void,
    children: React.ReactNode
}
export interface IFilterItemWraper {
    children: React.ReactNode
}

export interface IFilterWidgetsWraper {
    header:string,
    children: React.ReactNode
    hasHide?:boolean
}

export interface IChips {
    list:Array<IChip>,
    size:TChipSize,
}
export type TChipSize = "Small" | "Big";
export interface IChip {
    text:string,
    size:TChipSize,
    icon?:React.ReactNode,
    active:boolean,
}

export type TRangeType = "Bar" | "Default";
export interface IRange {
    min:number,
    max:number,
    type:TRangeType,
    unit:string,
    options?:Array<number>,
    optionsCount?:Array<IRangeOptionsCount>
}
export interface IRangeOptionsCount {
    value:number,
    count:number,
}

export interface IRangeTime {
    min:string,
    max:string,
}
export interface ILocationSelectValue {
    color:string,
    text:string,
}
export interface ILocationSelectList {
    top?:number,
    options:Array<ILocationSelectValue>,
    selectItem: (option: ILocationSelectValue) => void;
}
export interface ILocationSelectItem{
    option:ILocationSelectValue,
    selectItem: (option: ILocationSelectValue) => void;
}
export interface ILocationSelectValueItem{
    color:string,
    text:string,
    deleteItem:(value:number) => void;
    index:number
}


