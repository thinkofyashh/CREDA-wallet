"use server";

import { getServerSession } from "next-auth";
import { authConfig } from "../auth";
import { prisma } from "@repo/db";
type p2ptransferProps={
    to:string,
    amount:number,
}
export async function p2ptransfer({to,amount}:p2ptransferProps){
    const session =await getServerSession(authConfig);

    if(!session || !session?.user) {
        return {
            message:"Person is not logged in "
        }
    }
    const from= session.user.id;
    if(!from){
        return {
            message:"Request Cant be Processed"
        }
    }
    const toUser=await prisma.user.findFirst({
        where:{
            phoneNumber:to
        }
    })
    if(!toUser){
        return {
            message:"User not found"
        }
    }
   

    await prisma.$transaction(async(tx)=>{

        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

        console.log("sleep")

        const fromBalance=await tx.balance.findUnique({
            where:{
                userId:Number(from)
            },
           
        })
        if(!fromBalance || fromBalance.amount < Number(amount)){
            throw new Error("Insufficient Balance")
    }
    await tx.balance.update({
        where:{
            userId:Number(from)
        },
        data:{
            amount:{
                decrement:Number(amount)
            }
        }
    })
    
    await  tx.balance.update({
        where:{
            userId:toUser.id
            
        },
        data:{
            amount:{
                increment:Number(amount)
            }
        }
    })

    await tx.p2ptransfer.create({
        data:{
            fromUserId:from,
            amount:Number(amount),
            timeStamp:new Date(),
            toUserId:toUser.id
        }
    })
    }
       
    )
}

