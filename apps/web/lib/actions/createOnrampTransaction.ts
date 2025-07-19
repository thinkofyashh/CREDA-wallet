"use server";
import { prisma } from "@repo/db"
import { OnRampStatus } from "../../../../packages/db/src/generated/prisma"
import { getServerSession } from "next-auth"
import { authConfig } from "../auth"
type OnRampTransactionProps ={
    provider:string,
    amount: number,
    status:OnRampStatus



}
export async function CreateOnRampTransaction({provider,amount,status}:OnRampTransactionProps){
const session = await getServerSession(authConfig)

if(!session?.user || !session?.user.id) {
    return {
        message:"User is not authenticated"
       
    }
}
const token = (Math.random()*100).toString() 
    const res= await prisma.onRampTransaction.create({
        data:{
            provider,
            StartTime:new Date(),
            amount,
            status,
            token:token,
            userId:Number(session?.user.id)
        }
    })


console.log(res)

return {
    message:"Transaction created",
}

}