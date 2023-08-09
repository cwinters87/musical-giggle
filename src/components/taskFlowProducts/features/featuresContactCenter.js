import * as React from "react"
import * as styles from "./featuresContactCenter.module.css"

const FeaturesContactCenterCard = () => {
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
                <h3 className={styles.cardTitle}>Built-in CRM</h3>
                <p className={styles.cardSubTitle}>
                  Our platform includes a fully-integrated CRM that provides a
                  unified view of customer data.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  Call Recording and Monitoring
                </h3>
                <p className={styles.cardSubTitle}>
                  Ability to record, review, and monitor calls for quality
                  assurance, training, and compliance purposes.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Workforce Management</h3>
                <p className={styles.cardSubTitle}>
                  Tools to forecast call volumes, schedule staffing, monitor
                  adherence, and manage workforce performance.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} id={styles.mobileContainer}>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  Secure Cloud Infrastructure
                </h3>
                <p className={styles.cardSubTitle}>
                  High security standards to protect sensitive data, ensure
                  privacy, and meet compliance requirements.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Scalability</h3>
                <p className={styles.cardSubTitle}>
                  The ability to easily scale up or down based on business
                  needs, providing flexibility and cost-efficiency.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Multi-Tenant Architecture</h3>
                <p className={styles.cardSubTitle}>
                  Enables muiltple users or companies to share the same instance
                  of software, offering cost savings and simplified management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesContactCenterCard
