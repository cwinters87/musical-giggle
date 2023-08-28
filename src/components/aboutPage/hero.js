import * as React from "react"
import Image from "../../images/aboutPage/image-about-hero.png"
import * as styles from "./hero.module.css"

const AboutPageHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              We make providing
              <br className={styles.topBreakPoint} /> great customer service{" "}
              <br className={styles.topBreakPoint} />
              simpler and better.
            </h2>
            <p className={styles.subTitle}>
              Created by CX veterans, TaskFlow was built from the
              <br className={styles.bottomBreakPoint} />
              ground up to deliver a complete solution for the complex{" "}
              <br className={styles.bottomBreakPoint} />
              needs of companies needing to provide world-class{" "}
              <br className={styles.bottomBreakPoint} />
              customer service without building their own solution.
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

export default AboutPageHero
