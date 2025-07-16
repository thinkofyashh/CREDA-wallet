import { Button } from "./button"



interface AppbarProps{
    user?:{
        name?:string |null
    }| null,
    onSignin:()=>void ,
    onSignout:()=>void
}


export const Appbar=({user,onSignin,onSignout}:AppbarProps)=>{
return <div>
      <div className="text-lg flex flex-col justify-center">
            Creda
        </div>
        <Button onClick={user ? onSignout:onSignin}>
            {user ? "logout" : "login"}
        </Button>
</div>


}