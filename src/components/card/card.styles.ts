import styled from "styled-components";


export const CardListContainer = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap:12px
`

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:12px;
    &>.card__name{
        display: flex;
        flex-direction: column;
        gap:3px;
        &>.card__name-subtitle{
            color:var(--text-placeholder);
            font-size: 11px;
            font-weight: 600;
            line-height: 13px;

        }
        &>.card__name-title{
            color:var(--text-primary);
            font-size: 19px;
            font-weight: 700;
            line-height: 23px;
            letter-spacing: 0.01em;

        }
    }
`
export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
`

export const CardPhotoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 190px;
    &>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
`
export const CardPhotoHeaderContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    gap:12px;
    padding: 12px;
`

export const CardTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:8px 6px;
`

export const CardTagItem = styled.div<{background:string,shadow:string}>`
    background: ${({ background }) => background};
    box-shadow: ${({ shadow }) => shadow};
    padding: 2px 4px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    gap:2px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    color:var(--text-primary)
`

export const CardInfoRowContainer = styled.div`
    display: flex;
    gap:4px;
    align-items: center;
`


