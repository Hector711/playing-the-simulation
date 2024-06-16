import * as React from "react"

export default function Work(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke='currentColor'
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="profile-icons"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  )
}
