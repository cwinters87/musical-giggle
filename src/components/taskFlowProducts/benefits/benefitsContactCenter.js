import * as React from "react"
import imageOne from "../../../images/taskFlowProducts/contactCenter/icon-flexibility.png"
import imageTwo from "../../../images/taskFlowProducts/contactCenter/icon-savings.png"
import imageThree from "../../../images/taskFlowProducts/contactCenter/icon-experience.png"
import imageFour from "../../../images/taskFlowProducts/contactCenter/icon-Integration.png"
import imageFive from "../../../images/taskFlowProducts/contactCenter/icon-productivity.png"
import * as styles from "./benefitsContactCenter.module.css"

const BenefitsOriginationCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="flexibility icon" />
          </div>
          <div className={styles.title}>
            <h3>Increased Flexibilty</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              With TaskFlow - a cloud-based solution, agents can access the
              platform from anywhere with an internet connection, enabling
              remote work and enhancing operational continuity.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="savings icon" />
          </div>
          <div className={styles.title}>
            <h3>Cost Savings</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskFlow's solution has lower upfront costs as it doesn't require
              investments in hardware and can also reduce ongoing expenses like
              maintenance and updates.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="experience icon" />
          </div>
          <div className={styles.title}>
            <h3>Enhacned Experience</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              With features like omnichannel support, automatic call
              distribution, and a built-in CRM, TaskFlow can provide a superior
              and more personalized customer experience.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFour} alt="integration icon" />
          </div>
          <div className={styles.title}>
            <h3>Easy Integration</h3>
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
            <img src={imageFive} alt="productivity icon" />
          </div>
          <div className={styles.title}>
            <h3>Improved productivity</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Real-Time analytics and predictive dialing can improve agent
              productivity and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsOriginationCard
