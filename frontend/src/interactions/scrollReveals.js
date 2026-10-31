// Reveal grouped content once. No scroll handler, delays, hidden states or hero changes.
export function initScrollReveals() {
  if (!('IntersectionObserver' in window)) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;

  const targets = [...document.querySelectorAll([
    '#about .about-content > h2',
    '#about .about-copy',
    '.work-heading > div:first-child',
    '.project-item',
    '.process-section .studio-intro',
    '.process-list > li',
    '.contact-section .studio-intro',
    '.contact-email-panel',
  ].join(','))];
  const pending = new Set(targets);
  if (!pending.size) return;

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) reveal(entry.target);
  }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });

  function cleanup() {
    observer.disconnect();
    document.removeEventListener('click', onAnchorClick);
    document.removeEventListener('focusin', onFocus);
    window.removeEventListener('hashchange', onHashChange);
    reduced.removeEventListener('change', onReducedMotion);
  }

  function reveal(element, instant = false) {
    if (!pending.delete(element)) return;
    if (instant) element.classList.add('reveal-instant');
    element.classList.add('is-revealed');
    observer.unobserve(element);
    if (!pending.size) cleanup();
  }

  function revealTarget(target) {
    // Home/Back to Top should not finish all the content below the hero.
    if (!target || target.id === 'main') return;
    for (const element of pending) {
      if (element === target || target.contains(element)) reveal(element, true);
    }
  }

  function onHashChange() {
    try { revealTarget(document.getElementById(decodeURIComponent(location.hash.slice(1)))); }
    catch { /* An invalid fragment never affects content visibility. */ }
  }

  function onAnchorClick(event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    try { revealTarget(document.getElementById(decodeURIComponent(link.hash.slice(1)))); }
    catch { /* Preserve the browser's native fragment behaviour. */ }
  }

  function onFocus(event) {
    for (const element of pending) if (element.contains(event.target)) reveal(element, true);
  }

  function onReducedMotion() {
    if (reduced.matches) for (const element of pending) reveal(element, true);
  }

  for (const element of targets) {
    element.classList.add('scroll-reveal');
    observer.observe(element);
  }
  document.addEventListener('click', onAnchorClick);
  document.addEventListener('focusin', onFocus);
  window.addEventListener('hashchange', onHashChange);
  reduced.addEventListener('change', onReducedMotion);
  onHashChange();
}
