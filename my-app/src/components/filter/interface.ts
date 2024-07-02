import React from "react";

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




