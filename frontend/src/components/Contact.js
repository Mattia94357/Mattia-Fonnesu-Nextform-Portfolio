import { arrow } from './icons.js';
import { enquiryEmail } from '../config/site.js';
import '../styles/studio-sections.css';

export function Contact() {
  const emailReady = Boolean(enquiryEmail());
  return `<section class="studio-section contact-section" id="contact" aria-labelledby="contact-title">
    <div class="studio-intro"><span class="eyebrow">START A PROJECT</span><h2 id="contact-title">WHAT'S NEXT?</h2><p>Have an idea in mind? Let's build something worth experiencing.</p></div>
    <form id="brief-form" novalidate aria-describedby="contact-delivery-note">
      <div class="contact-field"><label for="brief-name">Your name</label><input id="brief-name" name="name" autocomplete="name" required maxlength="120" aria-describedby="brief-name-error"><p class="field-error" id="brief-name-error" hidden></p></div>
      <div class="contact-field"><label for="brief-email">Email address</label><input id="brief-email" name="email" type="email" autocomplete="email" required maxlength="254" aria-describedby="brief-email-error"><p class="field-error" id="brief-email-error" hidden></p></div>
      <div class="contact-field"><label for="brief-phone">Phone number <span class="optional-label">(optional)</span></label><input id="brief-phone" name="phone" type="tel" autocomplete="tel" maxlength="40" aria-describedby="brief-phone-error"><p class="field-error" id="brief-phone-error" hidden></p></div>
      <div class="contact-field"><label for="brief-message">Tell us about your project</label><textarea id="brief-message" name="message" required rows="3" maxlength="5000" aria-describedby="brief-message-error"></textarea><p class="field-error" id="brief-message-error" hidden></p></div>
      <div class="contact-actions"><button class="button button-light" type="submit" aria-describedby="contact-delivery-note">LET'S TALK ${arrow}</button>
      ${emailReady ? '<button class="brief-fallback" type="button" data-download-brief>Download project brief</button>' : ''}</div>
      <p class="form-note" id="contact-delivery-note">${emailReady ? 'Open your email app to review and send your enquiry.' : 'Download a project brief to share when you’re ready. Nothing is sent; your details stay on this device.'}</p>
      <p id="brief-status" role="status" aria-live="polite" aria-atomic="true"></p>
    </form>
  </section>`;
}
