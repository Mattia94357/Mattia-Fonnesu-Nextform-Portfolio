import { label } from './icons.js';
import '../styles/about.css';

export function About() {
  return `<section class="about-section" id="about" aria-labelledby="about-title">
    ${label('ABOUT NEXTFORM')}
    <div class="about-content">
      <h2 id="about-title">Ideas into <em>digital experiences.</em></h2>
      <div class="about-copy">
        <p>NEXTFORM is an independent digital studio creating modern websites, digital products and smart solutions.</p>
        <p>Founded by Mattia Fonnesu, an IT diploma graduate and developer with hands-on experience delivering real client projects. Combining modern web technologies with AI-assisted development, NEXTFORM focuses on thoughtful design, functionality and performance.</p>
      </div>
    </div>
    <ul class="about-services" aria-label="Services">
      <li>WEB DEVELOPMENT</li>
      <li>DIGITAL PRODUCTS</li>
      <li>AI &amp; AUTOMATION</li>
    </ul>
  </section>`;
}
