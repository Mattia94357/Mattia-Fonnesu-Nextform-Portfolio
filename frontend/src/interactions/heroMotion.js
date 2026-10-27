// One transform update per scroll frame, only while the hero is visible.
// Downward-only travel preserves the existing full-head clearance on phones.
export function initHeroMotion() {
  const hero = document.querySelector('.hero');
  if (!hero || !('IntersectionObserver' in window)) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let listening = false;
  let frame = 0;
  function update() {
    frame = 0;
    const limit = window.innerWidth <= 760 ? 8 : 22;
    const shift = Math.min(limit, Math.max(0, -hero.getBoundingClientRect().top) * .04);
    hero.style.setProperty('--hero-parallax', shift.toFixed(2) + 'px');
  }
  function requestUpdate() { if (!frame) frame = requestAnimationFrame(update); }
  function sync() {
    const active = visible && !reduced.matches && !document.hidden;
    if (active === listening) return;
    listening = active;
    if (active) {
      window.addEventListener('scroll', requestUpdate, { passive: true });
      window.addEventListener('resize', requestUpdate, { passive: true });
      requestUpdate();
    } else {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      cancelAnimationFrame(frame);
      frame = 0;
      hero.style.setProperty('--hero-parallax', '0px');
    }
  }
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(hero);
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
}
