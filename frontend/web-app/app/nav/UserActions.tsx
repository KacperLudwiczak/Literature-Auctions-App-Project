'use client'

import { Dropdown, DropdownDivider, DropdownItem, DropdownHeader } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiLogout, HiCog } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { FaCircleUser, FaBook  } from "react-icons/fa6";

type Props = {
    user: User
}

export default function UserActions({ user }: Props) {

    return (
        <Dropdown inline label={`Welcome ${user.username}`} className="cursor-pointer">
        <DropdownHeader>
            <span className="block text-sm">{user.name ?? ""}</span>
        </DropdownHeader>
        <DropdownDivider />
        <DropdownItem icon={FaCircleUser}>
            My Auctions
        </DropdownItem>
        <DropdownItem icon={FaTrophy}>
            Auctions won
        </DropdownItem>
        <DropdownItem icon={FaBook}>
            Sell my items
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