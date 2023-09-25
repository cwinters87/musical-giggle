import React from "react"
import * as styles from "./topBanner.module.css"

const TopBanner = () => {
  // const [isVisible, setIsVisible] = useState(true)

  // if (!isVisible) return null

  return (
    <div className={styles.topBanner}>
      <span>TaskFlow is part of the TaskSuite family</span>
      <a href="https://tasksuite.com/?utm_source=taskflow&utm_medium=referral&utm_campaign=taskflow" target="_blank" rel="noreferrer">
        Learn more
      </a>
      {/* <button
        className={styles.closeButton}
        onClick={() => setIsVisible(false)}
      >
        X
      </button> */}
    </div>
  )
}

export default TopBanner
