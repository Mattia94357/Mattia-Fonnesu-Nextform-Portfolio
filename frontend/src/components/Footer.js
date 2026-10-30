import { Logo } from './Logo.js';
import { enquiryEmail, enquiryMailto, socialLinks } from '../config/site.js';
import '../styles/footer.css';

export function Footer() {
  const socials = socialLinks();
  const email = enquiryEmail();
  return `<footer class="footer studio-footer">
    <div class="footer-top"><div class="footer-brand"><a class="wordmark" href="#main" aria-label="NEXTFORM — back to top">${Logo({ size: 'small' })}</a><p>Building what's next.</p>${email ? `<a class="footer-email" href="${enquiryMailto()}">${email}</a>` : ''}</div>
      <nav class="footer-navigation" aria-label="Footer navigation">${[['Home', 'main'], ['About', 'about'], ['Work', 'work'], ['Process', 'process'], ['Contact', 'contact']].map(([title, id]) => `<a href="#${id}">${title}</a>`).join('')}</nav>
      ${socials.length ? `<nav class="footer-socials" aria-label="Social and contact links">${socials.map(({ label, href }) => `<a href="${href.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join('')}</nav>` : ''}
    </div>
    <div class="footer-bottom"><p>© ${new Date().getFullYear()} NEXTFORM <span>All rights reserved.</span></p><a href="#main">BACK TO TOP <span aria-hidden="true">↑</span></a></div>
  </footer>`;
}
