import styled from 'styled-components';
import {
    ILocationSelectValueItem
} from "../../interface";
import {ReactComponent as CloseIcon} from "../../../../assets/icons/close.svg";
import {MouseEventHandler} from "react";


const Frame = styled.div`
    position:absolute;
    max-width: 456px;
    z-index:10;
    top:66px;
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
    padding:2.5px 4px;
    width: fit-content;
    display: flex;
    align-items:center;
    gap:4px;
    color: var(--text-primary);
    cursor: pointer;
    border-radius: 4px;
    -webkit-touch-callout: none; 
    -webkit-user-select: none;  
    -moz-user-select: none;      
    -ms-user-select: none;       
    user-select: none;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    background: rgba(255, 255, 255, 0.04);
    text-decoration-skip-ink: none;

`
const Indicator = styled.div<{color:string}>`
    min-width: 6px;
    min-height: 6px;
    border-radius: 6px;
    background:${({ color }) => color};
`

function LocationSelectValueItem({color,text,index,deleteItem}:ILocationSelectValueItem) {
    function handleDeleteItem(e:any){
        e.stopPropagation()
        deleteItem(index)
    }
    return (
        <ItemFrame>
            <Indicator color={color}/>
            {text}
            <CloseIcon onClick={handleDeleteItem}/>
        </ItemFrame>
    );
}

export default LocationSelectValueItem;