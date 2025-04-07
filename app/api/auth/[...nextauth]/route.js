import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"Email", type:"text"},
                password:{label:"Password", type:"password"},
            },
            async authorize(credentials){
                await connectDB();
                const user = await User.findOne({email:credentials.email})
                if(user && user.password === credentials.password){
                    return {
                        id:user._id, 
                        name: user.name,
                        email: user.email
                    }
                }
                return null
                // if(credentials.email==="test@example.com" && credentials.password=== "password"){
                //     return {
                //         id:"1",
                //         name:"Test User",
                //         email:"test@example.com"
                //     }
                // }
            }
        })
    ], 
    callbacks:{
        async signIn({user, account}){
            await connectDB()
            const existingUser = await User.findOne({email:user.email})
            if(!existingUser){
                await User.create({
                    email: user.email,
                    name: user.name, 
                    password: account.provider === "credentials"? user.password: null,
                })
            }
            return true
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}