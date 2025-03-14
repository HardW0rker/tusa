import styled from 'styled-components';
import {IBanersItem} from "./interfase"
const Frame = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: #26232A;
`
function BanersItem({img}:IBanersItem) {
  return (
    <Frame>
        {img}
    </Frame>
  );
}

export default BanersItem;