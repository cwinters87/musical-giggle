import * as React from "react"
import imageOne from "../../../images/taskFlowProducts/helpdesk/icon-helpdesk-support.png"
import imageTwo from "../../../images/taskFlowProducts/helpdesk/icon-helpdesk-efficiency.png"
import imageThree from "../../../images/taskFlowProducts/helpdesk/icon-helpdesk-service.png"
import imageFour from "../../../images/taskFlowProducts/helpdesk/icon-helpdesk-decisions.png"
import imageFive from "../../../images/taskFlowProducts/helpdesk/icon-helpdesk-hub.png"
import * as styles from "./benefitsHelpdesk.module.css"

const BenefitsHelpdeskCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageOne} alt="support icon" />
          </div>
          <div className={styles.title}>
            <h3>Streamlined Support</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskFlow Helpdesk offers efficient ticket management, accelerating
              resolution times and boosting customer satisfaction.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageTwo} alt="efficiency icon" />
          </div>
          <div className={styles.title}>
            <h3>Increased Efficiency</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Automated responses to common queries free up your support team's
              time, enabling them to focus on more complex issues and increasing
              overall efficiency.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageThree} alt="serivce icon" />
          </div>
          <div className={styles.title}>
            <h3>Improved Service Delivery</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Our Service Level Agreement &#40;SLA&#41; management ensures your
              team consistently meets service expectations, enhancing your
              brand's reliability.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFour} alt="data icon" />
          </div>
          <div className={styles.title}>
            <h3>Data-Driven Decisions</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              Our detailed reporting and analytics provide insights into your
              support team's performance and customer satisfaction levels,
              enabling data-driven decision making.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={imageFive} alt="hub icon" />
          </div>
          <div className={styles.title}>
            <h3>Unified Operational Hub</h3>
          </div>
          <div className={styles.subTitle}>
            <p>
              TaskFlow Helpdesk integrates seamlessly with your existing
              business tools, creating a unified workspace and streamling
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsHelpdeskCard
