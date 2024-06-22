import styled from 'styled-components';
import BanersItem from './banersItem';
const Frame = styled.div`
    width: 100%;
    display: flex;
    gap:24px;
    height: 270px;
`
function Baners() {
  return (
    <Frame>
        <BanersItem/>
        <BanersItem/>
    </Frame>
  );
}

export default Baners;