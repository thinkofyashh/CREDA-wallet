import { getServerSession } from "next-auth";
import { AddMoneyCard } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { TransactionCard } from "../../../components/TransactionCard";
import { authConfig } from "../../../lib/auth";
import { prisma } from "@repo/db";


async function getBalance(){
    const session=await getServerSession(authConfig)
    const bal=await prisma.balance.findFirst({
        where:{
           userId: Number(session?.user?.id)
        }
    })
    return {
        amount:bal?.amount || 0,
        locked:bal?.locked || 0
    }
}

async function getTransaction(){
    const session =await getServerSession(authConfig)
    const trans=await prisma.onRampTransaction.findMany({
        where:{
            userId:Number(session?.user?.id)
        }
    })

    return trans.map(t=>({
        time :new Date( t.StartTime),
       amount: t.amount,
        provider:t.provider,
       status: t.status
       
    }))
    
}

export default async function Transfer(){
    const balance=await getBalance();
    const trans=await getTransaction();

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-8 pt-2 pb-10">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-[#6a51a6] text-center">
              Transfer
            </h1>
      
            {/* Horizontal layout: AddMoneyCard & BalanceCard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-full">
                <AddMoneyCard />
              </div>
              <div className="h-full">
                <BalanceCard amount={balance.amount} locked={balance.locked} />
              </div>
            </div>
      
            {/* TransactionCard below both */}
            <TransactionCard transactions={trans} />
          </div>
        </div>
      );
      
      
      
      

   

}