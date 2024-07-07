import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import { google } from "googleapis"
import { OAuth2Client } from "google-auth-library"

let cachedClient: OAuth2Client;

export const getAuthClient = async () =>
{

  /**
   * May be store client in Database?
  */

  if (cachedClient?.credentials) {
    console.log("cached client found ");
    
    return cachedClient
  }

  const session = await getServerSession(authOptions)  

  const client_id = process.env.GOOGLE_CLIENT_ID
  const client_secret = process.env.GOOGLE_CLIENT_SECRET

  const credentialsPayload = JSON.stringify({
    type: 'authorized_user',
    client_id,
    client_secret,
    refresh_token: session?.user.refreshToken!
  })

  const client = new google.auth.OAuth2(client_id, client_secret, 'http://localhost:3000/')
  client.setCredentials(JSON.parse(credentialsPayload))

  cachedClient = client

  return cachedClient
}


export const getMailClient = async () =>
{
  const authClient = await getAuthClient()
  return google.gmail({ version : "v1", auth : authClient })

}