import * as React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import ProductNav from "../components/taskFlowProducts/productNav"
import OmniHero from "../components/taskFlowProducts/hero/heroOmni"
import DemoFormCard from "../components/demoForm/demoFormCard"
import FadeInFromBottom from "../components/effects/fadeInFromBottom"
import FadeInFromLeft from "../components/effects/fadeInFromLeft"
import BenefitsOmniCard from "../components/taskFlowProducts/benefits/benefitsOmni"
import DynamicProductCard from "../components/taskFlowProducts/productCard"
import DynamicProductCardReverse from "../components/taskFlowProducts/productCardReverse"
import UnifiedImg from "../images/taskFlowProducts/omniChannel/image-omni-unified.png"
import CustomerViewImg from "../images/taskFlowProducts/omniChannel/image-omni-360.png"
import InterfaceImg from "../images/taskFlowProducts/omniChannel/image-omni-interface.png"
import ReportingImg from "../images/taskFlowProducts/omniChannel/image-omni-reporting.png"
import TogetherCard from "../components/taskFlowProducts/togetherCard"
import FeaturesOmniCard from "../components/taskFlowProducts/features/featuresOmni"

const OmniChannel = () => {
  return (
    <Layout>
      <ProductNav />

      <OmniHero />

      <FadeInFromBottom>
        <BenefitsOmniCard />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"Unified Communcation Channels"}
          cardTitle={"One Platform to rule them all"}
          cardSubTitle={
            "Consolidates all customer communication channels-like email, phone, social media, live chat, and more-into a single platform."
          }
          Img={UnifiedImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"360-Degree Customer View"}
          cardTitle={"Everything at a glance"}
          cardSubTitle={
            "Provides a comprehensive view of customer interactions across all channels, allowing for personalized and contextualized relevant communication."
          }
          Img={CustomerViewImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <DynamicProductCard
          headerTitle={"User-Friendly Interface"}
          cardTitle={"Your team will love it"}
          cardSubTitle={
            "Comes with an intuitive, easy-to-use interface, ensuring a smooth user experience for your team."
          }
          Img={InterfaceImg}
        />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <DynamicProductCardReverse
          headerTitle={"Real-Time Reporting and Analytics"}
          cardTitle={"One-stop information hub"}
          cardSubTitle={
            "Offers robust reporting and analytics tools that provide actionable insights, enabling data-driven decision-making."
          }
          Img={ReportingImg}
        />
      </FadeInFromBottom>

      <FadeInFromLeft>
        <FeaturesOmniCard />
      </FadeInFromLeft>

      <FadeInFromBottom>
        <TogetherCard pageName={"Omni-Channel Solution"} />
      </FadeInFromBottom>

      <FadeInFromBottom>
        <DemoFormCard />
      </FadeInFromBottom>
    </Layout>
  )
}

export const Head = () => <Seo title="TaskFlow - Omni-Channel Solution" />

export default OmniChannel
