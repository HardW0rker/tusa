import { IRangeOptionsCount } from "../../../../../legasy/src/components/filter/interface";

export type TRangeType = "Bar" | "Default";
export interface IRangeInput {
  min: number;
  max: number;
  type: TRangeType;
  options: Array<number>;
  optionsCount?: Array<IRangeOptionsCount>;
  changeValue: (value: IRangeInputValue) => void;
  value: [number, number];
}
export interface IRangeInputValue {
  min: number;
  max: number;
}

export interface IBar {
  optionsCount: Array<IRangeOptionsCount>;
  value: [number, number];
}
