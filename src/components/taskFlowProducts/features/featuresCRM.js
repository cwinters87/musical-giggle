import * as React from "react"
import * as styles from "./featuresCRM.module.css"

const CRMFeaturesCard = () => {
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
                <h3 className={styles.cardTitle}>Integration Capabilities</h3>
                <p className={styles.cardSubTitle}>
                  TaskFlow CRM seamlessly integrates with a variety of your
                  business tools, from marketing automation software to customer
                  service tools and project mangement systems, creating a
                  unified operational hub.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Data Security & Compliance</h3>
                <p className={styles.cardSubTitle}>
                  With TaskFlow CRM, rest assured that your customer data is
                  protected. We adhere to the highest standards of data privacy,
                  security, and compliance with all necessary regulations.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Document Storage</h3>
                <p className={styles.cardSubTitle}>
                  Our CRM provides a secure and organized space for storing and
                  managing all crucial business documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CRMFeaturesCard
