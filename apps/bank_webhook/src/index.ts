

import express from "express";
import {prisma} from "@repo/db"
const app=express()
app.use(express.json())
app.post("/hdfcApi",async(req,res)=>{
    const paymentInformation={
        "token":req.body.token,
        "amount":req.body.amount,
        "userId":req.body.user_identifier
    }
    console.log(paymentInformation)
    try {
        await prisma.$transaction([
            prisma.balance.upsert({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                update:{
                    amount:{
                        increment: Number(paymentInformation.amount)
                    }
                    
                },
                create:{
                    userId: Number(paymentInformation.userId),
                    amount: Number(paymentInformation.amount),
                    locked: 0,
                }
                
            }),
            prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "SUCCESS",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})

app.listen(3003)