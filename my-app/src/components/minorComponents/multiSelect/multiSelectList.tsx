import styled from 'styled-components';
import {IMultiSelectList,IOption,IMultiSelectListItem,Isize} from "./interface"
import Checkbox from '../checkbox/checkbox';

const Frame = styled.div<{size:Isize}>`
    position:absolute;
    z-index:10;
    top:${({ size }) => size === "Big" ? "80px" : "66px"};
    left:0;
    width: 100%;
    border-radius: 16px;
    background: #28232E;
    padding:8px;
`

const ItemFrame = styled.div`
    padding:10px;
    display: flex;
    align-items:center;
    gap:8px;
    color: var(--text-primary);
    font-size: 17px;
    letter-spacing: 0.17px;
`

function MultiSelectListItem({option,chekboxAction}:IMultiSelectListItem) {
    return (
      <ItemFrame onClick={()=>chekboxAction(option)}>
        <Checkbox checked={option.checked} action={(value)=>console.log(value)}/>
        {option.text}
      </ItemFrame>
    );
  }

function MultiSelectList({options,size,chekboxAction}:IMultiSelectList) {
  return (
    <Frame size={size}>
        {
            options.map((item:IOption)=>{
                return <MultiSelectListItem option={item} chekboxAction={chekboxAction}/>
            })
        }
    </Frame>
  );
}

export default MultiSelectList;