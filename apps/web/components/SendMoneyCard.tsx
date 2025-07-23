"use client";

import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/TextInput"
import { useState } from "react";
import { p2ptransfer } from "../lib/actions/transfer";





export const SendMoneyCard=()=>{
    const [amount,setAmount]=useState("");
    const [pnumber,setPnumber]=useState("");
    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-2xl border border-gray-200 bg-white">
          <Card title="">
          <h2 className="text-center text-2xl font-bold text-black mb-6">Send Money</h2>
            <div className="space-y-5 mt-4">
              <TextInput
                placeholder="Enter the phone number"
                label="Phone Number"
                onChange={(value:string):void => {
                    setPnumber(value);
                }}
              />
        



        
              <TextInput
                placeholder="Enter the amount"
                label="Amount"
                onChange={(value:string):void => {
                    setAmount(value);
                }}
              />
      
              <div className="w-full">
                <Button onClick={async()=>{
                    await p2ptransfer({
                        to:pnumber,amount:Number(amount)*100
                    })
                    alert("Done")
                }}>
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      );
      
}