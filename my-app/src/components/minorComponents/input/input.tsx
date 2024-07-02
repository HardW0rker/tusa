import styled from 'styled-components';
import {IInput} from "./interface"

const Frame = styled.div<{}>`
    width: 100%;
    display: flex;
    height: 70px;
    padding: 16px 20px;
    align-items: center;
    border-radius: 20px;
    gap: 8px;
    background: var(--btn-background-secondary);
`

const InputFrame = styled.input<{}>`
    flex: 1 1;
    background: transparent;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 19px;
    letter-spacing: 0.19px;
    border: none;
    outline: none;

    &::placeholder {
        color: var(--text-placeholder);
    }
`


function Input({value, placeholder, icon, changeValue}: IInput) {
    return (
        <Frame>
            {icon}
            <InputFrame placeholder={placeholder} value={value} onChange={(e) => changeValue(e.target.value)}/>
        </Frame>
    );
}

export default Input;