import * as React from "react"
import imageOne from "../../../images/taskFlowProducts/omniChannel/icon-omni-experience.png"
import imageTwo from "../../../images/taskFlowProducts/omniChannel/icon-omni-comms.png"
import imageThree from "../../../images/taskFlowProducts/omniChannel/icon-omni-customer.png"
import imageFour from "../../../images/taskFlowProducts/omniChannel/icon-omni-decision.png"
import imageFive from "../../../images/taskFlowProducts/omniChannel/icon-omni-adoption.png"
import * as styles from "./benefitsOmni.module.css"

const BenefitsOmniCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="experience icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Enhanced Customer <br />
              Experience
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              By consolidating all channels into a single platform, TaskFlow
              Connect offers a seamless and consistent customer experience
              across all touchpoints.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="communication icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Personalized <br />
              Communication
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              The comprehensive view of customer interactions allows your team
              to deliver highly personalized and contextually relevent
              responses, enhancing customer satisfaction.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="journey icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Unified Customer <br />
              Journey
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Seamless integration with TaskFlow's Contact Center, Helpdesk, and
              CRM solutions ensures a consistent and smooth customer journey
              from intial contact to resolution.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFour} alt="decision making icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Informed <br />
              Decision-Making
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              The robust analytics and reporting tools provide actionable
              insights that enable data-driven decision-making, improving your
              customer engagement strategy.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFive} alt="adoption icon" />
          </div>
          <div className={styles.title}>
            <h3>
              Easy Adoption <br />& Onboarding
            </h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              The user-friendly interface ensures a smooth transition for your
              team, minimizing disruption to operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsOmniCard
