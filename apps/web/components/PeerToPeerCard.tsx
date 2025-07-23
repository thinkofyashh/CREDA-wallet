"use client"

import { Card } from "@repo/ui/card"
import { useEffect, useState } from "react"



export const PeerToPeerTransactionCard=()=>{
    const [alltrans,setAlltrans]=useState<any[]>([])

    useEffect(()=>{
       const fnc= async()=>{
            const res=await fetch("/api/p2ptransfer")
            if (!res.ok) {
                console.log("API error:", res.status);
                return;
              }
        const data=await res.json()
        console.log(data)
        setAlltrans(data)
        }
        fnc();

    },[])



    
    
    return (
        <Card title="Peer To Peer Transactions">
          <p className="text-sm text-gray-600 mb-4">
            Peer to peer transactions are direct transfers between two parties without a central authority.
          </p>
      
          {alltrans.length === 0 ? (
            <p className="text-center text-gray-500 italic">No transactions found</p>
          ) : (
            <div className="space-y-4">
              {alltrans.map((t) => (
                <div
                  key={t.timeStamp}
                  className="rounded-xl border border-gray-200 p-4 shadow-md bg-white"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Amount</span>
                    <span className="text-lg font-semibold text-green-600">
                      ₹{(t.amount / 100).toLocaleString()}
                    </span>
                  </div>
      
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold">From:</p>
                      <p>{t.fromUser.email}</p>
                    </div>
                    <div>
                      <p className="font-semibold">To:</p>
                      <p>{t.toUser.email}</p>
                    </div>
                  </div>
      
                  <div className="text-xs text-gray-400 mt-2">
                    {new Date(t.timeStamp).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      );
      
      
}