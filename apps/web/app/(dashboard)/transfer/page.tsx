import { AddMoneyCard } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";

export default function Transfer(){
    return <div>
       <AddMoneyCard></AddMoneyCard>
       <BalanceCard amount={10000} locked={10000}></BalanceCard>
    </div>

}