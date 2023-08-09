import * as React from "react"
import { ArrowButton } from "../shared"
import { navigate } from "gatsby"
import Logo from "../../images/homePage/logo-robot.png"
import Image from "../../images/homePage/exclusive.png"
import * as styles from "./exclusively.module.css"

const ExclusivelyCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <img src={Logo} alt="origination icon" />
            </div>
          </div>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Created Exclusively for
              <br className={styles.topBreakPoint} /> the Unique Needs of{" "}
              <br className={styles.topBreakPoint} />
              Modern Businesses.
            </h2>
            <p className={styles.subTitle}>
              Developed by industy veterans, TaskFlow was built from{" "}
              <br className={styles.bottomBreakPoint} />
              the ground up to deliver a comprehensive solution for{" "}
              <br className={styles.bottomBreakPoint} />
              the complex needs of businesses seeking to streamline{" "}
              <br className={styles.bottomBreakPoint} /> their customer
              releationship management, contact center,{" "}
              <br className={styles.bottomBreakPoint} />
              and helpdesk operations. We understand the intricacies{" "}
              <br className={styles.bottomBreakPoint} />
              and challenges of today's business landscape, which is{" "}
              <br className={styles.bottomBreakPoint} />
              why we've ensured our solution is tailored to meet your{" "}
              <br className={styles.bottomBreakPoint} />
              needs and uses cases.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={Image} alt="TaskSuite Origination Product" />
            </div>
          </div>
          <ArrowButton
            onClick={() => {
              navigate("/about")
            }}
            label="About the company"
          />
        </div>
        <div className={styles.imgContainer}>
          <picture>
            <source media="(max-width: 991px)" srcSet={Image} />
            <source media="(min-width: 992px)" srcSet={Image} />
            <img
              src={Image}
              alt="TaskSuite hero product"
              style={{ width: "auto", height: "100%" }}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default ExclusivelyCard
