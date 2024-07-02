import styled from 'styled-components';
import {IFilterItemWraper} from "../interface"

const Frame = styled.div<{}>`
    display: flex;
    padding: 24px;
    flex-direction: column;
    border-radius: 40px;
    gap:24px;
    border: 1px solid var(--background-floor1);
`

function FilterItemWraper({children}:IFilterItemWraper) {
    return (
        <Frame>
            {children}
        </Frame>
    );
}

export default FilterItemWraper;