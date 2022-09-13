import * as React from "react"

const DisabledWarningSearch = (props) => (
    <svg
        {...props}
        width="40px"
        height="40px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x={10} y={10} width={20} height={20} rx={10} fill="#97A7CB" />
        <path
            d="M18.912 21.932a.502.502 0 0 1-.342-.126.502.502 0 0 1-.126-.342V13.85c0-.132.042-.24.126-.324a.502.502 0 0 1 .342-.126h2.178c.132 0 .24.042.324.126a.41.41 0 0 1 .144.324v7.614a.467.467 0 0 1-.144.342.439.439 0 0 1-.324.126h-2.178ZM18.84 26a.48.48 0 0 1-.324-.126.48.48 0 0 1-.126-.324v-2.322c0-.132.042-.24.126-.324a.448.448 0 0 1 .324-.144h2.322c.12 0 .222.048.306.144a.41.41 0 0 1 .144.324v2.322a.48.48 0 0 1-.126.324.439.439 0 0 1-.324.126H18.84Z"
            fill="#fff"
        />
        <rect
            x={1}
            y={1}
            width={38}
            height={38}
            rx={11}
            stroke="#97A7CB"
            strokeWidth={2}
        />
    </svg>
)

export default DisabledWarningSearch
