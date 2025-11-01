const CompanyLogo = ({ className = "w-24 h-24" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#025798" />
          <stop offset="100%" stopColor="#0374c9" />
        </linearGradient>
      </defs>
      
      {/* Hexagonal shape */}
      <path
        d="M100 10 L170 50 L170 130 L100 170 L30 130 L30 50 Z"
        fill="url(#logoGradient)"
        opacity="0.2"
      />
      
      {/* Inner hexagon */}
      <path
        d="M100 30 L150 60 L150 120 L100 150 L50 120 L50 60 Z"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Abstract symbol - representing innovation */}
      <circle cx="100" cy="100" r="25" fill="url(#logoGradient)" />
      <path
        d="M100 75 L100 55 M100 145 L100 125"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M75 100 L55 100 M145 100 L125 100"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Corner accents */}
      <circle cx="100" cy="55" r="4" fill="#025798" />
      <circle cx="100" cy="145" r="4" fill="#025798" />
      <circle cx="55" cy="100" r="4" fill="#025798" />
      <circle cx="145" cy="100" r="4" fill="#025798" />
    </svg>
  );
};

export default CompanyLogo;
