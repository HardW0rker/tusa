import styled from 'styled-components';
import {IRangeTime} from "../../interface";
import DropDown from "../../../minorComponents/dropDown/dropDown";
import { useState} from "react";
import {IOption} from "../../../minorComponents/dropDown/interface";
import {ReactComponent as DashIcon} from "../../../../assets/filter/dash.svg";
import moment from 'moment';

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

function RangeTime({min, max}: IRangeTime) {
    const [minCurrent, setMinCurrent] = useState<IOption>({value: min, text: min});
    const [maxCurrent, setMaxCurrent] = useState<IOption>({value: max, text: max});

    function changeValueBar(value: string, type: 'max' | 'min'): void {
        if (type === 'min') {
            setMinCurrent({value: value, text: value});
        }
        if (type === 'max') {
            setMaxCurrent({value: value, text: value});
        }
    }
    // @ts-ignore
    const res:string = moment.utc(moment.duration(max) - moment.duration(min)).format('HH:mm')
    const steps:number = Number(res.split(":")[0])*2 + Math.trunc(Number(res.split(":")[1])/30)

    function addStap(steps:number){
        let res:string =min
        for (let i = 0; i < steps; i++) {
            // @ts-ignore
            res = moment.utc( moment.duration(res) + moment.duration("00:30")).format('HH:mm')
        }
        return res;
    }

    function comparison(item:string, value:string){
        console.log(item,value)
        return moment.duration(item) > moment.duration(value)
    }


    const options:Array<{value:string,text:string}> =Array(steps).fill(0).map((_, i: number) => {
        return {value:addStap(i), text:addStap(i)}
    })
    console.log(options)

    return (
        <Frame>
            <DropDownFrame>
                <DropDown selectItem={(value: IOption) => setMinCurrent(value)} title={"C"}
                          options={options}
                          value={minCurrent} size={"Small"}/>
                <DashIcon/>
                <DropDown selectItem={(value: IOption) => setMaxCurrent(value)} title={"До"}
                          options={options.filter((item: {value:string, text:string}) => comparison(item.value, minCurrent.value))}
                          value={maxCurrent} size={"Small"}/>
            </DropDownFrame>
        </Frame>
    );
}

export default RangeTime;