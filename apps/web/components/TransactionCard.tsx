"use client"
import { Card } from "@repo/ui/card"
type Transaction={
    
        provider :string,
        amount: number,
        status:string,
        time: Date,      
}
type TransactionCardProps={
    transactions:Transaction[]
}

export const TransactionCard = ({ transactions }: TransactionCardProps) => {
    if (!transactions.length) {
      return (
        <Card title="Recent Transactions">
          <div className="text-sm text-gray-500 text-center py-4">
            There are no recent transactions.
          </div>
        </Card>
      );
    }
  
    return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
      <Card title="Recent Transactions">
        <div className="divide-y divide-gray-200">
          {transactions.map((t, idx) => (
            <div key={idx} className="py-3 text-sm text-gray-700">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Provider:</span>
                <span>{t.provider}</span>
              </div>
  
              <div className="flex justify-between mb-1">
                <span className="font-medium">Amount:</span>
                <span>₹{(t.amount / 100).toFixed(2)}</span>
              </div>
  
              <div className="flex justify-between mb-1">
                <span className="font-medium">Status:</span>
                <span
                  className={
                    t.status === "SUCCESS"
                      ? "text-green-600"
                      : t.status === "FAILED"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }
                >
                  {t.status}
                </span>
              </div>
  
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>
                  {t.time.toLocaleString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
    );
  };