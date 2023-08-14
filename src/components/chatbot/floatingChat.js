import React, { useState } from "react"
import ChatInterface from "./chatInterface"
import bubble from "../../images/components/bubble.webp"
import robot from "../../images/homePage/logo-robot.png"
import * as styles from "./floatingChat.module.css"

const FloatingChat = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.floatingChatContainer}>
      {isExpanded ? (
        <div className={styles.chatInterface}>
          <ChatInterface />
          <button className={styles.close} onClick={() => setIsExpanded(false)}>
            X
          </button>
        </div>
      ) : (
        <div className={styles.chatBubble} onClick={() => setIsExpanded(true)}>
          <img className={styles.bubble} src={bubble} alt="Chat bubble" />
          <img className={styles.img} src={robot} alt="Chat logo" />
        </div>
      )}
    </div>
  )
}

export default FloatingChat
