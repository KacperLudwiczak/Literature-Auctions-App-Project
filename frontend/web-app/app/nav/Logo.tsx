'use client';

import { useParamsStore } from "@/app/hooks/useParamsStore";
import { usePathname, useRouter } from "next/navigation";
import { FaBookBookmark } from "react-icons/fa6";

export default function Logo() {
    const router = useRouter();
    const pathname = usePathname();
    const reset = useParamsStore(state => state.reset);

    function handleReset() {
        if (pathname !== '/') router.push('/');
        reset();
    }

    return (
        <div onClick={handleReset}  className="cursor-pointer flex items-center gap-2 text-2xl font-semibold text-amber-900">
            <FaBookBookmark size={28} />
            <div>Literature Auctions</div>
        </div>
    )
}