import styled from 'styled-components';
import MultiSelect from "../../minorComponents/multiSelect/multiSelect"
import CheckInput from "../../minorComponents/checkInput/checkInput"
import Button from "../../minorComponents/button/Button"
import {ReactComponent as Filter} from "../../../assets/homePage/locationSelection/filter.svg"
import {ReactComponent as Search} from "../../../assets/homePage/locationSelection/search.svg"
import { useState } from 'react';
import {multiSelectData} from "./locationSelectionData"
import {IMultiSelectData,IMultiSelectDataItem} from "./interface"
import {IOption} from "../../minorComponents/multiSelect/interface"

const Frame = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    padding: 30px 32px;
    gap: 32px;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.07);
`
const Header = styled.div`
    display: flex;
    justify-content:space-between;
    p{
        color: var(--text-primary);
    }
    .title{
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.24px;
    }
`
const CheckFrame = styled.div`
    display: flex;
    align-items:center;
    gap:12px;
    .text{
        font-size: 17px;
        letter-spacing: 0.17px;
    }
`

const DropDownFrame = styled.div`
    max-width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 70px 70px;
    align-items:center;
    gap:16px;
`

function LocationSelection() {
const [checked,setchecked] = useState<boolean>(false);
const [data,setData] = useState<IMultiSelectData>(multiSelectData);
const [openId,setOpenId] = useState<number | null>(null);

function changeData(item: IMultiSelectDataItem, option:IOption){
    const newData = [...data];
    const editItem = newData.filter((dataItem : IMultiSelectDataItem) => dataItem.id === item.id)[0]
    const editOption = editItem.options.filter((optionsItem : IOption) => optionsItem.value === option.value)[0]
    editOption.checked = !editOption.checked
    let index = editItem.value.indexOf(editOption.value);
    if(index === -1){
        editItem.value.push(editOption.text)
    }
    else{
        editItem.value.splice(index, 1);
    }
    setData(newData)
}
  return (
    <Frame>
        <Header>
            <p className="title">Подбор заведения</p>
            <CheckFrame>
                <p className="text">Искать по названию</p>
                <CheckInput checked = {checked} action={(value:boolean)=>setchecked(value)}/>
            </CheckFrame>
        </Header>
        <DropDownFrame>
            {
                data.map((item:IMultiSelectDataItem)=>{
                    return <MultiSelect 
                        key={item.id}
                        value={item.value}
                        open = {openId === item.id}
                        setOpen ={()=>setOpenId(openId === item.id ? null : item.id)}
                        chekboxAction={(option:IOption)=>changeData(item,option)}
                        title ={item.title} 
                        placeholder={item.placeholder} 
                        options ={item.options} 
                        size={item.size}/>
                })
            }
            <Button size='Small' type='Secondary' icon={<Filter/>}/>
            <Button size='Small' type='Primery' icon={<Search/>}/>
        </DropDownFrame>
    </Frame>
  );
}

export default LocationSelection;