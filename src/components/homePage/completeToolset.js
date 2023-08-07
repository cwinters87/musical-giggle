import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Image from "../../images/homePage/completeToolset.png"
import ImageMobile from "../../images/homePage/completeToolsetMobile.png"
import * as styles from "./completeToolset.module.css"

const CompleteToolsetCard = () => {
  // not working yet
  useEffect(() => {
    const links = document.querySelectorAll("#cardWrapper > a")

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault()

        const activeLink = document.querySelector(`.${styles.active}`)
        activeLink.classList.remove(styles.active)

        link.classList.add(styles.active)
      })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click")
      })
    }
  }, [])

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
                tailored to your exact <br />
                business needs. TaskFlow was created exclusively for the unique
                needs of <br />
                businesses seeking a comprehensive CRM solution.
              </p>
            </div>
          </div>
          <div id={styles.cardContainer}>
            <div id={styles.cardWrapper}>
              <Link
                className={styles.card}
                id={styles.active}
                to="/loanorigination"
              >
                <div className={styles.cardContent}>
                  <StaticImage
                    src="../../images/homePage/icon-intro-callcenter-active.png"
                    placeholder=""
                    alt="icon"
                    className={styles.icon}
                    transformOptions={{ fit: "contain" }}
                    // styles={{ width: "auto", height: "25px" }}
                    height={100}
                  />
                  <h3 className={styles.cardTitle}>Call Center</h3>
                </div>
              </Link>
              <Link className={styles.card} to="/loancreditai">
                <div className={styles.cardContent}>
                  <StaticImage
                    src="../../images/homePage/icon-intro-crm-inactive.png"
                    placeholder=""
                    alt="icon"
                    className={styles.icon}
                    transformOptions={{ fit: "contain" }}
                    height={100}
                  />
                  <h3 className={styles.cardTitle}>CRM</h3>
                </div>
              </Link>
              <Link className={styles.card} to="/loanservicing">
                <div className={styles.cardContent}>
                  <StaticImage
                    src="../../images/homePage/icon-intro-helpdesk-inactive.png"
                    placeholder=""
                    alt="icon"
                    className={styles.icon}
                    transformOptions={{ fit: "contain" }}
                    height={100}
                  />
                  <h3 className={styles.cardTitle}>Helpdesk</h3>
                </div>
              </Link>
              <Link className={styles.card} to="/loanmanagement">
                <div className={styles.cardContent}>
                  <StaticImage
                    src="../../images/homePage/icon-intro-omni-inactive.png"
                    placeholder=""
                    alt="icon"
                    className={styles.icon}
                    transformOptions={{ fit: "contain" }}
                    height={100}
                  />
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
