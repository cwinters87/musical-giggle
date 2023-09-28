import * as React from "react"
import Image from "../../images/homePage/Hero.png"
import ImageMobile from "../../images/homePage/Hero-Mobile.png"
import * as styles from "./hero.module.css"
import { Button } from "../shared"
import { navigate } from "gatsby"
import DownArrow from "../effects/downArrow"

const Hero = () => {
  return (
    <div className={styles.sectionWrapper}>
      <main className={styles.container}>
        <DownArrow />
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
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
        <section id={styles.subContainerOne}>
          <h1>
            The All-In-One
            <br className={styles.breakPointTop} /> Contact Center, Helpdesk,
            <br className={styles.breakPointTop} /> and Dialer Solution.
          </h1>
          <h2>
            TaskFlow brings together Contact Center, CRM, Dialer, and{" "}
            <br className={styles.breakPoint} />
            Helpdesk solutions into a single source of truth, enabling{" "}
            <br className={styles.breakPoint} />
            your team to save time and make better business decisions.
          </h2>
          <div id={styles.buttonContainer}>
            <Button
              onClick={() => {
                navigate("/contact")
              }}
            >
              <p>Get started</p>
            </Button>
            {/* <Button
              onClick={() => {
                navigate("/loansuite")
              }}
              variant="outlined"
            >
              <p>See how it works</p>
            </Button> */}
          </div>
        </section>
        <section id={styles.subContainerTwo}></section>
      </main>
    </div>
  )
}

export default Hero
