import styled from 'styled-components';
import {IButton,Itype,Isize} from "./interface"


const Frame = styled.div<{type:Itype,size:Isize,disable:boolean | undefined}>`

    position:relative;
    display: flex;
    width:fit-content;
    align-items:center;
    gap:8px;
    border-radius:14px;
    cursor: ${({ disable }) => !disable ? "pointer" : null};
    padding:${({ size }) => size === "Big" ? "19px" : "16px"};
    background:${({ type,disable }) => !disable ? (type === "Primery" ? "var(--btn-background-primery)" : "var(--btn-background-secondary)") : "var(--btn-background-disable)"};
    box-shadow:${({ type,disable }) => type === "Primery" && !disable ? "0px 4px 19.8px 0px rgba(125, 55, 207, 0.17), 0px -2px 5.5px 0px rgba(90, 13, 181, 0.30), 1px 4px 4.2px 0px rgba(118, 47, 202, 0.13)" : null}; 
    transition: ${({ type }) => type === "Primery" ? null : "background 0.35s"};

    &::before {
        border-radius:14px;
        position: absolute;
        content: "";
        inset: 0;
        background-image: var(--btn-background-primery-hover);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.35s;
    }
    &:hover::before{
        opacity: ${({ type,disable }) => !disable ? type === "Primery" ? "1" : null : null};
    }
    &:hover{
        background:${({ type,disable }) => !disable ? (type === "Primery" ? null : "var(--btn-background-secondary-hover)") : "var(--btn-background-disable)"};
    }
    p{
        position:relative;
        z-index: 2;
        color: ${({ disable }) => !disable ? "var(--text-primary)" : "var(--text-disable)"};
        font-size: 17px;
        letter-spacing: 0.17px;
        line-height: 24px;
    }
    svg{
        position:relative;
        z-index: 2;
        path{
            fill:${({ disable }) => !disable ? "var(--text-primary)" : "var(--text-disable)"}
        }
    }

`

function Button({type, size, text, icon,disable,clickEvent }:IButton) {
  return (
    <Frame type = {type} size = {size} disable={disable} onClick={clickEvent}>
        {icon ? icon : null}
        {text ? <p>{text}</p> : null}
    </Frame>
  );
}

export default Button;