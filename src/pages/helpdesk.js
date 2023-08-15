import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/taskFlowProducts/productNav"
import HelpdeskHero from "../components/taskFlowProducts/hero/heroHelpdesk"
import BenefitsHelpdeskCard from "../components/taskFlowProducts/benefits/benefitsHelpdesk"
import DynamicProductCard from "../components/taskFlowProducts/productCard"
import DynamicProductCardReverse from "../components/taskFlowProducts/productCardReverse"
import FeaturesHelpdeskCard from "../components/taskFlowProducts/features/featuresHelpdesk"
import TogetherCard from "../components/taskFlowProducts/togetherCard"
import DemoFormCard from "../components/demoForm/demoFormCard"
import TicketsImg from "../images/taskFlowProducts/helpdesk/image-helpdesk-tickets.png"
import SupportImg from "../images/taskFlowProducts/helpdesk/image-helpdesk-support.png"
import AutomatedImg from "../images/taskFlowProducts/helpdesk/image-helpdesk-automated.png"
import CollaborationImg from "../images/taskFlowProducts/helpdesk/image-helpdesk-collaboration.png"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"

const Helpdesk = () => {
  return (
    <Layout>
      <ProductNav />

      <HelpdeskHero />

      <FadeInFromBottom>
        <BenefitsHelpdeskCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Ticket Management"}
          cardTitle={"Boost support capabilities"}
          cardSubTitle={
            "TaskFlow Helpdesk empowers your support team to effecitvely track, prioritize, and manage customer support tickets, ensuring no issue goes unresolved."
          }
          Img={TicketsImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Multi-channel Support"}
          cardTitle={"Communicate seamlessly"}
          cardSubTitle={
            "TaskFlow Helpdesk allows your business to deliver stellar customer support across multiple channels, including email, phone, live chat, and social media, meeting customers where they are."
          }
          Img={SupportImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Automated Responses"}
          cardTitle={"Tasks on autopilot"}
          cardSubTitle={
            "Our platform can send automated responses to common queries, freeing up time for your support agents to focus on more complex issues."
          }
          Img={AutomatedImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Collaboration Tools"}
          cardTitle={"Teamwork made easy"}
          cardSubTitle={
            "TaskFlow Helpdesk fosters efficient team collaboration with features that enable multiple team members to work together on a single ticket."
          }
          Img={CollaborationImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <FeaturesHelpdeskCard />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <TogetherCard pageName={"Helpdesk solution"} />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskFlow - Helpdesk Solution" />

export default Helpdesk
