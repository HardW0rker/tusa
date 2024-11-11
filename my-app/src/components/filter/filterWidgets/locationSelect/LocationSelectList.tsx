import styled from 'styled-components';
import {ILocationSelectItem, ILocationSelectList, ILocationSelectValue} from "../../interface";


const Frame = styled.div<{top?:number}>`
    position:absolute;
    max-width: 456px;
    z-index:10;
    top:${({ top }) => top ? (top+8)+"px" : "66px"};
    left:0;
    width: 100%;
    border-radius: 16px;
    background: #111012;
    padding:8px;
    max-height: 175px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0;
    }
    &>p{
        padding:8px;
        font-size: 17px;
        letter-spacing: 0.17px;
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
const Indicator = styled.div<{color:string}>`
    min-width: 16px;
    min-height: 16px;
    border-radius: 32px;
    border:5px solid #343434;
    background:${({ color }) => color};
`

function LocationSelectItem({option,selectItem}:ILocationSelectItem) {
    return (
        <ItemFrame onClick={()=>selectItem(option)}>
            <Indicator color={option.color}/>
            {option.text}
        </ItemFrame>
    );
}

function LocationSelectList({options,selectItem,top}:ILocationSelectList) {
    return (
        <Frame top={top}>
            {
                options.length ?  options.map((item:ILocationSelectValue)=>{
                    return <LocationSelectItem option={item} selectItem={selectItem} key={item.text}/>
                })
                    : <p>Нет подходящих вариантов</p>
            }
        </Frame>
    );
}

export default LocationSelectList;