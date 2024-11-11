import {CardPhotoContainer, CardPhotoHeaderContainer} from "./card.styles";
import {ReactComponent as LikeDefaultIcon} from "../../assets/icons/like-default.svg"
import CardTags from "./card-tags";
import {TTags} from "./card.types";

function CardPhoto({photo,tags}:{photo:string,tags:TTags[]}) {
    return (
        <CardPhotoContainer>
            <CardPhotoHeaderContainer>
                <CardTags tags={tags}></CardTags>
                <LikeDefaultIcon/>
            </CardPhotoHeaderContainer>
            <img src={photo} alt={photo}/>
        </CardPhotoContainer>
    );
}

export default CardPhoto;