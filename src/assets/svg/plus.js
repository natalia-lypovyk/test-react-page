import * as React from "react"

const Plus = (props) => (
    <svg
        {...props}
        width="24px"
        height="24px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width={24} height={24} rx={12} fill="#F4F5FC" />
        <rect x={11} y={5} width={2} height={14} rx={1} fill="#97A7CB" />
        <rect
            x={19}
            y={11}
            width={2}
            height={14}
            rx={1}
            transform="rotate(90 19 11)"
            fill="#97A7CB"
        />
    </svg>
)

export default Plus
