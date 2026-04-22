/**
 * IsoOpsDiorama — hub-and-spoke network topology illustration.
 *
 * Purely decorative SVG: monochrome engineering blueprint style with
 * one red (#e30613) accent node at the hub centre. No animation;
 * motion comes from the parent CounterCard tilt effect.
 */
export function IsoOpsDiorama({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Isometric dot-grid pattern */}
        <pattern id="iso-dots" x="0" y="0" width="20" height="11.55" patternUnits="userSpaceOnUse">
          <circle cx="0"  cy="0"     r="0.9" fill="rgba(5,5,5,0.07)" />
          <circle cx="10" cy="5.77"  r="0.9" fill="rgba(5,5,5,0.07)" />
          <circle cx="20" cy="11.55" r="0.9" fill="rgba(5,5,5,0.07)" />
        </pattern>
      </defs>

      {/* Background isometric grid */}
      <rect width="400" height="300" fill="url(#iso-dots)" />

      {/* ── Connection lines (drawn behind nodes) ── */}
      <line x1="113" y1="80"  x2="163" y2="140" stroke="rgba(5,5,5,0.07)" strokeWidth="1.5" strokeDasharray="5 3.5" />
      <line x1="104" y1="230" x2="163" y2="168" stroke="rgba(5,5,5,0.07)" strokeWidth="1.5" strokeDasharray="5 3.5" />
      <line x1="290" y1="72"  x2="238" y2="138" stroke="rgba(5,5,5,0.07)" strokeWidth="1.5" strokeDasharray="5 3.5" />
      <line x1="287" y1="238" x2="237" y2="168" stroke="rgba(5,5,5,0.07)" strokeWidth="1.5" strokeDasharray="5 3.5" />

      {/* Midpoint relay nodes on lines */}
      <circle cx="138" cy="110" r="3" fill="rgba(5,5,5,0.10)" />
      <circle cx="133" cy="199" r="3" fill="rgba(5,5,5,0.10)" />
      <circle cx="264" cy="105" r="3" fill="rgba(5,5,5,0.10)" />
      <circle cx="262" cy="203" r="3" fill="rgba(5,5,5,0.10)" />

      {/* ── Hub centre (x=200, y=155) ── */}
      {/* Outer orbit dashed ring */}
      <circle cx="200" cy="155" r="60" stroke="rgba(5,5,5,0.05)" strokeWidth="1" strokeDasharray="7 5" />
      {/* Inner solid ring */}
      <circle cx="200" cy="155" r="43" stroke="rgba(5,5,5,0.09)" strokeWidth="1" />
      {/* Hub disc */}
      <circle cx="200" cy="155" r="28" fill="rgba(5,5,5,0.03)" stroke="rgba(5,5,5,0.11)" strokeWidth="1" />
      {/* Red accent glow halo */}
      <circle cx="200" cy="155" r="14" fill="rgba(227,6,19,0.09)" />
      {/* Red accent centre node */}
      <circle cx="200" cy="155" r="6.5" fill="#e30613" opacity="0.92" />
      {/* Hub label */}
      <text x="200" y="195" textAnchor="middle" fontFamily="var(--font-ibm-plex-mono,monospace)" fontSize="6.5" fontWeight="500" letterSpacing="2" fill="rgba(5,5,5,0.32)">MANAGED IT</text>

      {/* ── Server node (top-left, x=85, y=80) ── */}
      <circle cx="85" cy="80" r="31" fill="rgba(5,5,5,0.03)" stroke="rgba(5,5,5,0.10)" strokeWidth="1" />
      {/* Server stack icon: 3 modules */}
      <rect x="68" y="65" width="34" height="8" rx="2" fill="rgba(5,5,5,0.04)" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      <rect x="68" y="76" width="34" height="8" rx="2" fill="rgba(5,5,5,0.04)" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      <rect x="68" y="87" width="34" height="8" rx="2" fill="rgba(5,5,5,0.04)" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      {/* Status LED dots */}
      <circle cx="97" cy="69.5" r="1.8" fill="rgba(5,5,5,0.22)" />
      <circle cx="97" cy="80.5" r="1.8" fill="rgba(5,5,5,0.22)" />
      <circle cx="97" cy="91.5" r="1.8" fill="rgba(5,5,5,0.22)" />
      {/* Label */}
      <text x="85" y="123" textAnchor="middle" fontFamily="var(--font-ibm-plex-mono,monospace)" fontSize="6.5" fontWeight="500" letterSpacing="2" fill="rgba(5,5,5,0.30)">SERVER</text>

      {/* ── Backup / storage node (bottom-left, x=80, y=230) ── */}
      <circle cx="80" cy="228" r="27" fill="rgba(5,5,5,0.03)" stroke="rgba(5,5,5,0.10)" strokeWidth="1" />
      {/* Cylinder icon — top ellipse */}
      <ellipse cx="80" cy="222" rx="13" ry="5" stroke="rgba(5,5,5,0.17)" strokeWidth="1" fill="rgba(5,5,5,0.04)" />
      {/* Cylinder sides */}
      <line x1="67" y1="222" x2="67" y2="232" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      <line x1="93" y1="222" x2="93" y2="232" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      {/* Bottom ellipse */}
      <ellipse cx="80" cy="232" rx="13" ry="5" stroke="rgba(5,5,5,0.17)" strokeWidth="1" fill="rgba(5,5,5,0.04)" />
      {/* Label */}
      <text x="80" y="265" textAnchor="middle" fontFamily="var(--font-ibm-plex-mono,monospace)" fontSize="6.5" fontWeight="500" letterSpacing="2" fill="rgba(5,5,5,0.30)">BACKUP</text>

      {/* ── Cloud node (top-right, x=320, y=70) ── */}
      <circle cx="320" cy="70" r="31" fill="rgba(5,5,5,0.03)" stroke="rgba(5,5,5,0.10)" strokeWidth="1" />
      {/* Cloud icon: overlapping circles */}
      <circle cx="309" cy="74" r="9"  fill="rgba(5,5,5,0.05)" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      <circle cx="320" cy="67" r="12" fill="rgba(5,5,5,0.05)" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      <circle cx="331" cy="74" r="9"  fill="rgba(5,5,5,0.05)" stroke="rgba(5,5,5,0.17)" strokeWidth="1" />
      {/* Cloud base cover line */}
      <rect x="303" y="74" width="34" height="6" fill="rgba(247,245,242,0.80)" stroke="none" />
      <line x1="302" y1="79" x2="338" y2="79" stroke="rgba(5,5,5,0.07)" strokeWidth="0.5" />
      {/* Label */}
      <text x="320" y="113" textAnchor="middle" fontFamily="var(--font-ibm-plex-mono,monospace)" fontSize="6.5" fontWeight="500" letterSpacing="2" fill="rgba(5,5,5,0.30)">CLOUD</text>

      {/* ── Security / shield node (bottom-right, x=315, y=240) ── */}
      <circle cx="315" cy="238" r="29" fill="rgba(5,5,5,0.03)" stroke="rgba(5,5,5,0.10)" strokeWidth="1" />
      {/* Shield path */}
      <path
        d="M315 222 C304 226 299 235 299 245 C299 255 307 263 315 267 C323 263 331 255 331 245 C331 235 326 226 315 222 Z"
        fill="rgba(5,5,5,0.05)"
        stroke="rgba(5,5,5,0.17)"
        strokeWidth="1"
      />
      {/* Lock body */}
      <rect x="309" y="240" width="12" height="10" rx="1.5" fill="rgba(5,5,5,0.06)" stroke="rgba(5,5,5,0.20)" strokeWidth="1" />
      {/* Lock shackle */}
      <path d="M311 240 C311 235.5 319 235.5 319 240" stroke="rgba(5,5,5,0.20)" strokeWidth="1.2" fill="none" />
      {/* Keyhole dot */}
      <circle cx="315" cy="246" r="1.5" fill="rgba(5,5,5,0.22)" />
      {/* Label */}
      <text x="315" y="276" textAnchor="middle" fontFamily="var(--font-ibm-plex-mono,monospace)" fontSize="6.5" fontWeight="500" letterSpacing="2" fill="rgba(5,5,5,0.30)">SECURITY</text>
    </svg>
  );
}
