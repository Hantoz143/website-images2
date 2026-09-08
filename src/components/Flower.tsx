interface FlowerProps {
  className?: string;
  variant?: "full" | "corner" | "branch" | "small";
  color?: string;
}

export default function Flower({
  className = "",
  variant = "full",
  color = "#d9aeb4",
}: FlowerProps) {
  if (variant === "corner") {
    return (
      <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M5 115 Q 30 90, 50 75 Q 70 60, 95 45" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M5 115 Q 20 95, 30 70 Q 35 55, 40 40" stroke={color} strokeWidth="0.6" fill="none" opacity="0.3" />
        <g transform="translate(85, 40)">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="-10" rx="7" ry="14" fill={color} opacity="0.7" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="5" fill="#fffaf4" opacity="0.9" />
          <circle cx="0" cy="0" r="2.5" fill={color} opacity="0.5" />
        </g>
        <g transform="translate(30, 70)">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="-6" rx="4" ry="8" fill={color} opacity="0.5" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="3" fill="#fffaf4" opacity="0.8" />
        </g>
        <circle cx="55" cy="55" r="2" fill="#fffaf4" opacity="0.6" />
        <circle cx="62" cy="50" r="1.5" fill="#fffaf4" opacity="0.5" />
        <circle cx="48" cy="60" r="1.5" fill="#fffaf4" opacity="0.5" />
        <circle cx="20" cy="90" r="2" fill={color} opacity="0.3" />
        <circle cx="14" cy="98" r="1.5" fill={color} opacity="0.25" />
        <path d="M 60 55 Q 65 48, 72 52 Q 68 58, 60 55" fill={color} opacity="0.25" />
        <path d="M 40 50 Q 35 45, 30 50 Q 35 55, 40 50" fill={color} opacity="0.2" />
      </svg>
    );
  }

  if (variant === "branch") {
    return (
      <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 30 Q 50 20, 100 30 Q 150 40, 190 30" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
        <g transform="translate(40, 22)">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="-5" rx="3" ry="6" fill={color} opacity="0.5" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="2" fill="#fffaf4" opacity="0.7" />
        </g>
        <g transform="translate(120, 35)">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="-5" rx="3" ry="6" fill={color} opacity="0.5" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="2" fill="#fffaf4" opacity="0.7" />
        </g>
        <g transform="translate(170, 28)">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="-4" rx="2.5" ry="5" fill={color} opacity="0.4" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="1.5" fill="#fffaf4" opacity="0.6" />
        </g>
        <circle cx="70" cy="25" r="1.5" fill="#fffaf4" opacity="0.5" />
        <circle cx="76" cy="22" r="1" fill="#fffaf4" opacity="0.4" />
        <circle cx="95" cy="28" r="1.5" fill="#fffaf4" opacity="0.5" />
        <circle cx="150" cy="32" r="1.5" fill="#fffaf4" opacity="0.5" />
      </svg>
    );
  }

  if (variant === "small") {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g transform="translate(20, 20)">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse key={deg} cx="0" cy="-8" rx="5" ry="10" fill={color} opacity="0.6" transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#fffaf4" opacity="0.9" />
          <circle cx="0" cy="0" r="1.5" fill={color} opacity="0.4" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(50, 50)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse key={deg} cx="0" cy="-18" rx="8" ry="20" fill={color} opacity="0.6" transform={`rotate(${deg})`} />
        ))}
        {[22, 67, 112, 157, 202, 247, 292, 337].map((deg) => (
          <ellipse key={deg} cx="0" cy="-12" rx="6" ry="14" fill={color} opacity="0.4" transform={`rotate(${deg})`} />
        ))}
        <circle cx="0" cy="0" r="8" fill="#fffaf4" opacity="0.9" />
        <circle cx="0" cy="0" r="4" fill={color} opacity="0.5" />
      </g>
    </svg>
  );
}
