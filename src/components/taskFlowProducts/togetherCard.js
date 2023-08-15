import React from "react"
import { Link } from "gatsby"
import * as styles from "./togetherCard.module.css"
import { Button } from "../shared"
import { navigate } from "gatsby"
import ContactCenterIcon from "../../images/components/image-products-callcenter.png"
import HelpdeskIcon from "../../images/components/image-products-helpdesk.png"
import CRMIcon from "../../images/components/image-products-crm.png"
import OmniIcon from "../../images/components/image-products-omnichannel.png"

const TogetherCard = ({ pageName }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container} id="start">
        <div id={styles.textContainer}>
          <div id={styles.title}>
            <h2>Stronger, together.</h2>
          </div>
          <div id={styles.subTitle}>
            <p>
              TaskFlows {pageName} tools are even more powerful when utilized
              alongside our full product line-up.{" "}
              <br className={styles.breakPoint} />
              Our all-in-one platform puts the control at your fingertips.
            </p>
          </div>
        </div>
        <div id={styles.cardContainer}>
          <div id={styles.cardWrapper}>
            <Link className={styles.card} to="/contactcenter">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={ContactCenterIcon}
                    alt="Contact Center Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>CALL CENTER</h3>
                <p className={styles.cardSubTitle}>
                  Streamline customer <br />
                  communication with <br />
                  advanced capabilites.
                </p>
              </div>
            </Link>
            <Link className={styles.card} to="/crm">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon} src={CRMIcon} alt="CRM Icon" />
                </div>
                <h3 className={styles.cardTitle}>CRM</h3>
                <p className={styles.cardSubTitle}>
                  Centralize customer <br />
                  relationships with intuitive <br />
                  insights and management.
                </p>
              </div>
            </Link>
            <Link className={styles.card} to="/helpdesk">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={HelpdeskIcon}
                    alt="Helpdesk Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>HELPDESK</h3>
                <p className={styles.cardSubTitle}>
                  Elevate support with
                  <br /> efficient tracking and
                  <br /> and repsonsive solutions.
                </p>
              </div>
            </Link>
            <Link className={styles.card} to="/omnichannel">
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.icon}
                    src={OmniIcon}
                    alt="Omni-Channel Icon"
                  />
                </div>
                <h3 className={styles.cardTitle}>OMNI-CHANNEL</h3>
                <p className={styles.cardSubTitle}>
                  Unify interactions for
                  <br /> consistent and seamless <br />
                  customer engagement.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            onClick={() => {
              navigate("/loansuite")
            }}
            variant="blueLarge"
          >
            <p>Explore Products</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TogetherCard
