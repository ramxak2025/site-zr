export default function AnimatedBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle - top left */}
      <svg
        className="absolute -top-20 -left-20 w-72 h-72 animate-float-1 opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="#e11d24" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="60" stroke="#e11d24" strokeWidth="0.5" />
      </svg>

      {/* Hexagon - top right */}
      <svg
        className="absolute top-24 right-16 w-40 h-40 animate-float-2 opacity-[0.05]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
          stroke="#e11d24"
          strokeWidth="1"
        />
      </svg>

      {/* Gear outline - center left */}
      <svg
        className="absolute top-1/3 -left-10 w-56 h-56 animate-spin-slow opacity-[0.04]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 20 L54 20 L56 12 L60 12 L62 20 L66 22 L72 16 L76 18 L72 26 L74 30 L82 28 L84 32 L76 36 L76 40 L84 42 L84 46 L76 48 L74 52 L82 56 L80 60 L72 58 L68 62 L72 70 L68 72 L62 66 L58 68 L60 76 L56 76 L54 68 L50 68 L48 76 L44 76 L42 68 L38 66 L32 72 L28 70 L32 62 L28 58 L20 60 L18 56 L26 52 L24 48 L16 46 L16 42 L24 40 L24 36 L16 32 L18 28 L26 30 L28 26 L24 18 L28 16 L34 22 L38 20 L36 12 L40 12 L42 20 L46 20 L48 12 L52 12 Z"
          stroke="#9ca3af"
          strokeWidth="0.8"
        />
        <circle cx="50" cy="44" r="12" stroke="#9ca3af" strokeWidth="0.8" />
      </svg>

      {/* Wrench outline - right side */}
      <svg
        className="absolute top-2/3 right-24 w-32 h-32 animate-drift opacity-[0.05]"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M18 46 L40 24 C38 20 38 14 42 10 C46 6 52 6 56 8 L48 16 L48 22 L54 22 L62 14 C64 18 64 24 60 28 C56 32 50 32 46 30 L24 52 C22 54 18 54 16 52 C14 50 14 46 16 44 Z"
          stroke="#e11d24"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>

      {/* Small circle - bottom left */}
      <svg
        className="absolute bottom-32 left-1/4 w-24 h-24 animate-float-3 opacity-[0.07]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="#e11d24" strokeWidth="1" />
      </svg>

      {/* Gas pump outline - center right */}
      <svg
        className="absolute top-1/4 right-1/3 w-28 h-28 animate-float-2 opacity-[0.04]"
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect x="10" y="18" width="28" height="36" rx="2" stroke="#9ca3af" strokeWidth="1" />
        <rect x="16" y="24" width="16" height="10" rx="1" stroke="#9ca3af" strokeWidth="0.8" />
        <path d="M38 26 L46 18 L50 22 L46 30 L46 44 C46 46 48 48 50 48 C52 48 54 46 54 44 L54 30" stroke="#9ca3af" strokeWidth="1" strokeLinecap="round" />
        <rect x="18" y="10" width="12" height="8" rx="1" stroke="#9ca3af" strokeWidth="0.8" />
      </svg>

      {/* Dotted circle - bottom right */}
      <svg
        className="absolute -bottom-16 right-1/4 w-48 h-48 animate-float-1 opacity-[0.05]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="#e11d24" strokeWidth="0.8" strokeDasharray="4 6" />
      </svg>

      {/* Small hexagon - mid left */}
      <svg
        className="absolute top-1/2 left-16 w-20 h-20 animate-drift opacity-[0.06]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,10 87,30 87,70 50,90 13,70 13,30"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
