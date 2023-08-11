import * as React from "react"
import { Link } from "gatsby"
import CCIcon from "../../images/components/icon-tab-callcenter.png"
import HDIcon from "../../images/components/icon-tab-helpdesk.png"
import CRMIcon from "../../images/components/icon-tab-crm.png"
import OCIcon from "../../images/components/icon-tab-omnichannel.png"
import * as styles from "./productNav.module.css"

const ProductNav = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <Link className={styles.link} to="/contactcenter">
          <div className={styles.imgContainer}>
            <img src={CCIcon} alt="Call Center Icon" />
          </div>
          <h3 className={styles.linkTitle}>Call Center</h3>
        </Link>

        <Link className={styles.link} to="/helpdesk">
          <div className={styles.imgContainer}>
            <img src={HDIcon} alt="Helpdesk Icon" />
          </div>
          <h3 className={styles.linkTitle}>Helpdesk</h3>
        </Link>

        <Link className={styles.link} to="/crm">
          <div className={styles.imgContainer}>
            <img src={CRMIcon} alt="CRM Icon" />
          </div>
          <h3 className={styles.linkTitle}>CRM</h3>
        </Link>

        <Link className={styles.link} to="/omnichannel">
          <div className={styles.imgContainer}>
            <img src={OCIcon} alt="Omni-Channel Icon" />
          </div>
          <h3 className={styles.linkTitle}>Omni-Channel</h3>
        </Link>
      </div>
    </div>
  )
}

export default ProductNav
