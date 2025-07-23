import { FaBookBookmark } from "react-icons/fa6";

export default function Logo() {
    return (
        <div className="cursor-pointer flex items-center gap-2 text-3xl font-semibold text-amber-900">
            <FaBookBookmark size={34} />
            <div>Literature Auctions</div>
        </div>
    )
}