import { ICardComponent } from "../lib/types/card.types";
import { CardPhoto } from "./card-photo";
import "./card.styles.scss";

export function Card({ card }: ICardComponent) {
  const { photo, tags, name, type } = card;
  return (
    <div className="card__container">
      <CardPhoto photo={photo} tags={tags} />
      <div className="card__name">
        <p className="card__name-subtitle">{type}</p>
        <p className="card__name-title">{name}</p>
      </div>
      <div className="card__info-container">
        {/*<CardInfoRow icon={<UndergroundIcon/>}>*/}

        {/*</CardInfoRow>*/}
      </div>
    </div>
  );
}
