import React, { useRef } from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Image from "../../images/homePage/completeToolset.png"
import ImageMobile from "../../images/homePage/completeToolsetMobile.png"
import iconOne from "../../images/homePage/icon-intro-callcenter-active.png"
import iconTwo from "../../images/homePage/icon-intro-crm-active.png"
import iconThree from "../../images/homePage/icon-intro-helpdesk-active.png"
import iconFour from "../../images/homePage/icon-intro-omni-active.png"
import * as styles from "./completeToolset.module.css"

const CompleteToolsetCard = () => {
  const firstCardIcon = useRef(null)
  let timeoutId

  // Apply grayscale filter to the first card after a delay
  const applyDelayedGrayscale = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      if (firstCardIcon.current) {
        firstCardIcon.current.style.filter = "grayscale(0%) opacity(1)"
      }
    }, 5000)
  }

  // Handle mouse enter for the first card
  const handleFirstCardMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId) // Clear any existing timeout
    }
    if (firstCardIcon.current) {
      firstCardIcon.current.style.filter = "grayscale(0%) opacity(1)"
    }
  }

  // Handle mouse leave for the first card
  const handleFirstCardMouseLeave = () => {
    applyDelayedGrayscale()
  }

  // Handle mouse enter for the other cards
  const handleMouseEnter = () => {
    if (firstCardIcon.current) {
      firstCardIcon.current.style.filter = "grayscale(100%) opacity(0.5)"
    }
  }

  // Handle mouse leave for the other cards
  const handleMouseLeave = () => {
    applyDelayedGrayscale()
  }

  return (
    <>
      <div className={styles.sectionWrapper}>
        <div className={styles.container} id="start">
          <div id={styles.textContainer}>
            <div id={styles.header}>
              <p>Meet TaskFlow</p>
            </div>
            <div id={styles.title}>
              <h2>A complete toolset - use one or use them all.</h2>
            </div>
            <div id={styles.subTitle}>
              <p>
                We work with you to develop a customized product that is
                tailored to your exact <br className={styles.breakPoint} />
                business needs. TaskFlow was created exclusively for the unique
                needs of <br className={styles.breakPoint} />
                businesses seeking a comprehensive CRM solution.
              </p>
            </div>
          </div>
          <div id={styles.cardContainer}>
            <div id={styles.cardWrapper}>
              <Link
                className={styles.card}
                to="/contactcenter"
                onMouseEnter={handleFirstCardMouseEnter}
                onMouseLeave={handleFirstCardMouseLeave}
              >
                <div className={styles.cardContent}>
                  <img
                    src={iconOne}
                    ref={firstCardIcon}
                    className={styles.icon}
                    alt="Contact Center Icon"
                  />
                  {/* <StaticImage
                    ref={firstCardIcon}
                    src="../../images/homePage/icon-intro-callcenter-active.png"
                    placeholder=""
                    alt="icon"
                    transformOptions={{ fit: "contain" }}
                    height={100}
                    className={styles.icon}
                  /> */}
                  <h3 className={styles.cardTitle}>Contact Center</h3>
                </div>
              </Link>
              <Link
                className={styles.card}
                to="/crm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.cardContent}>
                  <img src={iconTwo} className={styles.icon} alt="CRM Icon" />
                  {/* <StaticImage
                    src="../../images/homePage/icon-intro-crm-active.png"
                    placeholder=""
                    alt="icon"
                    transformOptions={{ fit: "contain" }}
                    height={100}
                    className={styles.icon}
                  /> */}
                  <h3 className={styles.cardTitle}>CRM</h3>
                </div>
              </Link>
              <Link
                className={styles.card}
                to="/helpdesk"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.cardContent}>
                  <img
                    src={iconThree}
                    className={styles.icon}
                    alt="Helpdesk Icon"
                  />
                  {/* <StaticImage
                    src="../../images/homePage/icon-intro-helpdesk-active.png"
                    placeholder=""
                    alt="icon"
                    transformOptions={{ fit: "contain" }}
                    height={100}
                    className={styles.icon}
                  /> */}
                  <h3 className={styles.cardTitle}>Helpdesk</h3>
                </div>
              </Link>
              <Link
                className={styles.card}
                to="/omnichannel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.cardContent}>
                  <img
                    src={iconFour}
                    className={styles.icon}
                    alt="Omni-Channel Icon"
                  />
                  {/* <StaticImage
                    src="../../images/homePage/icon-intro-omni-active.png"
                    placeholder=""
                    alt="icon"
                    transformOptions={{ fit: "contain" }}
                    height={100}
                    className={styles.icon}
                  /> */}
                  <h3 className={styles.cardTitle}>Omni-Channel</h3>
                </div>
              </Link>
            </div>
          </div>
          <div id={styles.imgContainer}>
            <div id={styles.imgWrapper}>
              <picture>
                <source media="(max-width: 991px)" srcSet={ImageMobile} />
                <source media="(min-width: 992px)" srcSet={Image} />
                <img
                  src={Image}
                  alt="TaskSuite product"
                  style={{ width: "auto", height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompleteToolsetCard
