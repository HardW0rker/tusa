import styled from 'styled-components';
import {IRangeInput, TRangeType} from "./interface";
import * as noUiSlider from 'nouislider';
import {PipsMode} from 'nouislider';
import 'nouislider/dist/nouislider.css';
import Bar from "./Bar"

import React, {useEffect, useRef, useState} from "react";

const Frame = styled.div<{type:TRangeType}>`
    width: 100%;
    height: ${({ type }) => type === "Default" ? "46px" : "96px"};
    display: flex;
    flex-direction: column;
`
const InputRange = styled.div<{}>`
    width: 100%;
    height: 6px;
`

function RangeInput({min, max, options, changeValue,optionsCount=[], value, type}: IRangeInput) {
    const sliderRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [initSlider, setInitSlider] = useState<boolean>(false)
    useEffect(() => {
        if (sliderRef.current && initSlider) {
            //@ts-ignore
            sliderRef.current.noUiSlider.set([options.indexOf(value[0]), options.indexOf(value[1])]);
        }
    }, [value, initSlider])

    useEffect(() => {
        if (sliderRef.current && !initSlider) {
            noUiSlider.create(sliderRef.current, {
                start: [options.indexOf(min), options.indexOf(max)],
                step: 1,
                connect: [false, true, false],
                range: {
                    'min': 0,
                    'max': options.length - 1
                },
                pips: {mode: PipsMode.Steps}
            })
            //@ts-ignore
            sliderRef.current.noUiSlider.on('change', (values) => {
                const currentMin = options[Number(values[0])]
                const currentMax = options[Number(values[1])]
                changeValue({min: currentMin, max: currentMax})
            });

            setInitSlider(true);
        }
    }, [])

    return (
        <Frame type={type}>
            {
                type === "Bar" ?
                    <Bar optionsCount={optionsCount} value={value}/>
                    : null
            }
            <InputRange ref={sliderRef}/>
        </Frame>
    );
}

export default RangeInput;