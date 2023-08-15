import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/taskFlowProducts/productNav"
import CRMHero from "../components/taskFlowProducts/hero/heroCRM"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import BenefitsCRMCard from "../components/taskFlowProducts/benefits/benefitsCRM"
import DynamicProductCard from "../components/taskFlowProducts/productCard"
import DynamicProductCardReverse from "../components/taskFlowProducts/productCardReverse"
import ManagementImg from "../images/taskFlowProducts/CRM/image-crm-contacts.png"
import ReportingImg from "../images/taskFlowProducts/CRM/image-crm-tracking.png"
import SecurityImg from "../images/taskFlowProducts/CRM/image-crm-pipeline.png"
import AnalyticsImg from "../images/taskFlowProducts/CRM/image-crm-workflows.png"
import TogetherCard from "../components/taskFlowProducts/togetherCard"
import CRMFeaturesCard from "../components/taskFlowProducts/features/featuresCRM"

const CRM = () => {
  return (
    <Layout>
      <ProductNav />

      <CRMHero />

      <FadeInFromBottom>
        <BenefitsCRMCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Contact & Lead Management"}
          cardTitle={"Manage contacts and leads"}
          cardSubTitle={
            "TaskFlow CRM enables your business to effortlessly store, manage, and retrieve vital contact information such as names, addresses, and social media accounts. Optimizing the conversion of potential customers into tangible sales opportunities is made easy with TaskFlow CRM's powerful lead management capabilities."
          }
          Img={ManagementImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Interaction Tracking & Comms Integration"}
          cardTitle={"Centralized communication"}
          cardSubTitle={
            "Our CRM allows your team to take notes, record conversation history, and schedule follow-up task, ensuring every interaction is accounted for. Plus, send emails, make calls, and send texts directly from TaskFlow CRM. Keeping customer communication centralized has never been simpler."
          }
          Img={ReportingImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Pipeline & Task Management"}
          cardTitle={"Visualize and track pipeline"}
          cardSubTitle={
            "With TaskFlow CRM, visualize your sales pipeline and track the status of various stages in your sales process seamlessly. Create, assign, and track tasks related to customer relationships or sales processes all within the TaskFlow CRM platform."
          }
          Img={SecurityImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Automate Worfklow & Reporting"}
          cardTitle={"Streamline it all"}
          cardSubTitle={
            "Our CRM automates a multitude of business processes, including task assignment, follow-up reminders, and data synchronization, to enhance operational efficiency. Also, TaskFlow CRM offers interactive dashboards and detailed reports, empowering your business with visualized data and actionable insights."
          }
          Img={AnalyticsImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <CRMFeaturesCard />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <TogetherCard pageName={"CRM"} />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskFlow - Contact Center Solution" />

export default CRM
