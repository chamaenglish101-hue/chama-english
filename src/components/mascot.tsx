import { useId } from "react"

export type Mood =
  | "feliz"
  | "animado"
  | "comemorando"
  | "pensando"
  | "dormindo"
  | "triste"

interface ChamaProps {
  mood?: Mood
  size?: number
  className?: string
  float?: boolean
  title?: string
}

/**
 * Chama — a blue flame mascot with round glasses.
 * Drawn as inline SVG so it stays crisp, themable and light in WebView.
 */
export function Chama({
  mood = "feliz",
  size = 132,
  className,
  float = true,
  title,
}: ChamaProps) {
  const raw = useId()
  const uid = raw.replace(/[^a-zA-Z0-9]/g, "")
  const body = `chama-body-${uid}`
  const halo = `chama-halo-${uid}`

  const sleep = mood === "dormindo"
  const openMouth = mood === "animado" || mood === "comemorando"
  const sad = mood === "triste"

  return (
    <svg
      viewBox="0 0 160 196"
      width={size}
      height={(size * 196) / 160}
      role="img"
      aria-label={title ?? "Chama, a chama azul mascote do app"}
      className={className}
    >
      <defs>
        <linearGradient id={body} x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="var(--flame-1)" />
          <stop offset="52%" stopColor="var(--flame-2)" />
          <stop offset="100%" stopColor="var(--flame-3)" />
        </linearGradient>
        <radialGradient id={halo} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--flame-glow)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--flame-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className={float ? "chama-float" : undefined}>
        <ellipse
          className="chama-glow"
          cx="80"
          cy="182"
          rx="52"
          ry="14"
          fill={`url(#${halo})`}
        />

        {/* main flame */}
        <path
          d="M80 14 C 66 48 44 68 38 100 C 30 136 52 174 80 174 C 108 174 130 136 122 100 C 116 68 94 48 80 14 Z"
          fill={`url(#${body})`}
        />

        {/* inner glow that flickers */}
        <path
          className="chama-flicker"
          d="M80 66 C 73 84 62 94 60 112 C 57 134 68 152 80 152 C 92 152 103 134 100 112 C 98 94 87 84 80 66 Z"
          fill="#E0F2FE"
          opacity="0.5"
        />

        {/* sparks */}
        <path
          className="chama-twinkle"
          d="M134 46 l3.6 9.4 9.4 3.6 -9.4 3.6 -3.6 9.4 -3.6 -9.4 -9.4 -3.6 9.4 -3.6 z"
          fill="var(--flame-1)"
        />
        <path
          className="chama-twinkle"
          style={{ animationDelay: "0.9s" }}
          d="M24 66 l2.8 7.4 7.4 2.8 -7.4 2.8 -2.8 7.4 -2.8 -7.4 -7.4 -2.8 7.4 -2.8 z"
          fill="var(--flame-3)"
        />

        {/* blush */}
        <ellipse
          cx="45"
          cy="133"
          rx="9"
          ry="5.5"
          fill="var(--destructive)"
          opacity="0.35"
        />
        <ellipse
          cx="115"
          cy="133"
          rx="9"
          ry="5.5"
          fill="var(--destructive)"
          opacity="0.35"
        />

        {/* glasses */}
        <circle cx="64" cy="112" r="15.5" fill="#F8FAFC" opacity="0.85" />
        <circle cx="96" cy="112" r="15.5" fill="#F8FAFC" opacity="0.85" />
        <path
          d="M79.5 110 q0.5 -3 1 0"
          stroke="#0B1220"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {sleep ? (
          <g stroke="#0B1220" strokeWidth="4" strokeLinecap="round" fill="none">
            <path d="M56 112 q8 -8 16 0" />
            <path d="M88 112 q8 -8 16 0" />
          </g>
        ) : (
          <g className="chama-blink">
            <circle cx="65" cy="112" r="7.5" fill="#0B1220" />
            <circle cx="97" cy="112" r="7.5" fill="#0B1220" />
            <circle cx="67.6" cy="109.4" r="2.4" fill="#FFFFFF" />
            <circle cx="99.6" cy="109.4" r="2.4" fill="#FFFFFF" />
          </g>
        )}

        {/* frames on top of the lenses */}
        <g stroke="#0B1220" strokeWidth="4.6" fill="none" opacity="0.9">
          <circle cx="64" cy="112" r="15.5" />
          <circle cx="96" cy="112" r="15.5" />
          <path d="M50 106 l-9 -4" strokeLinecap="round" />
          <path d="M110 106 l9 -4" strokeLinecap="round" />
        </g>
        <path
          d="M55 104 q5 -5 10 -4"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.8"
          fill="none"
        />
        <path
          d="M87 104 q5 -5 10 -4"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.8"
          fill="none"
        />

        {/* mouth */}
        {sleep ? (
          <ellipse
            cx="80"
            cy="136"
            rx="4"
            ry="5"
            fill="#0B1220"
            opacity="0.8"
          />
        ) : openMouth ? (
          <g>
            <path d="M66 130 Q80 150 94 130 Z" fill="#0B1220" />
            <path
              d="M73 138 Q80 146 87 138 Z"
              fill="var(--destructive)"
              opacity="0.8"
            />
          </g>
        ) : sad ? (
          <path
            d="M69 140 Q80 130 91 140"
            stroke="#0B1220"
            strokeWidth="4.4"
            strokeLinecap="round"
            fill="none"
          />
        ) : mood === "pensando" ? (
          <path
            d="M72 135 h16"
            stroke="#0B1220"
            strokeWidth="4.4"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          <path
            d="M68 131 Q80 143 92 131"
            stroke="#0B1220"
            strokeWidth="4.4"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {mood === "comemorando" && (
          <path
            className="chama-twinkle"
            style={{ animationDelay: "0.4s" }}
            d="M80 2 l2.6 7 7 2.6 -7 2.6 -2.6 7 -2.6 -7 -7 -2.6 7 -2.6 z"
            fill="var(--warning)"
          />
        )}
      </g>

      {sleep && (
        <g
          fill="var(--flame-2)"
          fontSize="17"
          fontWeight="700"
          fontFamily="var(--font-display)"
        >
          <text x="124" y="60" className="chama-twinkle">
            z
          </text>
          <text
            x="138"
            y="42"
            className="chama-twinkle"
            style={{ animationDelay: "0.7s" }}
          >
            z
          </text>
        </g>
      )}
    </svg>
  )
}

export default Chama
