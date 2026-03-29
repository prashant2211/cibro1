/**
 * Custom mark: compass in an orbit — suggests “finding your way back.”
 */
export function NotFoundLogo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="nf-logo-ring"
          x1="8"
          y1="20"
          x2="112"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f4d58d" />
          <stop offset="0.45" stopColor="#ee6c4d" />
          <stop offset="1" stopColor="#7b68ee" />
        </linearGradient>
        <linearGradient id="nf-logo-needle" x1="60" y1="28" x2="60" y2="92">
          <stop stopColor="#fff8e7" />
          <stop offset="1" stopColor="#c9b8ff" />
        </linearGradient>
        <filter id="nf-logo-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="60"
        cy="60"
        r="52"
        stroke="url(#nf-logo-ring)"
        strokeWidth="2.5"
        strokeDasharray="8 14"
        opacity="0.95"
        className="not-found-logo__orbit"
      />
      <circle
        cx="60"
        cy="60"
        r="44"
        stroke="url(#nf-logo-ring)"
        strokeWidth="0.75"
        opacity="0.35"
      />
      <g filter="url(#nf-logo-glow)" className="not-found-logo__compass">
        <circle cx="60" cy="60" r="10" fill="#0d1117" stroke="url(#nf-logo-ring)" strokeWidth="1.2" />
        <path
          d="M60 36 L68 60 L60 84 L52 60 Z"
          fill="url(#nf-logo-needle)"
          opacity="0.92"
        />
        <circle cx="60" cy="60" r="3" fill="#0d1117" />
      </g>
      <circle cx="92" cy="32" r="3" fill="#f4d58d" opacity="0.85" className="not-found-logo__star" />
      <circle cx="24" cy="78" r="2" fill="#7b68ee" opacity="0.7" className="not-found-logo__star not-found-logo__star--delay" />
    </svg>
  )
}
