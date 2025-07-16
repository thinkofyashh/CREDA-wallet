import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@repo/db";
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";



type credentialsProps={
    email: string;
    password: string;
    phone :string
}
export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
            label: "Email",
            type: "text",
            placeholder: "Enter your Email",
          },
        phone: {
          label: "Phone Number",
          type: "text",
          placeholder: "Enter your Phone number",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials:credentialsProps | undefined) {
        if (!credentials?.phone || !credentials?.password) return null;

        const existingUser = await prisma.user.findFirst({
          where: {
            phoneNumber: credentials.phone, // ✅ use phone here
          },
        });

        if (existingUser) {
          const isValid = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (isValid) {
            return {
                id: existingUser.id.toString(),
                number:existingUser.phoneNumber,
                email:existingUser.email
                
              };
          } else {
            return null;
          }
        }

        try {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUser = await prisma.user.create({
            data: {
              phoneNumber: credentials.phone,
              password: hashedPassword,
              email:credentials.email
            },
          });
          return {
            id:newUser.id.toString(),
            number:newUser.phoneNumber,
            email:newUser.email

          };
        } catch (e) {
          console.error("User creation failed:", e);
          return null;
        }
        
      },

    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  pages:{
    signIn:'/signin'
  }
};
