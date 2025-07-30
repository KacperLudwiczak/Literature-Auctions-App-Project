import { buttonClass } from "@/lib/styles";
import { Button } from "flowbite-react";
import Link from "next/link";

type Props = {
    id: string;
}

export default function EditButton({id}: Props) {
    return (
        <Button outline className={buttonClass}>
            <Link href={`/auctions/update/${id}`}>Update Auction</Link>
        </Button>
    )
}