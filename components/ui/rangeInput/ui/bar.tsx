import { IBar } from "../lib/types/rangeInput.types";
import classNames from "classnames";
import { IRangeOptionsCount } from "../../../../legasy/src/components/filter/interface";

function Bar({ optionsCount, value }: IBar) {
  const maxCount: number = optionsCount.reduce(
    (acc: number, val: IRangeOptionsCount): number => {
      return acc > val.count ? acc : val.count;
    },
    0,
  );
  const minCount: number = optionsCount.reduce(
    (acc: number, val: IRangeOptionsCount): number => {
      return acc < val.count ? acc : val.count;
    },
    0,
  );
  const persent = (maxCount - minCount) / 100;

  const elementClasses = (item: IRangeOptionsCount) => {
    return classNames({
      "range-input__bar-element": true,
      "range-input__bar-element-active":
        item.value >= value[0] && item.value <= value[1],
    });
  };
  return (
    <div className="range-input__bar">
      {optionsCount.map((item: IRangeOptionsCount) => {
        return (
          <div
            key={item.value}
            className={elementClasses(item)}
            style={{
              height: `${(item.count / persent / 100) * 40 + 10}px`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Bar;
