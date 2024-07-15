import styled from 'styled-components';
import {IInput, Itype} from "./interface"
import {type} from "node:os";

const Frame = styled.div<{type:Itype}>`
    width: 100%;
    display: flex;
    flex-direction: ${({type}) => type === "Default" ? "row" : "column"};
    height: ${({type}) => type === "Default" ? "70px" : "56px"};
    padding: ${({type}) => type === "Default" ? "16px 20px" : "6px 16px"};
    align-items: ${({type}) => type === "Default" ? "center;" : "flex-start"};
    border-radius: ${({type}) => type === "Default" ? "20px;;" : "16px"};
    gap:  ${({type}) => type === "Default" ? "8px;" : "6px"};
    background: var(--btn-background-secondary);
`
const Title = styled.div`
    color: var(--text-inputLabel);
    font-size: 13px;
    letter-spacing: 0.13px;
`


const InputFrame = styled.div<{type:Itype}>`
    max-width: 100%;
    display: flex;
    color: var(--text-primary);
    font-size: ${({type}) => type === "Default" ? "19px;" : "15px"};
    letter-spacing: 0.19px;
`
const InputField = styled.input<{type:Itype, value:string}>`
    background: transparent;
    overflow: hidden;
    color: var(--text-primary);
    font-size: ${({type}) => type === "Default" ? "19px;" : "15px"};
    letter-spacing: 0.19px;
    border: none;
    outline: none;

    &::placeholder {
        color: var(--text-placeholder);
    }
`


function Input({value, placeholder, icon, changeValue,type="Default", title,unit}: IInput) {
    return (
        <Frame type = {type}>
            {icon}
            {type === "Double" ? <Title>{title}</Title> : null}
            <InputFrame type = {type}>
                <InputField type = {type} placeholder={placeholder} value={value} onChange={(e) => changeValue(e.target.value)}/>
                {value ? unit : null}
            </InputFrame>
        </Frame>
    );
}

export default Input;