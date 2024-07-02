import styled from 'styled-components';
import {IRange, IRangeOptionsCount} from "../../interface";
import DropDown from "../../../minorComponents/dropDown/dropDown";
import {useEffect, useState} from "react";
import {IOption} from "../../../minorComponents/dropDown/interface";
import {ReactComponent as DashIcon} from "../../../../assets/filter/dash.svg";
import RangeInput from "../../../minorComponents/rangeInput/rangeInput";
import {IRangeInputValue} from "../../../minorComponents/rangeInput/interface";

const Frame = styled.div<{}>`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

const DropDownFrame = styled.div<{}>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;

    svg {
        min-width: 24px;
    }
`

function Range({min, max, unit, options = [],optionsCount=[], type}: IRange) {
    const [minCurrent, setMinCurrent] = useState<IOption>({value: min.toString(), text: `${min + " " + unit}`});
    const [maxCurrent, setMaxCurrent] = useState<IOption>({value: max.toString(), text: `${max + " " + unit}`});
    return (
        <Frame>
            {
                type === "Default" ?
                    <RangeInput min={Number(minCurrent.value)} max={Number(maxCurrent.value)} options={options}
                                type={"Default"}
                                value={[Number(minCurrent.value), Number(maxCurrent.value)]}
                                changeValue={(value: IRangeInputValue): void => {
                                    setMinCurrent({value: value.min.toString(), text: `${value.min + " " + unit}`});
                                    setMaxCurrent({value: value.max.toString(), text: `${value.max + " " + unit}`});
                                }}/>
                    : <RangeInput min={Number(minCurrent.value)} max={Number(maxCurrent.value)}
                                  optionsCount={optionsCount}
                                  options={optionsCount.map((item:IRangeOptionsCount)=>item.value)}
                                  type={"Bar"}
                                  value={[Number(minCurrent.value), Number(maxCurrent.value)]}
                                  changeValue={(value: IRangeInputValue): void => {
                                      setMinCurrent({value: value.min.toString(), text: `${value.min + " " + unit}`});
                                      setMaxCurrent({value: value.max.toString(), text: `${value.max + " " + unit}`});
                                  }}/>
            }
            <DropDownFrame>
                <DropDown selectItem={(value: IOption) => setMinCurrent(value)} title={"Минимум"}
                          options={options.map((item: number) => {
                              return {value: item.toString(), text: `${item + " " + unit}`}
                          })} value={minCurrent} size={"Small"}/>
                <DashIcon/>
                <DropDown selectItem={(value: IOption) => setMaxCurrent(value)} title={"Максимум"}
                          options={options.filter((item: number) => Number(item) >= Number(minCurrent.value)).map((item: number) => {
                              return {value: item.toString(), text: `${item + " " + unit}`}
                          })}
                          value={maxCurrent} size={"Small"}/>
            </DropDownFrame>
        </Frame>
    );
}

export default Range;