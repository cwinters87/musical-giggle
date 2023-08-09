import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ComingSoon from "../components/comingSoon"
// import AboutPageHero from "../components/aboutPage/hero"
// import CreatedExclusivelyCard from "../components/aboutPage/createdExclusivelyCard"
// import DiverseTeamCard from "../components/aboutPage/diverseTeam"
// import ValuesCard from "../components/aboutPage/values"
// import CareersCard from "../components/aboutPage/careers"
// import FadeInFromBottom from "../components/effects/fadeInFromBottom"
// import FadeInFromLeft from "../components/effects/fadeInFromLeft"

const AboutPage = () => {
  return (
    <Layout>
      <ComingSoon />
      {/* <AboutPageHero />

      <FadeInFromBottom>
        <CreatedExclusivelyCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DiverseTeamCard />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <ValuesCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <CareersCard />
      </FadeInFromLeft> */}
    </Layout>
  )
}

export const Head = () => <Seo title="TaskFlow - About" />

export default AboutPage
