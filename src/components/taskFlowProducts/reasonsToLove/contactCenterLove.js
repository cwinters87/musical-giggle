import * as React from "react"

import * as styles from "./contactCenterLove.module.css"
import SmallDownArrow from "../../effects/smallDownArrow"

const LoveContactCenter = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>
            5 Reasons You'll Love TaskFlow's <br />
            Contact Center Solution
          </h2>
        </div>
        <div className={styles.cardContainer}>

          <div className={styles.card}>
            <details>
              <summary>
                <div className={styles.numberContainer}>
                  <h3 className={styles.number}>1</h3>
                </div>
                
                <h4 className={styles.title}>Browser-Based <br/>Calling</h4>
                <SmallDownArrow />
                
              </summary>
              <p className={styles.subTitle}>Log into TaskFlow from any browser and start making calls
                without the need for cumbersome traditional equipment. Enjoy the
                freedom of mobility and flexibility, and deliver customer
                service that exceeds expectations, no matter where your agents
                are based.
              </p>
            </details>
          </div>
          <div className={styles.card}>
            
            <details>
              <summary>
                <div className={styles.numberContainer}>
                  <h3 className={styles.number}>2</h3>
                </div>
                
                  <h4 className={styles.title}>Dashboard <br/>Dominance</h4>
                
              </summary>
              <p className={styles.subTitle}>With TaskFlow, you can monitor and manage your call center
                performance like never before. Our powerful software provides
                real-time reporting, providing you with an eagle-eye view of all
                agent activities. Comprehensive insights include key metrics
                such as average call abandonment rate, average speed of answer,
                occupancy rates, percentage of calls blocked, and first call
                resolutions.
              </p>
            </details>
          </div>
          <div className={styles.card}>
            <details>
              <summary>
                <div className={styles.numberContainer}>
                  <h3 className={styles.number}>3</h3>
                </div>
                
                  <h4 className={styles.title}>Dialer <br/>Dynamics</h4>
               
              </summary>
              <p className={styles.subTitle}>Take your call center operations to the next level with
                TaskFlow. Creating outbound campaigns is a breeze with our
                intuitive interface, and managing inbound calls has never been
                smoother. Our built-in dialer and auto-dial features work in
                harmony with intelligent routing algorithms, ensuring that every
                incoming call reaches the right agent at the right time.
              </p>
            </details>
          </div>
          <div className={styles.card}>
            <details>
              <summary>
                <div className={styles.numberContainer}>
                  <h3 className={styles.number}>4</h3>
                </div>
                
                  <h4 className={styles.title}>Seamless Service <br/>Excellence</h4>
                
                
              </summary>
              <p className={styles.subTitle}>From handling high-volume inbound calls to executing targeted
                outbound campaigns, TaskFlow covers all bases, maximizing your
                team's productivity and customer satisfaction. By seamlessly
                integrating all these aspects, we help you to deliver
                consistently excellent customer experiences.
              </p>
            </details>
          </div>
          <div className={styles.card}>
            <details>
              <summary>
                <div className={styles.numberContainer}>
                  <h3 className={styles.number}>5</h3>
                </div>
                
                  <h4 className={styles.title}>Transformative <br/>Touchpoints</h4>
                
              </summary>
                <p className={styles.subTitle}>With TaskFlow, we turn frustrations into solutions. Given that a
                  staggering 27% of customers cite lack of effectiveness as their
                  primary grievance with customer service, our platform is
                  designed to counteract this. TaskFlow equips your contact center
                  to exceed customer expectations consistently.
                </p>
            </details>
          </div>
          {/* <div className={styles.card}>
            <div className={styles.title}>
              <h3>1</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                Log into TaskFlow from any browser and start making calls
                without the need for cumbersome traditional equipment. Enjoy the
                freedom of mobility and flexibility, and deliver customer
                service that exceeds expectations, no matter where your agents
                are based.
              </p>
            </div>
          </div> */}

          {/* <div className={styles.card}>
            <div className={styles.title}>
              <h3>2</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                With TaskFlow, you can monitor and manage your call center
                performance like never before. Our powerful software provides
                real-time reporting, providing you with an eagle-eye view of all
                agent activities. Comprehensive insights include key metrics
                such as average call abandonment rate, average speed of answer,
                occupancy rates, percentage of calls blocked, and first call
                resolutions.
              </p>
            </div>
          </div> */}

          
          {/* <div className={styles.card}>
            <div className={styles.title}>
              <h3>3</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                Take your call center operations to the next level with
                TaskFlow. Creating outbound campaigns is a breeze with our
                intuitive interface, and managing inbound calls has never been
                smoother. Our built-in dialer and auto-dial features work in
                harmony with intelligent routing algorithms, ensuring that every
                incoming call reaches the right agent at the right time.
              </p>
            </div>
          </div> */}


          {/* <div className={styles.card}>
            <div className={styles.title}>
              <h3>4</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                From handling high-volume inbound calls to executing targeted
                outbound campaigns, TaskFlow covers all bases, maximizing your
                team's productivity and customer satisfaction. By seamlessly
                integrating all these aspects, we help you to deliver
                consistently excellent customer experiences.
              </p>
            </div>
          </div> */}


          {/* <div className={styles.card}>
            <div className={styles.title}>
              <h3>5</h3>
            </div>
            <div className={styles.subTitle}>
              <p>
                With TaskFlow, we turn frustrations into solutions. Given that a
                staggering 27% of customers cite lack of effectiveness as their
                primary grievance with customer service, our platform is
                designed to counteract this. TaskFlow equips your contact center
                to exceed customer expectations consistently.
              </p>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  )
}

export default LoveContactCenter
