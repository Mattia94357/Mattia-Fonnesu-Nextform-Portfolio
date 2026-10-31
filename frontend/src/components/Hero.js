import { arrow, label } from './icons.js';
import heroImage from '../assets/images/nextform-hero.png';

export function Hero() {
  return `<section class="hero" aria-labelledby="hero-title">
    <img decoding="async" class="hero-art" src="${heroImage}" alt="Sculptural chrome android lit by the cool blue curve of a planetary horizon" fetchpriority="high" width="1942" height="809">
    <div class="hero-shade" aria-hidden="true"></div>
    <div class="hero-copy">
      ${label('DIGITAL STUDIO')}<span class="label-rule" aria-hidden="true"></span>
      <h1 class="hero-headline" id="hero-title"><span>Building</span> <span>what's next.</span></h1>
      <p class="hero-description">Websites, products and digital experiences.</p>
      <div class="hero-actions">
        <a class="button button-light" href="#work">VIEW WORK ${arrow}</a>
        <a class="project-button" href="#contact"><span class="project-link-label">START A PROJECT</span> <span class="project-link-arrow" aria-hidden="true">→</span></a>
      </div>
    </div>
    <div class="hero-index" aria-hidden="true"><span class="index-line"></span><span class="active">01</span><span>02</span><span>03</span></div>
    <div class="hero-bottom">
      <div class="disciplines"><span class="discipline-number">01</span><span>STRATEGY<br>DESIGN<br>DEVELOPMENT</span></div>
      <p class="human-note"><span class="crosshair" aria-hidden="true"></span><span>HUMAN CREATIVITY<br>MEETS EMERGING<br>TECHNOLOGY.</span></p>
    </div>
  </section>`;
}
