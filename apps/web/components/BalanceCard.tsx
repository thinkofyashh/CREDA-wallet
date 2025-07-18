import { Card } from "@repo/ui/card"

type BalanceCardProps={
    amount:number,
    locked:number
}




export const BalanceCard = ({ amount, locked }: BalanceCardProps) => {
  const unlockedBalance = amount / 100;
  const lockedBalance = locked / 100;
  const totalBalance = (amount + locked) / 100;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
  <Card title="">
    <h2 className="text-xl font-semibold text-center text-gray-900 mb-4">Balance</h2>

    <div className="flex justify-between text-gray-700 text-sm mb-2">
      <span>Unlocked Balance</span>
      <span>₹{unlockedBalance.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-gray-700 text-sm mb-2">
      <span>Locked Balance</span>
      <span>₹{lockedBalance.toFixed(2)}</span>
    </div>

    <div className="border-t pt-3 mt-3 flex justify-between text-gray-900 font-medium text-base">
      <span>Total Balance</span>
      <span>₹{totalBalance.toFixed(2)}</span>
    </div>
  </Card>
</div>

  );
};



  
