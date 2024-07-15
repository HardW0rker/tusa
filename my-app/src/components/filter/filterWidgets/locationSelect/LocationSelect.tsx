import styled from 'styled-components';
import {ReactComponent as Search} from "../../../../assets/filter/search.svg";
import React, {useEffect, useRef, useState} from "react";
import {ILocationSelectValue} from "../../interface";
import LocationSelectList from "./LocationSelectList";
import {options} from "./data";
import LocationSelectValueItem from "./LocationSelectValueItem";


const Block = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`
const Frame = styled.div<{open: boolean }>`
    max-width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:7px 16px;
    background: var(--btn-background-secondary);
    border-radius: 16px;
    border: ${({open}) => open ? "1.5px solid var(--primery);" : "1.5px solid transparent"};
    transition: 0.35s;
    cursor: pointer;

    &:hover {
        background: var(--btn-background-secondary-hover);
    }
`
const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:6px;
    .header{
        color: var(--text-primary);
        font-size: 13px;
        letter-spacing: 0.13px;
    }
`
const ValueList = styled.div`
`


function LocationSelect(){
    const [open, setOpen] = useState<boolean>(false);
    const [values, setValues] = useState<Array<ILocationSelectValue>>([]);
    const blockRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const frameRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        console.log(frameRef.current?.clientHeight)
    }, [frameRef]);
    return (
        <Block ref={blockRef}>
            <Frame open={open} onClick={() => setOpen(!open)} ref={frameRef}>
                <Content>
                    <div className="header">{"Укажите станции метро"}</div>
                    <ValueList>
                        {
                            values.map((item:ILocationSelectValue)=>{
                                return <LocationSelectValueItem
                                    color={item.color}
                                    text={item.text}
                                    key={item.text}
                                    deleteItem={(val:ILocationSelectValue)=>console.log(val)}/>
                            })
                        }
                    </ValueList>
                </Content>
                <Search/>
            </Frame>
            {
                open ?
                    <LocationSelectList options={options} top={frameRef.current?.style.height} selectItem={(val:ILocationSelectValue)=>{
                        values.push(val);
                        console.log(values)
                        setValues(values)
                    }}/>
                    : null
            }
        </Block>
    );
}

export default LocationSelect;