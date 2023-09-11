import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/taskFlowProducts/CRM/pop-crm.png"
import Image from "../../../images/taskFlowProducts/CRM/hero-crm.png"
import ImageMobile from "../../../images/taskFlowProducts/CRM/hero-crm.png"
import * as styles from "./hero.module.css"

const CRMHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              The ultimate cloud-
              <br className={styles.topBreakPoint} />
              based solution for <br className={styles.topBreakPoint} />
              cutomer relationships.
            </h2>
            <p className={styles.subTitle}>
              Built on a unified data platform, TaskFlow's CRM{" "}
              <br className={styles.bottomBreakPoint} />
              centralizes all customer interactions and data, ensuring{" "}
              <br className={styles.bottomBreakPoint} /> your team has a
              comprehensive 360-degree view of your{" "}
              <br className={styles.bottomBreakPoint} />
              customers at their fingertips.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskFlow CRM Product" />
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/contact")
            }}
            variant="outlined"
          >
            <p>See how it works</p>
          </Button>
        </div>
        <div className={styles.imgContainer}>
          <ScrollFadeInImage
            src={imgPop}
            alt="pop-out"
            style={{
              position: "absolute",
              top: "70%",
              left: "-120px",
              height: "100px",
              width: "auto",
            }}
          />
          <picture>
            <source media="(max-width: 991px)" srcSet={ImageMobile} />
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

export default CRMHero
