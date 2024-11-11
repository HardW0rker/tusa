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
const Frame = styled.div<{ open: boolean }>`
    max-width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 16px;
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
    min-height: 43px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    .header {
        color: var(--text-primary);
        font-size: 13px;
        letter-spacing: 0.13px;
    }
`
const ValueList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`
const Input = styled.input`
    flex: 1 1;
    line-height: 21px;
    min-width: 300px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background: none;
    outline: none;
    border: none;
    color: var(--text-primary);
`


function LocationSelect() {
    const [open, setOpen] = useState<boolean>(false);
    const [values, setValues] = useState<Array<ILocationSelectValue>>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [top, setTop] = useState<number>(43);
    const blockRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (blockRef?.current && !blockRef.current?.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, []);

    function deleteItem(index: number) {
        const newValue: ILocationSelectValue[] = [...values]
        newValue.splice(index, 1);
        setValues(newValue)
    }

    function handleFrameClick() {
        if (inputRef) {
            inputRef?.current?.focus()
        }
        setOpen(true)
    }

    function getFilterOptions(){
        return options.filter((option)=>option.text.toLowerCase().includes(searchValue.toLowerCase()));
    }
    const filterOptions = getFilterOptions()

    useEffect(() => {
        if(frameRef.current?.clientHeight){
            setTop(frameRef.current?.clientHeight)
        }
    }, [frameRef.current?.clientHeight]);
    return (
        <Block ref={blockRef}>
            <Frame open={open} onClick={handleFrameClick} ref={frameRef}>
                <Content>
                    <div className="header">{"Укажите станции метро"}</div>
                    <ValueList>
                        {
                            values.map((item: ILocationSelectValue, index) => {
                                return <LocationSelectValueItem
                                    color={item.color}
                                    text={item.text}
                                    key={index}
                                    index={index}
                                    deleteItem={deleteItem}/>
                            })
                        }
                        <Input value={searchValue} ref={inputRef} onChange={e => setSearchValue(e.target.value)}/>
                    </ValueList>
                </Content>
                <Search/>
            </Frame>
            {
                open ?
                    <LocationSelectList options={filterOptions} top={top}
                                        selectItem={(val: ILocationSelectValue) => {
                                            const newValue = [...values]
                                            newValue.push(val);
                                            setValues(newValue)
                                        }}/>
                    : null
            }
        </Block>
    );
}

export default LocationSelect;