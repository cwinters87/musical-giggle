import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/taskFlowProducts/omniChannel/pop-omni.png"
import Image from "../../../images/taskFlowProducts/contactCenter/hero-contact-center.png"
import ImageMobile from "../../../images/taskFlowProducts/contactCenter/hero-contact-center.png"
import * as styles from "./hero.module.css"

const ContactCenterHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              Streamline customer <br className={styles.topBreakPoint} />
              communication with <br className={styles.topBreakPoint} />
              advanced capabilities.
            </h2>
            <p className={styles.subTitle}>
              TaskFlow's cloud-based Contact Center software solution{" "}
              <br className={styles.bottomBreakPoint} />
              seamlessly connects agents and customers, empowering{" "}
              <br className={styles.bottomBreakPoint} /> your team to deliver
              exceptional service, every single{" "}
              <br className={styles.bottomBreakPoint} />
              interaction.
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

export default ContactCenterHero
