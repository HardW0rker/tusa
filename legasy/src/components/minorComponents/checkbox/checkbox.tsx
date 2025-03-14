import styled from 'styled-components';
import {ICheckbox} from "./interface"
import {ReactComponent as Active} from "../../../assets/minorComponents/checkbox/active.svg"

const Frame = styled.div<{checked:boolean}>`
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: ${({ checked }) => checked ? "2px solid var(--primery)" : "2px solid var(--text-secondary)"};
    background: ${({ checked }) => checked ? "var(--primery)" : null};
`

function Checkbox({checked,action}:ICheckbox) {
  return (
    <Frame checked = {checked} onClick={()=>action(!checked)}>
        {checked ? <Active/> : null}
    </Frame>
  );
}

export default Checkbox;