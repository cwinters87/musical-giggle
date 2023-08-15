import * as React from "react"
import * as styles from "./featuresHelpdesk.module.css"

const FeaturesHelpdeskCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleContainer}>
            <p className={styles.header}>Included features</p>
            <h2 className={styles.title}>Everything you need, in one place.</h2>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>SLA Management</h3>
                <p className={styles.cardSubTitle}>
                  With our platform, you can easily define, track and adhere to
                  service level agreements, consistently delivering on your
                  promises to customers.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  Customer Feedback Collection
                </h3>
                <p className={styles.cardSubTitle}>
                  Our system allows you to effortlessly collect and analyze
                  customer feedback, enabling you to continually improve your
                  support service.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Reporting and Analytics</h3>
                <p className={styles.cardSubTitle}>
                  Gain valuable insights into support team performance and
                  customer satisfaction levels with detailed reports and
                  analytics.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} id={styles.mobileContainer}>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Integration Capabilities</h3>
                <p className={styles.cardSubTitle}>
                  TaskFlow Helpdesk seamlessly integrates with your existing
                  business tools, creating a unified operational hub for your
                  business.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Security and Compliance</h3>
                <p className={styles.cardSubTitle}>
                  Rest easy knowing that TaskFlow Helpdesk adheres to stringent
                  data security standards and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesHelpdeskCard
