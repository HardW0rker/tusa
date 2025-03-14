import { IRangeInput } from "../lib/types/rangeInput.types";
import * as noUiSlider from "nouislider";
import { PipsMode } from "nouislider";
import "nouislider/dist/nouislider.css";
import Bar from "./bar";
import "./rangeInput.scss";

import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";

function RangeInput({
  min,
  max,
  options,
  changeValue,
  optionsCount = [],
  value,
  type,
}: IRangeInput) {
  const sliderRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [initSlider, setInitSlider] = useState<boolean>(false);

  const getNearestValue = useCallback(
    (value: number): number => {
      if (options.indexOf(value) !== -1) {
        return options.indexOf(value);
      } else {
        return options.filter((item: number) => item < value).length;
      }
    },
    [options],
  );

  useEffect(() => {
    if (sliderRef.current && initSlider) {
      //@ts-ignore
      sliderRef.current.noUiSlider.set([
        getNearestValue(value[0]),
        getNearestValue(value[1]),
      ]);
    }
  }, [value, initSlider]);

  useEffect(() => {
    if (sliderRef.current && !initSlider) {
      noUiSlider.create(sliderRef.current, {
        start: [getNearestValue(min), getNearestValue(max)],
        step: 1,
        connect: [false, true, false],
        range: {
          min: 0,
          max: options.length - 1,
        },
        pips: { mode: PipsMode.Steps },
      });
      //@ts-ignore
      sliderRef.current.noUiSlider.on("change", (values) => {
        const currentMin = options[Number(values[0])];
        const currentMax = options[Number(values[1])];
        changeValue({ min: currentMin, max: currentMax });
      });

      setInitSlider(true);
    }
  }, [changeValue, getNearestValue, initSlider, max, min, options]);

  const rangeInputClasses = classNames({
    "range-input": true,
    "range-input-default": type === "Default",
  });
  return (
    <div className={rangeInputClasses}>
      {type === "Bar" ? (
        <Bar optionsCount={optionsCount} value={value} />
      ) : null}
      <div className={"range-input__range"} ref={sliderRef} />
    </div>
  );
}

export default RangeInput;
