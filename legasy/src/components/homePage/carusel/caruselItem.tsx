import styled from 'styled-components';
import {ICaruselItem} from "./interface"

const Frame = styled.div`
  display: flex;
  min-width: 140px;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  p{
    color: rgba(235, 235, 235, 0.75);
    text-align: center;
    font-size: 17px;
    letter-spacing: 0.17px;
  }

`

function CaruselItem({text,icon}:ICaruselItem) {
  return (
    <Frame>
      {icon}
      <p>{text}</p>
    </Frame>
  );
}

export default CaruselItem;