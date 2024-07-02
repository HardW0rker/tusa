import styled from 'styled-components';
import React, {useRef} from "react";
import {IFilterWraper} from "../interface";
import Button from "../../minorComponents/button/Button";
import {ReactComponent as TrashIcon} from "../../../assets/filter/wraperComponents/trash.svg"

const Warper = styled.div<{}>`
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.56);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
`
const Frame = styled.div<{}>`
    background: #252329;
    border-radius: 32px;
    width: 800px;
    height: 944px;
    display: flex;
    flex-direction: column;
`
const Header = styled.div<{}>`
    border-radius: 32px 32px 0 0;
    background: var(--white-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    gap: 12px;

    p {
        color: var(--text-primary);
        font-size: 19px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0.19px;
    }
`
const Content = styled.div<{}>`
    flex: 1 1;
    display: flex;
    padding: 16px 32px;
    flex-direction: column;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

`
const Footer = styled.div<{}>`
    border-radius: 0 0 32px 32px;
    background: var(--white-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    
`


function FilterWraper({onClose, children}: IFilterWraper) {
    const frameRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);
    return (
        <Warper onClick={(e) => {
            if (!frameRef.current?.contains(e.target as Node)) {
                onClose()
            }
        }}>
            <Frame ref={frameRef}>
                <Header>
                    <p>Фильтры</p>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    <Button type={"Secondary"} size={"Small"} text={"Очистить все"} icon={<TrashIcon/>}/>
                    <Button type={"Primery"} size={"Small"} text={"Показать 1000+ вариантов"}/>
                </Footer>
            </Frame>
        </Warper>
    )
        ;
}

export default FilterWraper;