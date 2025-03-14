import { ICardComponent} from "./card.types";
import {CardContainer, CardInfoContainer} from "./card.styles";
import {ReactComponent as MoneyIcon} from "../../assets/icons/money.svg"
import {ReactComponent as UndergroundIcon} from "../../assets/icons/underground.svg"
import {ReactComponent as PublicIcon} from "../../assets/icons/public.svg"
import CardPhoto from "./card-photo";
import CardInfoRow from "./card-info-row";


function Card({card}:ICardComponent) {
    const {photo,tags,name,type} = card
    return (
        <CardContainer>
            <CardPhoto photo={photo} tags={tags}/>
            <div className="card__name">
                <p className="card__name-subtitle">{type}</p>
                <p className="card__name-title">{name}</p>
            </div>
            <CardInfoContainer>
                {/*<CardInfoRow icon={<UndergroundIcon/>}>*/}

                {/*</CardInfoRow>*/}
            </CardInfoContainer>
        </CardContainer>
    );
}

export default Card;