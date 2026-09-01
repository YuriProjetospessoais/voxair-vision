export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={invert ? "text-deep-foreground" : "text-primary"}
      >
        <rect
          x="2.5"
          y="2.5"
          width="27"
          height="27"
          rx="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 10.5 16 22l7-11.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="9" r="2.1" className="fill-accent" />
      </svg>
      <span
        className={`font-display text-[15px] font-semibold tracking-tight ${
          invert ? "text-deep-foreground" : "text-foreground"
        }`}
      >
        VoxAir <span className="font-normal opacity-70">Systems</span>
      </span>
    </span>
  );
}
