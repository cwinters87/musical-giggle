import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/taskFlowProducts/productNav"
import ContactCenterHero from "../components/taskFlowProducts/hero/heroContactCenter"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import BenefitsContactCenterCard from "../components/taskFlowProducts/benefits/benefitsContactCenter"
import DynamicProductCard from "../components/taskFlowProducts/productCard"
import DynamicProductCardReverse from "../components/taskFlowProducts/productCardReverse"
import ManagementImg from "../images/taskFlowProducts/management/image-management-portal.png"
import ReportingImg from "../images/taskFlowProducts/management/image-management-reporting.png"
import SecurityImg from "../images/taskFlowProducts/management/image-management-security.png"
import AnalyticsImg from "../images/taskFlowProducts/contactCenter/graphic-callcenter-reporting.png"
import TogetherCard from "../components/taskFlowProducts/togetherCard"
import FeaturesContactCenterCard from "../components/taskFlowProducts/features/featuresContactCenter"

const ContactCenter = () => {
  return (
    <Layout>
      <ProductNav />

      <ContactCenterHero />

      <FadeInFromBottom>
        <BenefitsContactCenterCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Omni-Channel Support"}
          cardTitle={"Integrate all platforms"}
          cardSubTitle={
            "Enabling seamless communication across various channels like voice, email, SMS, web chat, and social media."
          }
          Img={ManagementImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Automatic Call Distributor (ACD)"}
          cardTitle={"Intelligent call routing"}
          cardSubTitle={
            "Intelligent routing of incoming calls to the appropiate agents based on predifined criteria."
          }
          Img={ReportingImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Predictive Dialing"}
          cardTitle={"Reduce abandoned calls"}
          cardSubTitle={
            "Automated dialing system that uses algorithms to minimize agent idle time and reduce call abandonment."
          }
          Img={SecurityImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Real-Time Reporting and Analytics"}
          cardTitle={"Track everything"}
          cardSubTitle={
            "Comprehensive dashboards and analytics tools that provide insights into key performance indicators (KPIs), including call abandonment rates, average speed of answer, first call resolutions, etc."
          }
          Img={AnalyticsImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <FeaturesContactCenterCard />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <TogetherCard pageName={"Contact Center Software"} />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskFlow - Contact Center Solution" />

export default ContactCenter
