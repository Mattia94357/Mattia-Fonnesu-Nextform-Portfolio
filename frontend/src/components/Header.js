import { Logo } from './Logo.js';

export function Header() {
  return `<header class="header">
    <a class="wordmark" href="#" aria-label="NEXTFORM home">${Logo({ size: 'small' })}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation" aria-label="Open navigation"><span>MENU</span><span class="menu-toggle-icon" aria-hidden="true"></span></button>
    <nav id="main-navigation" aria-label="Main navigation">
      <a href="#work">Work</a><a href="#about">About</a><button data-dialog="process">Process</button><button data-dialog="contact">Contact</button>
    </nav>
    <span class="header-note"><span class="status-dot" aria-hidden="true"></span><span>DESIGNING<br>WHAT'S NEXT.</span></span>
  </header>`;
}
