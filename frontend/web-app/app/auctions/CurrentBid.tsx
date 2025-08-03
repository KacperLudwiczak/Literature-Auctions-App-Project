type Props = {
    amount?: number;
    reservePrice: number;
}

export default function CurrentBid({amount, reservePrice}: Props) {
    const text = amount ? '$' + amount : 'No bids';
    const color = amount ? amount > reservePrice ? 'bg-amber-900' : 'bg-red-800' : 'bg-red-900';
    return (
        <div className={`text-white py-1 px-2 rounded-lg flex justify-center ${color}`}>
            {text}
        </div>
    );
}