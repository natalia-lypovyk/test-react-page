const Close = (props) => (
  <svg
    {...props}
    width="24em"
    height="24em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width={24}
      height={24}
      rx={12}
      fill="#fff"
    />

    <rect
      x={6.343}
      y={7.757}
      width={2}
      height={14}
      rx={1}
      transform="rotate(-45 6.343 7.757)"
      fill="#97A7CB"
    />

    <rect
      x={16.242}
      y={6.343}
      width={2}
      height={14}
      rx={1}
      transform="rotate(45 16.242 6.343)"
      fill="#97A7CB"
    />
  </svg>
);

export default Close;
