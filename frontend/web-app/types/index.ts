export type PagedResult<T> = {
    results: T[];
    pageCount: number;
    totalCount: number;
}

export type Auction = {
    reservePrice: number
    seller: string
    winner?: string
    soldAmount?: number
    currentHighBid?: number
    createdAt: string
    updatedAt: string
    auctionEnd: string
    status: string
    name: string
    year: number
    genre: string
    imageUrl: string
    id: string
}