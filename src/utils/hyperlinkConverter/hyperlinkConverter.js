import React from "react"

export function convertUrlsToLinks(text) {
  if (typeof text !== "string") {
    console.warn("convertUrlsToLinks received a non-string value:", text)
    return text
  }

  const parts = text.split(/(https?:\/\/[^\s]+)/)

  return parts.map((part, index) => {
    if (/https?:\/\/[^\s.]+/.test(part)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      )
    } else {
      return part
    }
  })
}
