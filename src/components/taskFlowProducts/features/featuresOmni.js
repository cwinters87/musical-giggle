import * as React from "react"
import * as styles from "./featuresOmni.module.css"

const FeaturesOmniCard = () => {
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
                <h3 className={styles.cardTitle}>Seamless Integration</h3>
                <p className={styles.cardSubTitle}>
                  Integrates seamlessly with TaskFlow's Call Center, Helpdesk,
                  and CRM solutions, providing a unified and consistent customer
                  experience across the entire customer journey.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Contact Management</h3>
                <p className={styles.cardSubTitle}>
                  Allows for easy management and tracking of customer contacts
                  across multiple channels, ensuring no interaction is missed.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Customizable Workflows</h3>
                <p className={styles.cardSubTitle}>
                  Allows you to create workflows tailored to your business
                  needs, enhancing efficiency and customer engagement.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} id={styles.mobileContainer}>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Secure Data Management</h3>
                <p className={styles.cardSubTitle}>
                  Ensures customer data is secure and complies with data privacy
                  regulations.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Scalability</h3>
                <p className={styles.cardSubTitle}>
                  Easily scales with your business growth, catering to
                  increasing customer base and communication channels without
                  compromising on performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesOmniCard
