import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        if (credentials.email === "test@demo.com" && credentials.password === "test123") {
          return {
            id: "manual-test-id",
            name: "Test User",
            email: "test@demo.com",
          };
        }

        const user = await User.findOne({ email: credentials.email });
        if (user && user.password === credentials.password) {
          return {
            id: user._id,
            name: user.name,
            email: user.email,
          };
        }
        return null;
        // if(credentials.email==="test@example.com" && credentials.password=== "password"){
        //     return {
        //         id:"1",
        //         name:"Test User",
        //         email:"test@example.com"
        //     }
        // }
      },
    }),
  ],
  // This is for google account to store in our mongodb
  callbacks: {
    async session({ session, token, user }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.id = dbUser._id.toString(); // Add id to session
        console.log("Session Set");
      }
      return session;
    },
    async signIn({ user, account }) {
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        await User.create({
          email: user.email,
          name: user.name,
          password: account.provider === "credentials" ? user.password : null,
        });
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
