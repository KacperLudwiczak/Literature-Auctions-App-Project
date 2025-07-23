import AuctionCard from "@/app/auctions/AuctionCard";

async function getData() {
    const res = await fetch('http://localhost:6001/search')
    if (!res.ok) throw new Error("Fail")
    return res.json();
}

export default async function Listings() {
    const data = await getData();

    return (
        <div>{data && data.results.map((auction: any) => (
            <AuctionCard key={auction.id} auction={auction} />
        ))}</div>
    )
}