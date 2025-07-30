import CountdownTimer from "./CountdownTimer"
import CarImage from "./CarImage"
import { Auction } from "@/types"
import Link from "next/link"

type Props = {
    auction: Auction
}

export default function AuctionCard({ auction }: Props) {
    return (
        <Link href={`/auctions/details/${auction.id}`}>
            <div className="relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden">
                <CarImage imageUrl={auction.imageUrl} />
                <div className="absolute bottom-2 left-2">
                    <CountdownTimer auctionEnd={auction.auctionEnd}/>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg mt-1 ml-2">{auction.name}</h3>
                <p className="text-gray-600 text-base mt-1 ml-2">{auction.year}</p>
            </div>
        </Link>
    )
}