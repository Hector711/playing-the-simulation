import * as React from "react"

export default function AddUser(props) {
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
      <path d="M8 7a4 4 0 108 0 4 4 0 00-8 0M16 19h6M19 16v6M6 21v-2a4 4 0 014-4h4" />
    </svg>
  )
}