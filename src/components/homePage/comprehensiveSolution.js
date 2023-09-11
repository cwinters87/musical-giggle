import * as React from "react"
import backgroundImgFull from "../../../static/full.png"
import backgroundImgFit from "../../../static/fit.png"
import backgroundImgUnified from "../../../static/unified.png"
import * as styles from "./comprehensiveSolution.module.css"
import { ArrowButton } from "../shared/ArrowButton"
import { navigate } from "gatsby"

const ComprehensiveSolutionCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div id={styles.titleContainer}>
          <h2 id={styles.title}>
            The Industry's Complete Comprehensive
            <br className={styles.breakPoint} /> Business Process solution
          </h2>
          <p id={styles.subTitle}>
            TaskFlow simplifies and automates your entire business process,
            making it effortless to manage
            <br /> and track customer relationships from the first interactio to
            long-term engagement.
          </p>
        </div>
        <div id={styles.cardContainer}>
          <div
            style={{ backgroundImage: `url(${backgroundImgFull})` }}
            className={styles.card}
          >
            <h3>Full-Service Suite</h3>
            <p>Not just a tool, TaskFlow is an end-to-end business system</p>
          </div>
          <div
            style={{ backgroundImage: `url(${backgroundImgFit})` }}
            className={styles.card}
            id={styles.cardFit}
          >
            <h3>Fit for Purpose</h3>
            <p>Works the way it should because it's designed for the job</p>
          </div>
          <div
            style={{ backgroundImage: `url(${backgroundImgUnified})` }}
            className={styles.card}
          >
            <h3>Unified Data</h3>
            <p>Enables better decisions by having one source of truth</p>
          </div>
        </div>
        <div id={styles.linkContainer}>
          {/* <ArrowButton
            onClick={() => {
              navigate("/loansuite")
            }}
            label="Discover the Solution"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default ComprehensiveSolutionCard
