import styled from 'styled-components';
import {IFilterWidgetsWraper} from "../interface"
import {ReactComponent as Chevron} from "../../../assets/minorComponents/multiSelect/chevron.svg"
import {useState} from "react";

const Frame = styled.div<{}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 24px;

    &:not(:last-child) {
        border-bottom: 1px solid var(--background-floor1);
    }

    p {
        color: var(--text-primary);
        font-size: 19px;
        letter-spacing: 0.19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`


function FilterWidgetsWraper({header, children, hasHide}: IFilterWidgetsWraper) {
    const [isHide, setIsHide] = useState<boolean>(false)
    return (
        <Frame>
            <p>
                {header}
                {hasHide &&
                    <Chevron style={{transform: isHide ? "rotate(180deg)" : "rotate(0deg)", transition: "0.35s"}}
                             onClick={() => setIsHide(!isHide)}/>}
            </p>
            {
                !isHide &&
                children
            }
        </Frame>
    );
}

export default FilterWidgetsWraper;