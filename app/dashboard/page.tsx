import { Suspense } from "react"
import MailsList from "./_components/MailsList"

const DashboardPage = () => {

  return (
    <>
      <h2>List Messages</h2>
      <Suspense>
        <MailsList />
      </Suspense>
    </>
  )
}

export default DashboardPage