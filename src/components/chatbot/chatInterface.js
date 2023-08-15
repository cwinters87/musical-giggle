import React, { useState, useEffect } from "react"
import { content } from "./content"
import * as styles from "./chatInterface.module.css"

const ChatInterface = () => {
  // Initialize chatHistory from sessionStorage or default to an empty array
  const initialHistory = JSON.parse(
    sessionStorage.getItem("chatHistory") || "[]"
  )
  const [chatHistory, setChatHistory] = useState(initialHistory)
  const [userInput, setUserInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  // Initial messages for context
  const initialMessages = [
    {
      role: "system",
      content:
        "You are a knowledgeable salesperson for TaskSuite. Your goal is to provide accurate information about our products, assist potential customers in making a purchase and guiding them to book a demo at https://tasksuite.com/contact.",
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

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      // Always include the initial context and append the latest user input
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

      // Update the chatHistory state with both the user's message and the bot's response
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "user", content: userInput },
        { role: "assistant", content: data.message },
      ])

      setUserInput("") // Clear the input field
      console.log("Sending chatHistory to backend:", chatHistory)
    } catch (error) {
      console.error("Error:", error)
      setErrorMessage(
        "There was an error processing your request. Please try again later."
      )
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.chatHistory}>
        {chatHistory.map((message, idx) => (
          <p className={styles.text} key={idx}>
            <strong>
              {message.role.charAt(0).toUpperCase() + message.role.slice(1)}:
            </strong>{" "}
            {message.content}
          </p>
        ))}
        {isLoading && <div className={styles.spinner}></div>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
      <div className={styles.formContainer}>
        <input
          className={styles.input}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className={styles.send} onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatInterface
