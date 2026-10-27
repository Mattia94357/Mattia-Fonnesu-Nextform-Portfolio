import '../styles/studio-sections.css';

export function Contact() {
  return `<section class="studio-section contact-section" id="contact" aria-labelledby="contact-title"><div class="studio-intro"><span class="eyebrow">START A PROJECT</span><h2 id="contact-title">What's next?</h2><p>Shape your next website, product or digital experience.</p></div><form id="brief-form"><label for="brief-name">Your name</label><input id="brief-name" name="name" autocomplete="name" required maxlength="120"><label for="brief-email">Email address</label><input id="brief-email" name="email" type="email" autocomplete="email" required maxlength="254"><label for="brief-message">Tell us about your project</label><textarea id="brief-message" name="message" required rows="4" maxlength="5000"></textarea><button class="button button-light" type="submit">DOWNLOAD PROJECT BRIEF ↗</button><p class="form-note">Save your brief to share when you're ready.</p><p id="brief-status" role="status"></p></form></section>`;
}
