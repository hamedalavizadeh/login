import Head from "next/head"
import DashboardPage from "./dashboard/page"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardPage />
    </>
  )
}
