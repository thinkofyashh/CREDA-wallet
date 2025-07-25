import { JSX } from "react";
import { SideBarItem } from "../../components/SideBarItem";

export default function Layout({children}:{children:React.ReactNode;}):JSX.Element{
    return <>
    <div className="flex">
        
        <div className="w-72 border-r border-slate-300 min-h-screen  ">
            <SideBarItem href="/dashboard" title="Home" icon={<HomeIcon></HomeIcon>}></SideBarItem>
            <SideBarItem href="/transfer" title="Transfer" icon={<TransferIcon></TransferIcon>}></SideBarItem>
            <SideBarItem href="/transaction" title="Transaction" icon={<TransactionIcon></TransactionIcon>}></SideBarItem>
            <SideBarItem href="/p2ptransfer" title="Send Money" icon={<Peer2PeerIcon></Peer2PeerIcon>}></SideBarItem>
        </div>
        <div className="flex-1 ">

        {children}
        </div>

        

    </div>
    </>

}
function HomeIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    );
  }
  
  function TransferIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    );
  }
  
  function TransactionIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    );
  }
  function Peer2PeerIcon() {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        className="size-6"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
        />
      </svg>
    );
  }
  


