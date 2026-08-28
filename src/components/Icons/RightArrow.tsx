type RightArrowProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const RightArrow = ({
  size = 20,
  color = "currentColor",
  ...props
}: RightArrowProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { RightArrow };
