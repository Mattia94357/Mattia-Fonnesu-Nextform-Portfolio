// Public contact details only. Replace the samples, then enable each destination.
// Disabled samples are never rendered as links or used to deliver enquiries.
export const siteConfig = {
  contact: {
    email: 'hello@example.com',
    emailEnabled: false,
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
