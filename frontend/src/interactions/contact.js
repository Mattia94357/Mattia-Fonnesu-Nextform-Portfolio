import { enquiryEmail } from '../config/site.js';

export function initContact() {
  const form = document.querySelector('#brief-form');
  const status = document.querySelector('#brief-status');
  const fields = [...form.querySelectorAll('input, textarea')];
  function validate(field) {
    const value = field.value.trim();
    let error = '';
    if (field.required && !value) error = { name: 'Please enter your name.', email: 'Please enter your email address.', message: 'Please tell us about your project.' }[field.name];
    else if (field.name === 'email' && field.validity.typeMismatch) error = 'Please enter a valid email address.';
    else if (field.name === 'phone' && value && (!/^[+()\d\s.\-#ext]+$/i.test(value) || value.replace(/\D/g, '').length < 7 || value.replace(/\D/g, '').length > 20)) error = 'Enter a phone number with 7–20 digits, or leave this field empty.';
    const message = document.getElementById(field.id + '-error');
    message.textContent = error;
    message.hidden = !error;
    if (error) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !error;
  }
  fields.forEach(field => {
    field.addEventListener('blur', () => { if (field.value || field.hasAttribute('aria-invalid')) validate(field); });
    field.addEventListener('input', () => { if (field.hasAttribute('aria-invalid')) validate(field); status.textContent = ''; });
  });
  function prepareBrief() {
    const valid = fields.map(validate).every(Boolean);
    if (!valid) {
      status.textContent = 'Please check the highlighted fields.';
      form.querySelector('[aria-invalid="true"]').focus();
      return null;
    }
    const data = new FormData(form);
    return 'NEXTFORM — PROJECT BRIEF\n\nName: ' + data.get('name').trim() + '\nEmail: ' + data.get('email').trim() + '\nPhone: ' + (data.get('phone').trim() || 'Not provided') + '\n\nProject\n' + data.get('message').trim() + '\n';
  }
  function download(brief) {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'nextform-project-brief.txt';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Your project brief has been downloaded. Nothing was sent; keep it to share when you’re ready.';
  }
  function handleEnquiry(downloadOnly = false) {
    const brief = prepareBrief();
    if (!brief) return;
    try {
      const recipient = downloadOnly ? null : enquiryEmail();
      if (recipient) {
        window.location.href = 'mailto:' + encodeURIComponent(recipient) + '?subject=' + encodeURIComponent('NEXTFORM — Project enquiry') + '&body=' + encodeURIComponent(brief);
        status.textContent = 'Your email app will open with your enquiry. Please review and send it there.';
      } else download(brief);
    } catch {
      status.textContent = 'We couldn’t prepare your brief. Your details are still here; please try again.';
    }
  }
  form.addEventListener('submit', event => { event.preventDefault(); handleEnquiry(); });
  form.querySelector('[data-download-brief]')?.addEventListener('click', () => handleEnquiry(true));
}
