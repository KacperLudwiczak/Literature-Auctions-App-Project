import CountdownTimer from "./CountdownTimer"
import CarImage from "./CarImage"
import { Auction } from "@/types"

type Props = {
    auction: Auction
}

export default function AuctionCard({ auction }: Props) {
    return (
        <a href="#">
            <div className="relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden">
                <CarImage imageUrl={auction.imageUrl} />
                <div className="absolute bottom-2 left-2">
                    <CountdownTimer auctionEnd={auction.auctionEnd}/>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold text-lg mt-1 ml-2">{auction.name}</h3>
                <p className="text-amber-900 text-base mt-1 ml-2">{auction.year}</p>
            </div>
        </a>
    )
}