import { FaCircleUser } from "react-icons/fa6";

type Props = {
    username?: string;
};

export default function UserDropdownLabel({ username }: Props) {
    return (
        <span className="flex items-center gap-2 text-amber-900 text-xl font-semibold">
        <FaCircleUser className="text-2xl" />
        {username ?? ""}
        <svg
            className="w-3 h-3 text-amber-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
        >
            <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
            />
        </svg>
        </span>
    );
}
