import * as React from "react"

export default function Checks(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M7 12l5 5L22 7M2 12l5 5m5-5l5-5" />
    </svg>
  )
}
