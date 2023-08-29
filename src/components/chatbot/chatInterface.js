import React, { useState, useEffect, useRef } from "react"
import { content } from "./content"
import * as styles from "./chatInterface.module.css"

const ChatInterface = () => {
  // Initialize chatHistory from sessionStorage or default to an empty array
  const initialHistory = JSON.parse(
    sessionStorage.getItem("chatHistory") ||
      JSON.stringify([
        {
          role: "assistant",
          content:
            "Hello! How can I assist you today? If you have any questions or need information about our loan software solutions, feel free to ask.",
        },
      ])
  )
  const [chatHistory, setChatHistory] = useState(initialHistory)
  const [userInput, setUserInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const chatHistoryRef = useRef(null)

  // Initial messages for context
  const initialMessages = [
    {
      role: "system",
      content:
        "You are a knowledgeable salesperson for TaskSuite. Your goal is to provide accurate information about our products, assist potential customers in making a purchase and guiding them to book a demo at https://tasksuite.com/contact. You keep your responses simple and limit to 50 words or less. You always want to steer the conversation back to booking a demo or educating the user on our products. If the user is looking for support for our product, have them email support@tasksuite.com",
    },
    {
      role: "assistant",
      content: content,
    },
  ]

  // Update sessionStorage whenever chatHistory changes
  useEffect(() => {
    sessionStorage.setItem("chatHistory", JSON.stringify(chatHistory))
  }, [chatHistory])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Clear previous error message
    setErrorMessage(null)

    // Validate input length
    if (userInput.length > 500) {
      setErrorMessage("Your message is too long.")
      setIsLoading(false)
      return
    }

    // Validate content (allowing a-zA-Z0-9 and some special characters including ')
    if (/[^a-zA-Z0-9\s,.;!?']/.test(userInput)) {
      setErrorMessage("Your message contains invalid characters.")
      setIsLoading(false)
      return
    }

    // Validate non-empty input
    if (userInput.trim() === "") {
      setErrorMessage("Your message is empty.")
      setIsLoading(false)
      return
    }

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { role: "user", content: userInput },
    ])

    setIsLoading(true)

    try {
      const messagesToSend = [
        ...initialMessages,
        ...chatHistory,
        { role: "user", content: userInput },
      ]

      const response = await fetch(process.env.GATSBY_API_CHATBOT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: messagesToSend }),
      })
      const data = await response.json()

      // Update chatHistory state with the bot's response
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "assistant", content: data.message },
      ])

      setUserInput("") // Clear the input field
    } catch (error) {
      console.error("Error:", error)
      setErrorMessage(
        "There was an error processing your request. Please try again later."
      )
    }

    setIsLoading(false)
  }

  useEffect(() => {
    sessionStorage.setItem("chatHistory", JSON.stringify(chatHistory))

    // Scroll chat history to the bottom
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
    }
  }, [chatHistory])

  return (
    <div className={styles.container}>
      <div className={styles.chatHistory} ref={chatHistoryRef}>
        {chatHistory.map((message, idx) => (
          <div
            key={idx}
            className={`${styles.messageContainer} ${styles[message.role]}`}
          >
            <p className={styles.text}>
              <strong className={styles.hidden}>
                {message.role.charAt(0).toUpperCase() + message.role.slice(1)}:
              </strong>{" "}
              {message.content}
            </p>
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.messageContainer} ${styles.assistant}`}>
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className={styles.button} onClick={(e) => handleSubmit(e)}>
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatInterface
