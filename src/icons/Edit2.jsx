import * as React from "react"

export default function Edit2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="edit-icon"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M7 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 00-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" />
    </svg>
  )
}