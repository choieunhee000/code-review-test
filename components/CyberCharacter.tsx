/* Cyberpunk Warrior — fixed right-side decorative element */
export default function CyberCharacter() {
  const C = "#00e5ff";   // cyan
  const M = "#ff0090";   // magenta
  const G = "#39ff14";   // green
  const BG = "#080816";  // dark fill

  const floatStyle = { animation: "cyberFloat 5s ease-in-out infinite" };
  const pulseC = { animation: "cyberPulseC 2s ease-in-out infinite" };
  const pulseM = { animation: "cyberPulseM 1.8s ease-in-out infinite" };

  const gcId = "gc-warrior";
  const gmId = "gm-warrior";

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none"
      style={{ zIndex: 2, width: 170, opacity: 0.78 }}
    >
      <svg
        viewBox="0 0 200 430"
        xmlns="http://www.w3.org/2000/svg"
        width="170"
        overflow="hidden"
      >
        <defs>
          <filter id={gcId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={gmId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Floating group ── */}
        <g style={floatStyle}>

          {/* ══ HEAD ══ */}
          <rect x="44" y="8" width="82" height="66" rx="3"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Head detail lines */}
          <line x1="44" y1="22" x2="126" y2="22" stroke={C} strokeWidth="0.5" opacity="0.3" />
          <line x1="44" y1="58" x2="126" y2="58" stroke={C} strokeWidth="0.5" opacity="0.3" />
          {/* Corner brackets */}
          <polyline points="44,8 52,8 52,16" fill="none" stroke={M} strokeWidth="1.8" filter={`url(#${gmId})`} style={pulseM} />
          <polyline points="118,8 126,8 126,16" fill="none" stroke={M} strokeWidth="1.8" filter={`url(#${gmId})`} style={pulseM} />

          {/* VISOR */}
          <rect x="39" y="25" width="92" height="22" rx="2"
            fill={C} fillOpacity="0.1" stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Eyes */}
          <circle cx="62" cy="36" r="7" fill={C} opacity="0.85" filter={`url(#${gcId})`} style={pulseC} />
          <circle cx="108" cy="36" r="7" fill={C} opacity="0.85" filter={`url(#${gcId})`} style={pulseC} />
          <circle cx="62" cy="36" r="2.5" fill="white" opacity="0.95" style={{ animation: "cyberBlink 4s ease-in-out infinite" }} />
          <circle cx="108" cy="36" r="2.5" fill="white" opacity="0.95" style={{ animation: "cyberBlink 4s ease-in-out infinite 0.3s" }} />

          {/* Mouth grille */}
          <rect x="57" y="53" width="56" height="12" rx="1" fill="none" stroke={C} strokeWidth="1" opacity="0.45" />
          {[66, 75, 84, 93, 102].map((x) => (
            <line key={x} x1={x} y1="53" x2={x} y2="65" stroke={C} strokeWidth="0.5" opacity="0.45" />
          ))}

          {/* ══ NECK ══ */}
          <rect x="66" y="74" width="38" height="22" rx="0"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {[74, 85, 96].map((x) => (
            <line key={x} x1={x} y1="74" x2={x} y2="96" stroke={C} strokeWidth="0.5" opacity="0.3" />
          ))}

          {/* ══ SHOULDERS ══ */}
          <polygon points="4,92 56,90 50,126 0,122"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <polygon points="114,90 166,92 170,122 120,126"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Shoulder accents */}
          <line x1="10" y1="107" x2="44" y2="105" stroke={M} strokeWidth="1.8" filter={`url(#${gmId})`} style={pulseM} />
          <line x1="126" y1="105" x2="160" y2="107" stroke={M} strokeWidth="1.8" filter={`url(#${gmId})`} style={pulseM} />
          <line x1="10" y1="115" x2="44" y2="113" stroke={M} strokeWidth="0.8" opacity="0.4" />
          <line x1="126" y1="113" x2="160" y2="115" stroke={M} strokeWidth="0.8" opacity="0.4" />

          {/* ══ CHEST / TORSO ══ */}
          <polygon points="50,94 120,94 128,216 42,216"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Inner chest panel */}
          <polygon points="62,108 108,108 114,155 56,155"
            fill="none" stroke={C} strokeWidth="0.7" opacity="0.35" />

          {/* Energy core */}
          <circle cx="85" cy="150" fill={M} fillOpacity="0.06" stroke={M} strokeWidth="1" filter={`url(#${gmId})`}>
            <animate attributeName="r" values="13;17;13" dur="2s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.06;0.2;0.06" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="150" r="9" fill={M} fillOpacity="0.18" stroke={M} strokeWidth="1.5" filter={`url(#${gmId})`} style={pulseM} />
          <circle cx="85" cy="150" r="4" fill={M} opacity="0.92" filter={`url(#${gmId})`}>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
          </circle>
          {/* Radiating energy lines */}
          <line x1="85" y1="141" x2="85" y2="108" stroke={M} strokeWidth="0.9" opacity="0.5" filter={`url(#${gmId})`} />
          <line x1="77" y1="145" x2="62" y2="130" stroke={M} strokeWidth="0.9" opacity="0.5" filter={`url(#${gmId})`} />
          <line x1="93" y1="145" x2="108" y2="130" stroke={M} strokeWidth="0.9" opacity="0.5" filter={`url(#${gmId})`} />

          {/* Chest scan lines */}
          {[170, 185, 200].map((y) => (
            <line key={y} x1={44 + (y - 94) * 0.07} y1={y} x2={126 - (y - 94) * 0.07} y2={y}
              stroke={C} strokeWidth="0.5" opacity="0.25" />
          ))}

          {/* ══ LEFT ARM ══ */}
          <polygon points="50,96 26,104 8,182 28,190"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <polygon points="28,190 8,182 4,252 24,258"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <rect x="2" y="256" width="28" height="22" rx="2"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Left arm accents */}
          <line x1="14" y1="130" x2="22" y2="130" stroke={M} strokeWidth="1.2" opacity="0.55" filter={`url(#${gmId})`} />
          <line x1="10" y1="155" x2="18" y2="155" stroke={M} strokeWidth="1.2" opacity="0.55" filter={`url(#${gmId})`} />

          {/* ══ RIGHT ARM ══ */}
          <polygon points="120,96 144,104 162,182 142,190"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <polygon points="142,190 162,182 166,252 146,258"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <rect x="140" y="256" width="28" height="22" rx="2"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Right arm accents */}
          <line x1="148" y1="130" x2="156" y2="130" stroke={M} strokeWidth="1.2" opacity="0.55" filter={`url(#${gmId})`} />
          <line x1="152" y1="155" x2="160" y2="155" stroke={M} strokeWidth="1.2" opacity="0.55" filter={`url(#${gmId})`} />

          {/* ══ KATANA ══ */}
          {/* Handle */}
          <rect x="152" y="230" width="14" height="48" rx="2"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {[238, 248, 258, 268].map((y) => (
            <line key={y} x1="152" y1={y} x2="166" y2={y} stroke={C} strokeWidth="1" opacity="0.4" />
          ))}
          {/* Guard */}
          <rect x="146" y="276" width="26" height="8" rx="1"
            fill={C} fillOpacity="0.75" stroke={C} strokeWidth="1" filter={`url(#${gcId})`} />
          {/* Blade outer glow */}
          <line x1="159" y1="276" x2="156" y2="8"
            stroke={M} strokeWidth="9" opacity="0.1" filter={`url(#${gmId})`} />
          {/* Blade body */}
          <line x1="159" y1="276" x2="156" y2="8"
            stroke={M} strokeWidth="2.2" filter={`url(#${gmId})`} style={pulseM} />
          {/* Blade edge */}
          <line x1="163" y1="276" x2="160" y2="8"
            stroke={M} strokeWidth="0.8" opacity="0.35" />
          {/* Tip glow */}
          <circle cx="157" cy="10" r="3" fill={M} filter={`url(#${gmId})`}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* ══ WAIST ══ */}
          <rect x="44" y="214" width="82" height="18" rx="0"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <rect x="73" y="216" width="24" height="14" rx="1"
            fill="none" stroke={M} strokeWidth="1.5" filter={`url(#${gmId})`} style={pulseM} />
          <line x1="85" y1="216" x2="85" y2="230" stroke={M} strokeWidth="0.8" opacity="0.4" />

          {/* ══ LEGS ══ */}
          <polygon points="46,232 82,232 78,362 38,362"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <polygon points="88,232 124,232 130,362 92,362"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />

          {/* Knee pads */}
          <rect x="36" y="286" width="42" height="20" rx="1"
            fill="none" stroke={M} strokeWidth="1.5" filter={`url(#${gmId})`} style={pulseM} />
          <line x1="42" y1="296" x2="72" y2="296" stroke={M} strokeWidth="0.6" opacity="0.4" />
          <rect x="90" y="286" width="42" height="20" rx="1"
            fill="none" stroke={M} strokeWidth="1.5" filter={`url(#${gmId})`} style={pulseM} />
          <line x1="96" y1="296" x2="126" y2="296" stroke={M} strokeWidth="0.6" opacity="0.4" />

          {/* Leg circuit lines */}
          {[322, 342].map((y) => (
            <>
              <line key={`l${y}`} x1="42" y1={y} x2="74" y2={y} stroke={C} strokeWidth="0.5" opacity="0.28" />
              <line key={`r${y}`} x1="96" y1={y} x2="126" y2={y} stroke={C} strokeWidth="0.5" opacity="0.28" />
            </>
          ))}

          {/* ══ BOOTS ══ */}
          <polygon points="38,362 78,362 74,412 28,412"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          <polygon points="92,362 130,362 136,412 88,412"
            fill={BG} stroke={C} strokeWidth="1.5" filter={`url(#${gcId})`} style={pulseC} />
          {/* Boot soles */}
          <line x1="28" y1="398" x2="74" y2="398" stroke={C} strokeWidth="0.8" opacity="0.4" />
          <line x1="88" y1="398" x2="136" y2="398" stroke={C} strokeWidth="0.8" opacity="0.4" />
          {/* Boot accents */}
          <line x1="28" y1="374" x2="50" y2="372" stroke={M} strokeWidth="1" opacity="0.5" filter={`url(#${gmId})`} />
          <line x1="108" y1="372" x2="130" y2="374" stroke={M} strokeWidth="1" opacity="0.5" filter={`url(#${gmId})`} />

          {/* ══ HOLOGRAM SCAN LINE ══ */}
          <rect x="0" y="-3" width="200" height="3"
            fill={G} opacity="0.35"
            style={{ animation: "cyberScan 4.5s linear infinite" }} />
        </g>
      </svg>

      {/* Drone — hovers below the warrior */}
      <svg
        viewBox="0 0 120 60"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        className="mx-auto mt-4"
        style={{ animation: "cyberDroneFloat 3.5s ease-in-out infinite" }}
        overflow="hidden"
      >
        <defs>
          <filter id="gd" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Drone body */}
        <polygon points="60,12 80,28 72,48 48,48 40,28"
          fill={BG} stroke={C} strokeWidth="1.5" filter="url(#gd)" />
        {/* Central lens */}
        <circle cx="60" cy="32" r="8" fill={M} fillOpacity="0.15" stroke={M} strokeWidth="1.2" filter="url(#gd)">
          <animate attributeName="r" values="7;9;7" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="32" r="3" fill={M} opacity="0.9" filter="url(#gd)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
        </circle>
        {/* Rotor arms */}
        <line x1="40" y1="20" x2="24" y2="10" stroke={C} strokeWidth="1.2" opacity="0.7" filter="url(#gd)" />
        <line x1="80" y1="20" x2="96" y2="10" stroke={C} strokeWidth="1.2" opacity="0.7" filter="url(#gd)" />
        <line x1="38" y1="44" x2="22" y2="54" stroke={C} strokeWidth="1.2" opacity="0.7" filter="url(#gd)" />
        <line x1="82" y1="44" x2="98" y2="54" stroke={C} strokeWidth="1.2" opacity="0.7" filter="url(#gd)" />
        {/* Rotors */}
        {[
          [24, 10], [96, 10], [22, 54], [98, 54],
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="10" ry="3"
            fill="none" stroke={C} strokeWidth="1" opacity="0.65" filter="url(#gd)">
            <animateTransform attributeName="transform" type="rotate"
              from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`}
              dur={`${0.3 + i * 0.05}s`} repeatCount="indefinite" />
          </ellipse>
        ))}
        {/* Targeting lines */}
        <line x1="48" y1="32" x2="36" y2="32" stroke={C} strokeWidth="0.8" opacity="0.5" />
        <line x1="72" y1="32" x2="84" y2="32" stroke={C} strokeWidth="0.8" opacity="0.5" />
        <line x1="60" y1="20" x2="60" y2="12" stroke={C} strokeWidth="0.8" opacity="0.5" />
      </svg>
    </div>
  );
}
