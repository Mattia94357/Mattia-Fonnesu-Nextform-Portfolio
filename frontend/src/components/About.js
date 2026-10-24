import { label } from './icons.js';
import '../styles/about.css';

export function About() {
  return `<section class="about-section" id="about" aria-labelledby="about-title">
    ${label('ABOUT NEXTFORM')}
    <div class="about-content">
      <h2 id="about-title">Ideas into <em>digital experiences.</em></h2>
      <p class="about-copy">NEXTFORM creates modern websites, digital products and smart solutions that combine thoughtful design with technology. From concept to launch, the focus is on building experiences that look exceptional, perform smoothly and make an impact.</p>
    </div>
    <ul class="about-services" aria-label="Services">
      <li>WEB DEVELOPMENT</li>
      <li>DIGITAL PRODUCTS</li>
      <li>AI &amp; AUTOMATION</li>
    </ul>
  </section>`;
}
