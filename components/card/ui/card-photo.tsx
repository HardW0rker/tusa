import { CardTags } from "./card-tags";
import { TTags } from "../lib/types/card.types";

export function CardPhoto({ photo, tags }: { photo: string; tags: TTags[] }) {
  return (
    <div className="card-photo__conatiner">
      <div className="card-photo__header">
        <CardTags tags={tags}></CardTags>
        {/*<LikeDefaultIcon />*/}
      </div>
      <img src={photo} alt={photo} />
    </div>
  );
}
