import {CardInfoRowContainer} from "./card.styles";
import {ReactNode} from "react";


function CardInfoRow({icon,children}:{icon:ReactNode,children:ReactNode}) {
    return (
        <CardInfoRowContainer>
            {icon}
            {children}
        </CardInfoRowContainer>
    );
}

export default CardInfoRow;