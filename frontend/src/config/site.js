// Shared public contact destinations. Enable links only after adding real details.
// Disabled or unconfigured destinations are never rendered.
export const siteConfig = {
  contact: {
    email: 'nextformdigital@gmail.com',
    emailEnabled: true,
    whatsappNumber: '+1 202-555-0100',
    whatsappEnabled: false,
  },
  socials: { instagram: '', facebook: '', linkedin: '' },
};

export function enquiryEmail() {
  const { email, emailEnabled } = siteConfig.contact;
  return emailEnabled && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    && !/@(?:.*\.)?example\.(com|org|net)$/i.test(email) ? email : null;
}

export function enquiryMailto() {
  const email = enquiryEmail();
  return email ? 'mailto:' + email : null;
}

export function socialLinks() {
  const links = [];
  for (const [key, label] of [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['linkedin', 'LinkedIn']]) {
    try {
      const url = new URL(siteConfig.socials[key]);
      if (url.protocol === 'https:' && !/(^|\.)example\.(com|org|net)$/i.test(url.hostname)) links.push({ label, href: url.href });
    } catch { /* Unconfigured destinations stay hidden. */ }
  }
  const { whatsappNumber, whatsappEnabled } = siteConfig.contact;
  const digits = whatsappNumber.replace(/\D/g, '');
  if (whatsappEnabled && /^[1-9]\d{6,14}$/.test(digits) && digits !== '12025550100') {
    links.push({ label: 'WhatsApp', href: 'https://wa.me/' + digits });
  }
  return links;
}
