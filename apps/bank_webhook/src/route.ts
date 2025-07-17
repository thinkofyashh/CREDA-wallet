

import express from "express";
import {prisma} from "@repo/db"
const app=express()

app.post("/hdfcApi",async(req,res)=>{
    const paymentInformation={
        "token":req.body.token,
        "amount":req.body.amount,
        "userId":req.body.user_identifier
    }
    try{
      await  prisma.balance.update({
            where:{
                userId:paymentInformation.userId

            },
            data:{
                amount:{
                    increment:paymentInformation.amount
                }
            }
        })

       await prisma.onRampTransaction.update({
            where:{
                token:paymentInformation.token
            },
            data:{
                status:"SUCCESS"
            }
        })

        res.status(200).json({message:"Payment was successful"})


    }catch(e){
        res.status(411).json({message:"Payment Failed"})

    }

})