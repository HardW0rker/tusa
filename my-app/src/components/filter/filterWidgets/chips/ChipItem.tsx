import styled from 'styled-components';
import {IChip, TChipSize} from "../../interface"
const Frame = styled.div<{active:boolean,size:TChipSize}>`
    display: flex;
    padding: ${({ size }) => size === "Big" ? "12px" : "8px 16px;"};
    justify-content: center;
    gap: 6px;
    border-radius: 12px;
    background:${({ active }) => active ? "var(--primery)" : "var(--background-floor1)"};
    cursor: pointer;
    svg{
        // fill:color:${({ active }) => active ? "red" : "var(--icon-secondary)"};
    }
    p{
        color:${({ active }) => active ? "var(--text-primary)" : "var(--text-secondary)"};
        font-size: 13px;
        line-height: 24px;
        letter-spacing: 0.13px;
    }
`

function ChipItem({text,icon,active,size}: IChip){
    return (
        <Frame active={active} size={size}>
            {icon}
            <p>{text}</p>
        </Frame>
    );
}

export default ChipItem;