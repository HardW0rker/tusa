import styled from 'styled-components';

const Frame = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const TitleText = styled.p`
    color: var(--text-primary);
    text-align: center;
    font-size: 43px;
    font-weight: 800;
    letter-spacing: 1.29px;
`
const SubTitleText = styled.p`
    color: var(--Text-text-secondary, rgba(255, 255, 255, 0.65));
    text-align: center;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.26px;
`

function Title() {
  return (
    <Frame>
        <TitleText>Поможем выбрать развлечение на вечер</TitleText>
        <SubTitleText>Ищи место, которое подходит именно тебе</SubTitleText>
    </Frame>
  );    
}

export default Title;