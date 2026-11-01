import { label } from './icons.js';
import '../styles/about.css';

export function About() {
  return `<section class="about-section" id="about" aria-labelledby="about-title">
    ${label('ABOUT NEXTFORM')}
    <div class="about-content">
      <h2 id="about-title">Ideas into <em>digital experiences.</em></h2>
      <div class="about-copy">
        <p>NEXTFORM is an independent digital studio helping businesses and independent professionals build a stronger online presence.</p>
        <p>Through modern websites, thoughtful design and smart digital solutions, we turn ideas into professional experiences that build credibility, improve visibility and support real business goals.</p>
      </div>
    </div>
    <ul class="about-services" aria-label="Services">
      <li>WEB DEVELOPMENT</li>
      <li>DIGITAL PRODUCTS</li>
      <li>AI &amp; AUTOMATION</li>
    </ul>
  </section>`;
}
