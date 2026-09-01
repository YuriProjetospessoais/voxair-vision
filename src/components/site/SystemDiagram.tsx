/**
 * Diagrama técnico do sistema integrado VoxAir (SVG, sem stock photo).
 * Drones + Dock + Software + Dados.
 */
export function SystemDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 360"
      className={className}
      role="img"
      aria-label="Diagrama do sistema VoxAir: software de missão coordena a frota de drones, que opera a partir do Dock e retorna dados de aplicação"
    >
      <defs>
        <pattern id="vx-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="560" height="360" fill="url(#vx-grid)" className="text-border" />

      {/* Software */}
      <g className="text-border">
        <rect
          x="180"
          y="24"
          width="200"
          height="56"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text x="280" y="48" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600">
          Software de missão
        </text>
        <text x="280" y="66" textAnchor="middle" className="fill-muted-foreground" fontSize="11">
          planejamento e coordenação
        </text>
      </g>

      {/* Linhas software -> drones */}
      <g stroke="currentColor" className="text-border dash-flow" strokeWidth="1.5" fill="none">
        <path d="M230 80 L120 150" />
        <path d="M280 80 L280 150" />
        <path d="M330 80 L440 150" />
      </g>

      {/* Drones */}
      {[120, 280, 440].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={172} r="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-border" />
          <circle cx={x} cy={172} r="5" className="fill-accent" />
          <line x1={x - 16} y1={158} x2={x + 16} y2={186} stroke="currentColor" strokeWidth="1.2" className="text-border" />
          <line x1={x + 16} y1={158} x2={x - 16} y2={186} stroke="currentColor" strokeWidth="1.2" className="text-border" />
          <text x={x} y={214} textAnchor="middle" className="fill-muted-foreground" fontSize="11">
            Drone {i + 1}
          </text>
        </g>
      ))}

      {/* Dock */}
      <g className="text-border">
        <rect x="80" y="252" width="180" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="170" y="278" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600">
          Dock
        </text>
        <text x="170" y="296" textAnchor="middle" className="fill-muted-foreground" fontSize="11">
          recarga e preparação
        </text>
      </g>

      {/* Dados */}
      <g className="text-border">
        <rect x="300" y="252" width="180" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="390" y="278" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="600">
          Dados de operação
        </text>
        <text x="390" y="296" textAnchor="middle" className="fill-muted-foreground" fontSize="11">
          registro e acompanhamento
        </text>
      </g>

      <g stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none">
        <path d="M120 196 L120 252" />
        <path d="M440 196 L440 252" />
        <path d="M280 196 L280 252" strokeDasharray="4 6" />
      </g>
    </svg>
  );
}
