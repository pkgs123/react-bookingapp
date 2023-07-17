import * as React from "react"

const Calender = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 2h-1V0h-2v2H5V0H3v2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H2V8h14v10Zm0-12H2V4h14v2ZM4 10h5v5H4v-5Z"
      fill="#135EF2"
    />
  </svg>
)

export default Calender
