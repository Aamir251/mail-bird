import { getMailClient } from "@/lib/google-client"

export const getMailsList = async () => {
  const { users } = await getMailClient()

  const resp = await users.messages.list({ userId : "me" })

  /**
   * 
  const messageFetchPromises = resp.data.messages?.map((msg) => {
    // Fetch individual message
    return users.messages.get({ id : msg.id!, userId: "me" });
  });
  
  const fulfilledMessages = await Promise.all(messageFetchPromises!)

  const messages = fulfilledMessages.map(msg => {
    return {
      messageId : msg.data.id,
      message : msg.data.payload,
      threadId : msg.data.threadId
    }
    
  })
  */



  return {
    ...resp.data
  }

}


export const getSingleMessage = async (messageId : string) =>
{
  const { users } = await getMailClient()

  const fetchedMessage = await users.messages.get({ 
    id : messageId,
    userId : "me" 
  })

  return fetchedMessage.data
}