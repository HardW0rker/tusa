import styled from 'styled-components';
import {IFilterWidgetsWraper} from "../interface"

const Frame = styled.div<{}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:20px;
    padding-bottom: 24px;
    &:not(:last-child){
        border-bottom: 1px solid var(--background-floor1);
    }
    p{
        color: var(--text-primary);
        font-size: 19px;
        letter-spacing: 0.19px;
    }
`

function FilterWidgetsWraper({header,children}:IFilterWidgetsWraper) {
    return (
        <Frame>
            <p>{header}</p>
            {children}
        </Frame>
    );
}

export default FilterWidgetsWraper;