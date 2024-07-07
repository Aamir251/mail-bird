import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : AuthOptions = {

  session : {
    strategy : "jwt"
  },
  providers : [
    GoogleProvider({
      clientId : process.env.GOOGLE_CLIENT_ID!,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET!,

      authorization : {
        params : {
          scope : "openid https://mail.google.com/ https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
          prompt : "consent",
          access_type : "offline",
          response_type : "code",
        }
      }
    })
  ],

  callbacks : {
    async signIn({ account, user, email, profile, credentials }) {
      // console.log("SIGNIN ", { account,  user, email, profile, credentials });

      return true
    },

    async jwt({ account, token }) {
      
      if (account) {
        token.refreshToken = account.refresh_token as string
      }
      return token
    },


    async session({ session, token, trigger, user }) {
      
      if (token) session.user.refreshToken = token.refreshToken
      
      return session
      
    }
  }
}