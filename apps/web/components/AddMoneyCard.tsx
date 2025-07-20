"use client"
import { Button } from "@repo/ui/button"
import { Select } from "@repo/ui/Select"
import { TextInput } from "@repo/ui/TextInput"
import { useState } from "react"
import { CreateOnRampTransaction } from "../lib/actions/createOnrampTransaction"



const SupportedBanks=[
    {
        name:"HDFC",
        redirectUrl:"https://www.hdfc.com/"
    },
    {
        name:"AXIS",
        redirectUrl:"https://www.axisbank.com/"
    }

]




export const AddMoneyCard =() => {
  const [redirectUrl, setRedirectUrl] = useState(SupportedBanks[0]?.redirectUrl);
  const [amount,setAmount]=useState("");
  const[bankName,setBankName]=useState("");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl space-y-6 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 text-center">Add Money</h1>

      <div className="space-y-2">
        <TextInput label="Amount" placeholder="Enter amount" onChange={(value:string):void=>{
            setAmount(value)
        }} />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Select Bank</label>
        <Select
          onSelect={(value) => {
            const selectedBank = SupportedBanks.find(bank => bank.name === value);
            if(selectedBank) setBankName(selectedBank.name)
            setRedirectUrl(selectedBank?.redirectUrl || "");
          }}
          options={SupportedBanks.map(bank => ({
            key: bank.name,
            value: bank.name,
          }))}
        />
      </div>

      <Button
        onClick={async() => {
          if (redirectUrl) {
            await CreateOnRampTransaction({
                provider:bankName,
                amount:Number(amount)*100,
                status:"PENDING",
            })
            window.location.href = redirectUrl;
          } else {
            alert("Please select a bank.");
          }
        }}
      >
        Add Money
      </Button>
    </div>
  );
};
