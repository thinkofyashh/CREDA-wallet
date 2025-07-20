import { getServerSession } from "next-auth";

import { prisma } from "@repo/db";
import { NextResponse } from "next/server";
import { authConfig } from "../../../lib/auth";


export async function GET(){
    const session =await getServerSession(authConfig)
    if(!session || !session?.user?.id){
        return NextResponse.json({
            message: "You are not logged in",
        })
    }

    const userID=Number(session.user.id) 

   const alltcx= await prisma.p2ptransfer.findMany({
        where:{
            OR:[
                { fromUserId: userID },
                { toUserId: userID },
            ]
        },
        include:{
            fromUser:true,
            toUser:true
        },
        orderBy:{
            timeStamp:"desc"
        },
        take:10
    })
   return  NextResponse.json(alltcx)

}