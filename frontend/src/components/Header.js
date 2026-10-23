import { Logo } from './Logo.js';

export function Header() {
  return `<header class="header">
    <a class="wordmark" href="#" aria-label="NEXTFORM home">${Logo({ size: 'small' })}</a>
    <nav aria-label="Main navigation">
      <a href="#work">Work</a><button data-dialog="about">About</button><button data-dialog="process">Process</button><button data-dialog="contact">Contact</button>
    </nav>
    <span class="header-note"><span class="status-dot" aria-hidden="true"></span><span>DESIGNING<br>WHAT'S NEXT.</span></span>
  </header>`;
}
