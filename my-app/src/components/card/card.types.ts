
export interface ICardComponent {
    card:ICard
}
export interface ICard {
    photo: string,
    name: string,
    type: string,
    underground: IUnderground[],
    price: IPrice,
    public:IPublic,
    tags:TTags[]
}
export type TTags = 'danceFloor' | 'best' |'rap'
export interface IUnderground {
    color: string,
    name: string
}

export interface IPrice {
    indexPrice: number,
    count: number
}
export interface IPublic {
    min: number,
    max: number
}