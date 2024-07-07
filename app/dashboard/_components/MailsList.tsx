import { getMailsList } from "@/actions/mails"

const MailsList = async () => {

  const messages = await getMailsList()  
  
  return (
    <div>MailsList</div>
  )
}

export default MailsList