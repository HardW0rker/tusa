import styled from 'styled-components';
import {IDropDown, IOption, Isize} from "./interface"
import {ReactComponent as Chevron} from "../../../assets/minorComponents/multiSelect/chevron.svg"
import DropDownList from "./dropDownList"
import React, {useRef, useState, useEffect} from "react";

const Block = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`
const Frame = styled.div<{ size: Isize, open: boolean }>`
    max-width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({size}) => size === "Big" ? "12.5px 20px" : "7.5px 16px"};
    background: var(--btn-background-secondary);
    border-radius: ${({size}) => size === "Big" ? "20px" : "16px"};
    border: ${({open}) => open ? "1.5px solid var(--primery);" : "1.5px solid transparent"};
    transition: 0.35s;
    cursor: pointer;

    &:hover {
        background: var(--btn-background-secondary-hover);
    }
`
const TextFrame = styled.div<{ size: Isize }>`
    display: flex;
    flex-direction: column;
    gap: ${({size}) => size === "Big" ? "7px" : "6px"};
    flex: 1 1;
    max-width: 100%;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap;
    }

    .title {
        color: var(--text-primary);
        font-size: 13px;
        letter-spacing: 0.13px;
    }

    .subtitle {
        color: var(--text-primary)
    }
;
    font-size: ${({size}) => size === "Big" ? "17px" : "15px"};
    letter-spacing: 0.15px;
}
`

function DropDown({value, selectItem, title, options, size = "Big"}: IDropDown) {
    const [open, setOpen] = useState<boolean>(false);
    const blockRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            //@ts-ignore
            if (blockRef?.current && !blockRef.current?.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, []);

    return (
        <Block ref={blockRef}>
            <Frame size={size} open={open} onClick={() => setOpen(!open)}>
                <TextFrame size={size}>
                    <p className="title">{title}</p>
                    <p className="subtitle">{value.text}</p>
                </TextFrame>
                <Chevron style={{transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "0.35s"}}/>
            </Frame>
            {
                open ?
                    <DropDownList options={options} size={size} selectItem={(value:IOption) => {
                        selectItem(value);
                        setOpen(false);
                    }}/>
                    : null
            }
        </Block>
    );
}

export default DropDown;