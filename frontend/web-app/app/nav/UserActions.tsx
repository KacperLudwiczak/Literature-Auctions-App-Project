'use client'

import { Dropdown, DropdownDivider, DropdownItem, DropdownHeader } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HiLogout, HiCog } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { FaBook  } from "react-icons/fa6";
import { MdMonetizationOn } from "react-icons/md";
import UserDropdownLabel from "@/app/nav/UserDropdownLabel";
import { useParamsStore } from "@/app/hooks/useParamsStore";

type Props = {
    user: User
}

export default function UserActions({ user }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const setParams = useParamsStore(state => state.setParams);

    function setWinner() {
        setParams({winner: user.username, seller: undefined});
        if (pathname !== '/') router.push('/');
    }

    function setSeller() {
        setParams({seller: user.username, winner: undefined});
        if (pathname !== '/') router.push('/');
    }

    return (
        <Dropdown inline label={<UserDropdownLabel username={user.username}/>} className="cursor-pointer" arrowIcon={false}>
        <DropdownHeader>
            <span className="block text-sm">{user.name ?? ""}</span>
        </DropdownHeader>
        <DropdownDivider />
        <DropdownItem icon={FaBook} onClick={setSeller}>
            My Auctions
        </DropdownItem>
        <DropdownItem icon={FaTrophy} onClick={setWinner}>
            Auctions won
        </DropdownItem>
        <DropdownItem icon={MdMonetizationOn}>            
            <Link href='/auctions/create'>
                Sell my items
            </Link>
        </DropdownItem>
        <DropdownItem icon={HiCog}>
            <Link href='/session'>
            Session (Dev only)
            </Link>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={HiLogout} onClick={() => signOut({redirectTo: '/'})}>
            Sign out
        </DropdownItem>
        </Dropdown>
    )
}