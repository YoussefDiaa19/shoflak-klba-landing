interface BoneIconProps {
  className?: string;
  size?: number;
}

const BoneIcon = ({ className = "", size = 48 }: BoneIconProps) => (
  <svg
    width={size}
    height={size * 0.45}
    viewBox="0 0 100 45"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="20" y="14" width="60" height="17" rx="8" />
    <circle cx="15" cy="10" r="10" />
    <circle cx="15" cy="35" r="10" />
    <circle cx="85" cy="10" r="10" />
    <circle cx="85" cy="35" r="10" />
  </svg>
);

export default BoneIcon;
