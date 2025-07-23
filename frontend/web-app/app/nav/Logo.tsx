'use client';

import { useParamsStore } from "@/app/hooks/useParamsStore";
import { FaBookBookmark } from "react-icons/fa6";

export default function Logo() {
    const reset = useParamsStore(state => state.reset);

    return (
        <div onClick={reset}  className="cursor-pointer flex items-center gap-2 text-2xl font-semibold text-amber-900">
            <FaBookBookmark size={28} />
            <div>Literature Auctions</div>
        </div>
    )
}