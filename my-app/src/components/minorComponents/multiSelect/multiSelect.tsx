import styled from 'styled-components';
import {IMultiSelect,Isize} from "./interface"
import { useEffect } from 'react';
import {ReactComponent as Chevron} from "../../../assets/minorComponents/multiSelect/chevron.svg"
import MultiSelectList from "./multiSelectList"

const Block = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
`
const Frame = styled.div<{size:Isize,open:boolean}>`
    max-width: 100%;
    overflow:hidden;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:${({ size }) => size === "Big" ? "12.5px 20px" : "7.5px 16px"};
    background:var(--btn-background-secondary);
    border-radius:${({ size }) => size === "Big" ? "20px" : "16px"};
    border:${({ open }) => open  ? "1.5px solid var(--primery);" : "1.5px solid transparent"};
    transition:0.35s;
    cursor: pointer;
    &:hover{
        background:var(--btn-background-secondary-hover);
    }
`
const TextFrame = styled.div<{size:Isize,value:boolean}>`
    display: flex;
    flex-direction:column;
    gap:${({ size }) => size === "Big" ? "7px" : "6px"};
    flex: 1 1;
    max-width:100%;
    p{
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap;
    }
    .title{
        color: var(--text-primary);
        font-size: 13px;
        letter-spacing: 0.13px;
    }
    .subtitle{
        color:${({ value }) => value ? "var(--text-primary)" : "var(--text-placeholder)"};
        font-size:${({ size }) => size === "Big" ? "17px" : "15px"};
        letter-spacing: 0.15px;
    }
`

function MultiSelect({open,value,setOpen,chekboxAction,title,placeholder,options,size = "Big"}:IMultiSelect) {
    useEffect(()=>{

    },[options])
    console.log( value.map((item:string) =>item))
  return (
    <Block>
        <Frame size={size} open={open} onClick={()=>setOpen()}>
            <TextFrame size={size} value={value.length !== 0}>
                <p className="title">{title}</p>
                <p className="subtitle">{value.length ? value.map((item:string,index:number) => index !== 0 ? ","+ item : item): placeholder}</p>
            </TextFrame>
            <Chevron style={{transform:open ? "rotate(180deg)" : "rotate(0deg)", transition:"0.35s"}}/>
        </Frame>
        {
            open ? 
            <MultiSelectList options = {options} size={size} chekboxAction={chekboxAction}/>
            :null
        }
    </Block>
  );
}

export default MultiSelect;