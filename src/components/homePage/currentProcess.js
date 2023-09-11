import * as React from "react"
import { ArrowButton } from "../shared"
import { navigate } from "gatsby"
// import AnimatedArrow from '../buttons/animatedArrow';
import Image from "../../images/homePage/simple.png"
import ImageMobile from "../../images/homePage/simple-mobile.png"
import * as styles from "./currentProcess.module.css"

const CurrentProcessCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div id={styles.titleContainer}>
          <h2 id={styles.title}>Are you happy with your current process?</h2>
          <p id={styles.subTitle}>
            We know you aren't becasue we've been there too. TaskFlow was built
            for and by business veterans to be the platform that simply didn't
            exist.
          </p>
        </div>
        {/* destop view render */}
        <div id={styles.cardContainer}>
          <div className={styles.flexWrapper} id={styles.flexWrapperTop}>
            <div className={styles.card} id={styles.cardOne}>
              <div className={styles.imgWrapper}>
                <div className={styles.imgContainer}>
                  <picture>
                    <source media="(max-width: 991px)" srcSet={ImageMobile} />
                    <source media="(min-width: 992px)" srcSet={Image} />
                    <img
                      src={Image}
                      alt="TaskSuite product"
                      style={{ width: "auto", height: "100%" }}
                    />
                  </picture>
                </div>
              </div>
              <div className={styles.textContainer}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Simple</h3>
                <p className={styles.cardSubTitle}>
                  versus today's normal, which relies on numerous people using
                  multiple tools, often leading to complex and fragile
                  workflows.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
            <div className={styles.card} id={styles.cardTwo}>
              <div className={styles.textContainer}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Fast</h3>
                <p className={styles.cardSubTitle}>
                  No more corroborating data across multiple systems and
                  reconciling differences.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
          </div>
          <div className={styles.flexWrapper} id={styles.flexWrapperBottom}>
            <div className={styles.card} id={styles.cardThree}>
              <div className={styles.textContainer}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Trackable</h3>
                <p className={styles.cardSubTitle}>
                  Say goodbye to opaque processes with low visibility into
                  statuses and dispersed activities.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
            <div className={styles.card} id={styles.cardFour}>
              <div className={styles.textContainer}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Efficient</h3>
                <p className={styles.cardSubTitle}>
                  Eliminate laborious customer relationship management that
                  ultimately cost time and money.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
            <div className={styles.card} id={styles.cardFive}>
              <div className={styles.textContainer}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Customizable</h3>
                <p className={styles.cardSubTitle}>
                  No more rigid, generic software. TaskFlow is designed around
                  the needs of your business.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
          </div>
        </div>

        {/* mobile view render */}
        <div id={styles.cardContainerMobile}>
          <div className={styles.firstRow}>
            <div className={styles.cardMobile} id={styles.cardOneMobile}>
              <div className={styles.cardContentMobile}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Simple</h3>
                <p className={styles.cardSubTitle}>
                  versus today's normal, which relies on numerous people using
                  multiple tools, often leading to complex and fragile
                  workflows.
                </p>
              </div>
              <div className={styles.imgWrapperMobile}>
                <div className={styles.imgContainerMobile}>
                  <picture>
                    <source media="(max-width: 991px)" srcSet={ImageMobile} />
                    <source media="(min-width: 992px)" srcSet={Image} />
                    <img
                      src={Image}
                      alt="TaskSuite product"
                      style={{ width: "auto", height: "100%" }}
                    />
                  </picture>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
          </div>
          <div className={styles.secondRow}>
            <div className={styles.cardMobile} id={styles.cardTwoMobile}>
              <div className={styles.cardContentMobile}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Fast</h3>
                <p className={styles.cardSubTitle}>
                  No more corroborating data across multiple systems and
                  reconciling differences.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
            <div className={styles.cardMobile} id={styles.cardThreeMobile}>
              <div className={styles.cardContentMobile}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Trackable</h3>
                <p className={styles.cardSubTitle}>
                  Say goodbye to opaque processes with low visibility into
                  statuses and dispersed activities.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
          </div>
          <div className={styles.thirdRow}>
            <div className={styles.cardMobile} id={styles.cardFourMobile}>
              <div className={styles.cardContentMobile}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Efficient</h3>
                <p className={styles.cardSubTitle}>
                  Eliminate laborious customer relationship management that
                  ultimately cost time and money.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
            <div className={styles.cardMobile} id={styles.cardFiveMobile}>
              <div className={styles.cardContentMobile}>
                <p>
                  <span className={styles.cardHeader}>WITH TASKFLOW</span>
                </p>
                <h3 className={styles.cardTitle}>Customizable</h3>
                <p className={styles.cardSubTitle}>
                  No more rigid, generic software. TaskFlow is designed around
                  the needs of your business.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                {/* <AnimatedArrow/> */}
              </div>
            </div>
          </div>
        </div>

        <div id={styles.linkContainer}>
          {/* <ArrowButton
            onClick={() => {
              navigate("/lenders")
            }}
            label="For Call Centers"
          />
          <ArrowButton
            onClick={() => {
              navigate("/lenders")
            }}
            label="For Financial Services"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default CurrentProcessCard
