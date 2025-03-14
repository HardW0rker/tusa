import styled from "styled-components";
import {IBar} from "./interface";
import {IRangeOptionsCount} from "../../filter/interface";

const Frame = styled.div<{}>`
    display: flex;
    align-items: flex-end;
    height: 50px;
    gap: 1px;
`

const Element = styled.div<{ active: boolean, fraction: number }>`
    display: flex;
    width: 100%;
    height: ${({fraction}) => `${fraction * 40 + 10}px`};
    border-radius: 2px 2px 0 0;
    opacity: 0.59;
    background-color: ${({active}) => active ? "var(--primery)" : "var(--background-floor1)"}
`

function Bar({optionsCount, value}: IBar) {


    const maxCount: number = optionsCount.reduce((acc: number, val: IRangeOptionsCount): number => {
        return acc > val.count ? acc : val.count;
    }, 0);
    const minCount: number = optionsCount.reduce((acc: number, val: IRangeOptionsCount): number => {
        return acc < val.count ? acc : val.count;
    }, 0);
    const persent = (maxCount - minCount) / 100
    return (
        <Frame>
            {
                optionsCount.map((item: IRangeOptionsCount) => {
                    return (<Element key={item.value} active={item.value >= value[0] && item.value <= value[1]}
                                     fraction={item.count / persent /100}/>)
                })
            }
        </Frame>
    );
}

export default Bar;