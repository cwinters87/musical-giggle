import React from "react"
import withAuthentication from "../utils/hocs/withAuthentication"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import DashboardMenu from "../components/dashboard/menu"

const Dashboard = () => {
  return (
    <Layout>
      <DashboardMenu />
    </Layout>
  )
}

export const Head = () => <Seo title="TaskFlow - Dashboard" />

export default withAuthentication(Dashboard)
