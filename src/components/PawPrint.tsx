interface PawPrintProps {
  className?: string;
  size?: number;
}

const PawPrint = ({ className = "", size = 40 }: PawPrintProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="50" cy="70" rx="22" ry="18" />
    <circle cx="30" cy="42" r="12" />
    <circle cx="50" cy="35" r="11" />
    <circle cx="70" cy="42" r="12" />
    <circle cx="82" cy="58" r="9" />
    <circle cx="18" cy="58" r="9" />
  </svg>
);

export default PawPrint;
