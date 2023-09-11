import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/taskFlowProducts/helpdesk/pop-helpdesk.png"
import Image from "../../../images/taskFlowProducts/helpdesk/hero-helpdesk.png"
import ImageMobile from "../../../images/taskFlowProducts/helpdesk/hero-helpdesk.png"
import * as styles from "./hero.module.css"

const HelpdeskHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Revolutionizing how <br className={styles.topBreakPoint} />
              you manage customer <br className={styles.topBreakPoint} />
              support.
            </h2>
            <p className={styles.subTitle}>
              Crafted on our unified cloud-based platform, TaskFlow{" "}
              <br className={styles.bottomBreakPoint} />
              Helpdesk gives your support team the power of{" "}
              <br className={styles.bottomBreakPoint} /> your team to deliver
              comprehensive customer data, all in one place{" "}
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskSuite Origination Product" />
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
              alt="TaskSuite hero product"
              style={{ width: "auto", height: "100%" }}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default HelpdeskHero
