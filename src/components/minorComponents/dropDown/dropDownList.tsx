import styled from 'styled-components';
import {IDropDownList,IOption,IDropDownListItem,Isize} from "./interface"


const Frame = styled.div<{size:Isize}>`
    position:absolute;
    z-index:10;
    top:${({ size }) => size === "Big" ? "80px" : "66px"};
    left:0;
    width: 100%;
    border-radius: 16px;
    background: #111012;
    padding:8px;
    max-height: 320px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0px;
    }
`

const ItemFrame = styled.div`
    padding:10px;
    height: 40px;
    display: flex;
    align-items:center;
    gap:8px;
    color: var(--text-primary);
    font-size: 17px;
    letter-spacing: 0.17px;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;
`

function DropDownItem({option,selectItem}:IDropDownListItem) {
    return (
      <ItemFrame onClick={()=>selectItem(option)}>
        {option.text}
      </ItemFrame>
    );
  }

function DropDownList({options,size,selectItem}:IDropDownList) {
  return (
    <Frame size={size}>
        {
            options.map((item:IOption)=>{
                return <DropDownItem option={item} selectItem={selectItem}/>
            })
        }
    </Frame>
  );
}

export default DropDownList;