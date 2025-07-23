'use client';

import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }:
    { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
    
    return (
        <div className={`
            text-white py-1 px-2 rounded-lg flex justify-center
            ${completed ? 'bg-red-800' : (days === 0 && hours < 10) 
                ? 'bg-red-900' : 'bg-amber-900'}
        `}>
            {completed ? (
                <span>Auction finished</span>
            ) : (
                <span suppressHydrationWarning={true}>
                    {days}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
            )}
        </div>
    )
};

type Props = {
    auctionEnd: string;
}

export default function CountdownTimer({auctionEnd}: Props) {
    return (
        <div>
            <Countdown date={auctionEnd} renderer={renderer} />
        </div>
    )
}