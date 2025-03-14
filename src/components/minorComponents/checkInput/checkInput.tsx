import styled from 'styled-components';
import {ICheckInput} from "./interface"

const Frame = styled.div<{checked:boolean}>`
    width: 45px;
    height: 25px;
    border-radius:12px;
    background:${({ checked }) => checked ? "var(--primery)" :"var(--check-false)"};
    padding:3px 4px;
    transition:0.5s;
`

const Pointer = styled.div<{checked:boolean}>`
    position:relative;
    left:${({ checked }) => checked ? "19px" : "0"};
    height: 19px;
    width: 19px;
    border-radius:19px;
    background:${({ checked }) => checked ? "#FFFFFF" : "#AEAFAF"};
    transition:0.5s;
`
function CheckInput({checked,action}:ICheckInput) {
  return (
    <Frame checked = {checked} onClick={()=>action(!checked)}>
        <Pointer checked = {checked}/>
    </Frame>
  );
}

export default CheckInput;