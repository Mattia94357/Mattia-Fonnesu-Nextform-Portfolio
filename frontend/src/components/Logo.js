import '../styles/logo.css';

// The enclosing link or heading supplies the accessible NEXTFORM name.
// All dimensions follow the surrounding font size, including the eclipse glow.
export function Logo({ size = 'large' } = {}) {
  const variant = size === 'small' ? 'small' : 'large';
  return `<span class="brand-logo brand-logo--${variant}" aria-hidden="true">NEXTF<span class="brand-eclipse">
    <svg class="brand-palms" viewBox="0 0 100 100" fill="currentColor" focusable="false" aria-hidden="true">
      <g class="brand-palm">
        <path d="M36 90C40 73 46 52 43 33L46 32C51 52 46 76 44 91Z"/>
        <path d="M45 34C34 20 23 24 17 35C26 29 34 29 45 35ZM44 33C38 17 27 15 20 19C32 20 37 27 44 35ZM45 33C47 17 55 12 64 17C54 19 50 26 46 35ZM45 34C58 22 70 28 74 38C62 31 55 31 45 36ZM44 34C32 32 23 41 24 49C30 41 36 38 45 36ZM46 34C57 32 64 41 63 50C56 41 51 39 45 36Z"/>
        <g class="brand-coconuts"><ellipse cx="43" cy="37" rx="3" ry="3.5"/><ellipse cx="48" cy="38" rx="2.8" ry="3.2"/></g>
      </g>
      <g class="brand-palm">
        <path d="M67 92C64 80 60 65 63 52L66 52C64 66 69 82 74 92Z"/>
        <path d="M64 53C55 43 47 45 43 52C51 49 56 49 64 55ZM64 53C60 42 54 37 48 39C56 43 59 48 64 55ZM64 53C67 40 73 35 81 39C73 42 69 47 65 55ZM65 53C75 45 84 49 88 57C79 52 73 52 65 55ZM64 53C55 51 49 57 49 64C55 59 59 56 65 55ZM65 53C74 53 79 60 78 67C72 60 68 57 64 55Z"/>
        <g class="brand-coconuts"><ellipse cx="62" cy="56" rx="2.4" ry="2.8"/><ellipse cx="66" cy="56" rx="2.3" ry="2.7"/></g>
      </g>
    </svg>
  </span>RM</span>`;
}
