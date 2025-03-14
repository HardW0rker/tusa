import styled from 'styled-components';
import {IChip, IChips} from "../../interface";
import ChipItem from "./ChipItem";

const Frame = styled.div<{}>`
    display: flex;
    gap:8px;
    flex-wrap: wrap;
`

function Chips({list,size = "Big"}: IChips){
    return (
        <Frame>
            {
                list.map((item:IChip)=>{
                    return(
                        <ChipItem text={item.text} icon={item.icon} active={item.active} size={size}/>
                    )
                })
            }
        </Frame>
    );
}

export default Chips;