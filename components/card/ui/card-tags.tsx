import { TTags } from "../lib/types/card.types";
import { ReactNode } from "react";
import classNames from "classnames";

export function CardTags({ tags }: { tags: TTags[] }) {
  function getTagParams(tag: TTags): string {
    switch (tag) {
      case "danceFloor":
        return "танспол";

      case "best":
        return "лучшие";

      case "rap":
        return "реп музыка";
    }
  }

  function getTagInCode(tag: TTags): ReactNode {
    const tagClasses: string = classNames({
      "card-tags__item": true,
      "card-tags__item-dance-floor": tag === "danceFloor",
      "card-tags__item-best": tag === "best",
      "card-tags__item-rap": tag === "rap",
    });
    return (
      <div className={tagClasses}>
        {/*<TagIcon />*/}
        {getTagParams(tag)}
      </div>
    );
  }

  return (
    <div className="card-tags__container">
      {tags.map((tag: TTags) => getTagInCode(tag))}
    </div>
  );
}
