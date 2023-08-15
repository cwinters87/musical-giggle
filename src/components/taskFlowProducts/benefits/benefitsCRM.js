import * as React from "react"
import imageOne from "../../../images/taskFlowProducts/CRM/icon-crm-collaboration.png"
import imageTwo from "../../../images/taskFlowProducts/CRM/icon-crm-unified.png"
import imageThree from "../../../images/taskFlowProducts/CRM/icon-crm-decisions.png"
import imageFour from "../../../images/taskFlowProducts/CRM/icon-crm-interactions.png"
import imageFive from "../../../images/taskFlowProducts/CRM/icon-crm-sales.png"
import * as styles from "./benefitsCRM.module.css"

const BenefitsCRMCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="collaboration icon" />
          </div>
          <div className={styles.title}>
            <h3>Better Collaboration</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskFlow can be integrated easily with other business systems,
              creating a unified platform for all business operations.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="unified icon" />
          </div>
          <div className={styles.title}>
            <h3>Unified Information</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              With TaskFlow CRM, all your cusomter data is stored and managed in
              one place, making information access quick and easy.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="decisions icon" />
          </div>
          <div className={styles.title}>
            <h3>Enhanced Decisions</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Interactive dashboards and detailed reports provide actionable
              insights, aiding strategic decision-making.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFour} alt="interactions icon" />
          </div>
          <div className={styles.title}>
            <h3>Improved Interactions</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskFlow CRM offers a consolidated view of customer interactions
              across different channels, enabling personalized and effective
              communication.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFive} alt="sales icon" />
          </div>
          <div className={styles.title}>
            <h3>Streamlined Sales</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              From lead management to pipeline tracking, TaskFlow CRM
              streamlines your sales processes, leading to improved conversions
              and revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsCRMCard
