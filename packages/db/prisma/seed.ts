import { prisma } from "../src";



async function main(){
   const johnDoe= await prisma.user.upsert({
        where:{
            phoneNumber:"999999999"
        },
        update:{},
        create:{
            phoneNumber:"999999999",
            name:"John Doe",
            email:"john.doe@example.com",
            password:"password123",OnRampTransaction:{
                create:{
                    amount:10000,
                    provider:"HDFC",
                    token:"12",
                    status:"SUCCESS",
                    StartTime:new Date()
                    
                }
            
            }
            
        }
    })
    const alice =await prisma.user.upsert({
        where:{phoneNumber:"9999999998"},
        update:{},
        create:{
            phoneNumber:"9999999998",
            name:"Alice",
            email:"alice@example.com",
            password:"password123",
            OnRampTransaction:{
                create:{
                    amount:1000000,
                    provider:"AXIS",
                    token:"14",
                    status:"FAILED",
                    StartTime:new Date()
                    }
                    }

        }
    })
    console.log({johnDoe,alice})
}
main()
  .then(async () => {
    await prisma.$disconnect() 
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })