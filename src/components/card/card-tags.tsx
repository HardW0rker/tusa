import {TTags} from "./card.types";
import {CardTagItem, CardTagsContainer} from "./card.styles";
import {ReactNode} from "react";
import {ReactComponent as TagIcon} from "../../assets/icons/tag.svg"

interface ITagParams {
    background: string,
    text: string,
    shadow: string
}

function CardTags({tags}: { tags: TTags[] }) {

    function getTagParams(tag: TTags): ITagParams {
        switch (tag) {
            case "danceFloor":
                return {
                    shadow: "1px 4px 4.2px 0px rgba(202, 47, 47, 0.13), 0px -2px 5.5px 0px rgba(181, 13, 13, 0.3), 0px 4px 19.8px 0px rgba(207, 55, 55, 0.21)",
                    background: "linear-gradient(55.22deg, #F11010 16.94%, rgba(252, 129, 129, 0.9) 85.02%)",
                    text: "танспол"
                }
            case "best":
                return {
                    shadow: "1px 4px 4.2px 0px rgba(143, 47, 202, 0.13),0px -2px 5.5px 0px rgba(178, 13, 181, 0.3),0px 4px 19.8px 0px rgba(167, 55, 207, 0.21)",
                    background: "linear-gradient(55.22deg, #B710F1 16.94%, rgba(252, 129, 151, 0.9) 85.02%)",
                    text: "лучшие"
                }
            case "rap":
                return {
                    shadow: "1px 4px 4.2px 0px rgba(78, 202, 47, 0.13),0px -2px 5.5px 0px rgba(67, 181, 13, 0.3),0px 4px 19.8px 0px rgba(122, 207, 55, 0.21)",
                    background: "linear-gradient(60.31deg, #017E24 19.16%, rgba(161, 252, 129, 0.9) 78.42%)",
                    text: "реп музыка"
                }
        }
    }

    function getTagInCode(tag: TTags): ReactNode {
        const tagParams: ITagParams = getTagParams(tag)
        const {background, text, shadow}: ITagParams = tagParams;
        return (
            <CardTagItem background={background} shadow={shadow}>
                <TagIcon/>
                {text}
            </CardTagItem>
        )
    }

    return (
        <CardTagsContainer>
            {
                tags.map((tag: TTags) => getTagInCode(tag))
            }
        </CardTagsContainer>
    )
}

export default CardTags;