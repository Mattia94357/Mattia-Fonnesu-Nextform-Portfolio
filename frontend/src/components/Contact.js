import { arrow } from './icons.js';
import { enquiryEmail, enquiryMailto } from '../config/site.js';
import '../styles/studio-sections.css';

export function Contact() {
  const email = enquiryEmail();
  const mailto = enquiryMailto();
  return `<section class="studio-section contact-section" id="contact" aria-labelledby="contact-title">
    <div class="studio-intro"><span class="eyebrow">START A PROJECT</span><h2 id="contact-title">WHAT'S NEXT?</h2><p>Have an idea in mind? Let's build something worth experiencing.</p></div>
    ${email ? `<div class="contact-email-panel">
      <a class="contact-email" href="${mailto}">${email}</a>
      <div class="contact-actions"><a class="button button-light" href="${mailto}" aria-describedby="contact-delivery-note">LET'S TALK ${arrow}</a></div>
      <p class="contact-email-note" id="contact-delivery-note">Opens your email app. Review and send your message there.</p>
    </div>` : ''}
  </section>`;
}
