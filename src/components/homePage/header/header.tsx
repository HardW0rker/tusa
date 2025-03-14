import styled from 'styled-components';
import {ReactComponent as Logo} from "../../../assets/homePage/header/logo.svg"
import {ReactComponent as User} from "../../../assets/homePage/header/user.svg"
import {ReactComponent as Like} from "../../../assets/homePage/header/like.svg"
import Button from '../../minorComponents/button/Button';

const Frame = styled.div`
    padding:24px 0px;
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
`

const BtnFrame = styled.div`
    display: flex;
    align-items:center;
    gap:16px;
`

function Header() {
  return (
    <Frame>
        <Logo/>
        <BtnFrame>
            <Button size='Small' type='Secondary' icon={<User/>} text='Владельцам'/>
            <Button size='Small' type='Secondary' icon={<Like/>}/>
        </BtnFrame>
    </Frame>
  );    
}

export default Header;