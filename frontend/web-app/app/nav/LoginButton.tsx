'use client';

import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import { buttonClass } from "@/lib/styles";

export default function LoginButton() {
    
    return (
        <Button outline className={buttonClass} onClick={() => signIn('id-server', {redirectTo: '/'}, {prompt: 'login'})}>
            Login
        </Button>
    )
}