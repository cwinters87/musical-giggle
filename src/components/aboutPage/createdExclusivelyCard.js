import * as React from "react"
import Image from "../../images/aboutPage/graphic-about.png"
import * as styles from "./createdExclusivelyCard.module.css"

const CreatedExclusivelyCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              The All-In-One CRM, Contact Center, and Helpdesk Solution.{" "}
              <br className={styles.topBreakPoint} />
              needs of the loan industry.
            </h2>
            <p className={styles.subTitle}>
              We understand the complexities and nuances of providing{" "}
              <br className={styles.bottomBreakPoint} />
              exceptional service, which is why we've been able to ensure{" "}
              <br className={styles.bottomBreakPoint} />
              our solution is tailored to meet your needs and use cases.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={Image} alt="TaskSuite Credit Product" />
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <picture>
            <source media="(max-width: 991px)" srcSet={Image} />
            <source media="(min-width: 992px)" srcSet={Image} />
            <img
              src={Image}
              alt="TaskFlow hero product"
              style={{ width: "auto", height: "100%" }}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default CreatedExclusivelyCard
