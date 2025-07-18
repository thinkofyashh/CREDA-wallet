import React from "react"

type CenterProps={
    children: React.ReactNode,

}


export const Center=({children}:CenterProps)=>{
    return <div className="flex justify-center flex-col h-full">
    <div className="flex justify-center">
        {children}
    </div>
</div>    
}