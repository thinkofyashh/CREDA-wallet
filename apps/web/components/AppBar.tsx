"use client"
import { Appbar } from "@repo/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation";

export const AppBar=()=>{
    const session=useSession();
    const router=useRouter();
    const pathname =usePathname()

    if(pathname=='/signin') return null;
    return <>
    <div className="shadow-md bg-white">
        <Appbar onSignin={signIn} onSignout={async()=>{
            await signOut({callbackUrl:'/signin'});
            
        }} user={session.data?.user}></Appbar>


    </div>
    </>
}