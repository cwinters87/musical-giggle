import * as React from "react"
import { Button } from "../../shared"
import { navigate } from "gatsby"
import ScrollFadeInImage from "../../effects/popOutImg"
import imgPop from "../../../images/taskFlowProducts/omniChannel/pop-omni.png"
import Image from "../../../images/taskFlowProducts/omniChannel/hero-omni.png"
import ImageMobile from "../../../images/taskFlowProducts/omniChannel/hero-omni.png"
import * as styles from "./hero.module.css"

const OmniHero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.middleWrapper}>
            <h2 className={styles.title}>
              A comprehensive
              <br className={styles.topBreakPoint} />
              solution for seamless <br className={styles.topBreakPoint} />
              omnichannel customer <br className={styles.topBreakPoint} />
              engagement.
            </h2>
            <p className={styles.subTitle}>
              Developed on our powerful unified platform, TaskFlow{" "}
              <br className={styles.bottomBreakPoint} />
              Connect integrates effortlessly with our Call Center,{" "}
              <br className={styles.bottomBreakPoint} /> Helpdesk, and CRM
              solutions, providing consistent and{" "}
              <br className={styles.bottomBreakPoint} />
              unified customer experience across all channels.
            </p>
            <div className={styles.imgContainerMobile}>
              <img src={ImageMobile} alt="TaskFlow CRM Product" />
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/contactcenter")
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

export default OmniHero
