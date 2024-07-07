import type { DefaultSession, DefaultUser, User} from "next-auth"
import "next-auth"



declare module "next-auth" {
  /**
  * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  */
  interface Session {
    user : {
      refreshToken : string
    },
  }

  interface User {
    refreshToken : string
  }

}


declare module "next-auth/jwt" {

  interface JWT extends DefaultJWT {
    refreshToken : string,
  }

}