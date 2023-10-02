import * as React from "react"
import Carousel from "./carousel"
import backgroundImg from "../../../images/homePage/testimonial.png"
import * as styles from "./testimonialCard.module.css"

const cardData = [
  {
    imageUrl: backgroundImg,
    quote: `Mainati Alternate Student Funding has been using TaskFlow for our call centre and CRM solutions as well as loan and accounting modules. TaskFlow is an enabler to our business, and we are envisioning a long and frutiful relationship.`,
    author: "Paul Bruwer",
    position: "CFO",
    company: "MANATI",
  },
  {
    imageUrl: backgroundImg,
    quote:
      "We’ve worked with TaskFlow to develop a customized product that is tailored to our exact business needs. They’ve done this seamlessly",
    author: "Tucker S.",
    position: "COO",
    company: "BACKD",
  },
  {
    imageUrl: backgroundImg,
    quote:
      "TaskFlow has provided ongoing support and valuable insight as to how we can continue to utilize these tools to increase productivity and operate our business efficiently.",
    author: "Brandon Hoye",
    position: "CTO",
    company: "TUA FINANCIAL",
  },
  // Add more card data objects as needed
]

const TestimonialCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Over 5,000 users across 25 partners are loving TaskFlow</h2>
        </div>
        <Carousel cards={cardData} />
      </div>
    </div>
  )
}

export default TestimonialCard
