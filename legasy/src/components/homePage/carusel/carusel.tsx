import styled from 'styled-components';
import CaruselItem from "./caruselItem"
import caruselData from './caruselData';
import {ICaruselItem} from "./interface"
import {ReactComponent as ArrowIcon} from "../../../assets/homePage/carusel/arrow.svg"
import { useEffect, useRef, useState } from 'react';

const Frame = styled.div`
  position:relative;
  width: 100%;
  display: flex;
  height: 87px;
`

const ArrowFrame = styled.div<{visable:boolean}>`
  height: 100%;
  position:absolute;
  display: flex;
  align-items:center;
  transition:0.35s;
  opacity:${({ visable }) => visable ? "1" : "0"};
`

const ArrowIconRotate = styled(ArrowIcon)`
  transform:rotate(180deg);
`

const ListItems = styled.div`
  width:100%;
  height: 100%;
  overflow:auto;
  display: flex;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 0px;
  }
`


function Carusel() {
  const frameList = useRef<HTMLDivElement | null>(null);
  const [leftVisable,setLeftVisable] = useState<boolean>(false)
  const [rightVisable,setRightVisable] = useState<boolean>(false)
  // Пофиксить 
  function checkVisable(value:number){
    if(frameList.current){
      value <= 0 ? setLeftVisable(false) : setLeftVisable(true)
      frameList.current.clientWidth < frameList.current.scrollWidth - value - 1 
      ? setRightVisable(true) 
      : setRightVisable(false)
    }
  }
  function wheelFunction(event:any){
    if(frameList.current){
      const scrollLeft = frameList.current.scrollLeft += event.deltaY > 0 ? 420 : -420;
      checkVisable(scrollLeft)
    }
  }

  function wheelChange(value:number){
    if(frameList.current){
      const scrollLeft = frameList.current.scrollLeft += value;
      checkVisable(scrollLeft)
    }
  }

  useEffect(()=>{
    checkVisable(0)
  },[])

  return (
    <Frame onWheel={wheelFunction}> 
      <ArrowFrame visable = {leftVisable}>
        <ArrowIcon onClick={()=>wheelChange(-420)}/>
      </ArrowFrame>
      <ListItems ref={frameList}>
      {
        caruselData.map((item : ICaruselItem)=>{
          return(
            <CaruselItem icon={item.icon} text={item.text} key={item.text}/>
          )
        })
      }
      </ListItems>
      <ArrowFrame style={{right:"0px"}} visable = {rightVisable}>
        <ArrowIconRotate onClick={()=>wheelChange(420)}/>
      </ArrowFrame>
    </Frame>
  );
}

export default Carusel;