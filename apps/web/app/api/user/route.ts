import { NextResponse } from "next/server"
import { prisma } from "@repo/db"

export const GET = async () => {
    try {
        const user = await prisma.user.create({
            data: {
                email: "test@example.com",
                password: "password123"
            }
        })
        
        return NextResponse.json({
            message: "User created successfully",
            user: user
        })
    } catch (error) {
        console.error("Error creating user:", error)
        return NextResponse.json({
            message: "Failed to create user",
            
        }, { status: 500 })
    }
}