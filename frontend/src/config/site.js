// Shared public contact destinations. Enable links only after adding real details.
// Disabled or unconfigured destinations are never rendered.
export const siteConfig = {
  contact: {
    email: 'nextformdigital@gmail.com',
    emailEnabled: true,
    whatsappNumber: '+66816205251',
    whatsappEnabled: true,
    whatsappInFooter: false,
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

// Canonical E.164 number stays in configuration; wa.me uses digits without '+'.
export function enquiryWhatsApp() {
  const { whatsappNumber, whatsappEnabled } = siteConfig.contact;
  return whatsappEnabled && /^\+[1-9]\d{6,14}$/.test(whatsappNumber)
    ? 'https://wa.me/' + whatsappNumber.slice(1) : null;
}

export function socialLinks() {
  const links = [];
  for (const [key, label] of [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['linkedin', 'LinkedIn']]) {
    try {
      const url = new URL(siteConfig.socials[key]);
      if (url.protocol === 'https:' && !/(^|\.)example\.(com|org|net)$/i.test(url.hostname)) links.push({ label, href: url.href });
    } catch { /* Unconfigured destinations stay hidden. */ }
  }
  const whatsapp = enquiryWhatsApp();
  if (siteConfig.contact.whatsappInFooter && whatsapp) {
    links.push({ label: 'WhatsApp', href: whatsapp });
  }
  return links;
}
