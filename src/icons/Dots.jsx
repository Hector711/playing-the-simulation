import * as React from "react"

export default function Dots(props) {
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
      <path d="M4 12a1 1 0 102 0 1 1 0 10-2 0M11 12a1 1 0 102 0 1 1 0 10-2 0M18 12a1 1 0 102 0 1 1 0 10-2 0" />
    </svg>
  )
}