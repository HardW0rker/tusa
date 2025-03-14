import classNames from "classnames";
import "./checkInput.scss";

export function CheckInput({
  checked,
  action,
}: {
  checked: boolean;
  action: (value: boolean) => void;
}) {
  const checkInputClasses: string = classNames({
    checkInput: true,
    "checkInput-checked": checked,
  });
  const checkInputPointerClasses: string = classNames({
    checkInput__pointer: true,
    "checkInput__pointer-checked": checked,
  });
  return (
    <button className={checkInputClasses} onClick={() => action(!checked)}>
      <div className={checkInputPointerClasses} />
    </button>
  );
}
