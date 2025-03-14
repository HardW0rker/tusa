import styled from 'styled-components';
import {IRange, IRangeOptionsCount} from "../../interface";
import DropDown from "../../../minorComponents/dropDown/dropDown";
import {useState} from "react";
import {IOption} from "../../../minorComponents/dropDown/interface";
import {ReactComponent as DashIcon} from "../../../../assets/filter/dash.svg";
import RangeInput from "../../../minorComponents/rangeInput/rangeInput";
import {IRangeInputValue} from "../../../minorComponents/rangeInput/interface";
import Input from "../../../minorComponents/input/input";

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

function Range({min, max, unit, options = [], optionsCount = [], type}: IRange) {
    const [minCurrent, setMinCurrent] = useState<IOption>({value: min.toString(), text: `${min + " " + unit}`});
    const [maxCurrent, setMaxCurrent] = useState<IOption>({value: max.toString(), text: `${max + " " + unit}`});

    function changeValueBar(value: string, type: 'max' | 'min'): void {
        if (type === 'min') {
            setMinCurrent({value: value, text: `${value + " " + unit}`});
        }
        if (type === 'max') {
            setMaxCurrent({value: value, text: `${value + " " + unit}`});
        }

    }

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
                                  options={optionsCount.map((item: IRangeOptionsCount) => item.value)}
                                  type={"Bar"}
                                  value={[Number(minCurrent.value), Number(maxCurrent.value)]}
                                  changeValue={(value: IRangeInputValue): void => {
                                      setMinCurrent({value: value.min.toString(), text: `${value.min + " " + unit}`});
                                      setMaxCurrent({value: value.max.toString(), text: `${value.max + " " + unit}`});
                                  }}/>
            }
            <DropDownFrame>
                {

                    type === "Default" ?
                        <>
                            <Input value={minCurrent.value}
                                   type={"Double"}
                                   placeholder={'от ' + min}
                                   title={"Минимум"}
                                   changeValue={(value: string) => changeValueBar(value, "min")}/>
                            <DashIcon/>
                            <Input value={maxCurrent.value} type={"Double"} placeholder={'до ' + max}
                                   title={"Максимум"}
                                   changeValue={(value: string) => changeValueBar(value, "max")}/>

                        </>
                        :
                        <>
                            <Input value={minCurrent.value}
                                   type={"Double"}
                                   placeholder={'от ' + min}
                                   title={"Минимум"}
                                   changeValue={(value: string) => changeValueBar(value, "min")}/>
                            <DashIcon/>
                            <Input value={maxCurrent.value} type={"Double"} placeholder={'до ' + max}
                                   title={"Максимум"}
                                   changeValue={(value: string) => changeValueBar(value, "max")}/>
                        </>
                }
            </DropDownFrame>
        </Frame>
    );
}

export default Range;