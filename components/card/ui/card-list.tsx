import { cardsMock } from "../lib/constans/cardMock";
import { ICard } from "../lib/types/card.types";
import { Card } from "./card";

export function CardList() {
  return (
    <div className="card-list__container">
      {cardsMock.map((card: ICard) => (
        <Card card={card} key={card.name} />
      ))}
    </div>
  );
}
