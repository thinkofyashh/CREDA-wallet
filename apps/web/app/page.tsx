import { getServerSession } from "next-auth";
import { authConfig } from "../lib/auth";
import { redirect } from "next/navigation";



export default  async function (){
const sesion=await getServerSession(authConfig)

if(sesion?.user){
  redirect("/dashboard")
}else{
  redirect("/signin")
}

}
