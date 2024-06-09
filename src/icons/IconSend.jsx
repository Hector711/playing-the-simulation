import * as React from "react";

export default function Send(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="aside-icons icons"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
    </svg>
  );
}
