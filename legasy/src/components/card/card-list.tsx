import {cardsMock} from "./cardMock";
import {ICard} from "./card.types";
import Card from "./card";
import {CardListContainer} from "./card.styles";


function CardList() {
    return (
        <CardListContainer>
            {
                cardsMock.map((card: ICard) => (
                    <Card card={card} key={card.name}/>
                ))
            }
        </CardListContainer>
    );
}

export default CardList;