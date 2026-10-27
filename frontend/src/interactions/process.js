export function initProcess() {
  const buttons = [...document.querySelectorAll('.process-trigger')];
  function setExpanded(button, expanded) {
    button.setAttribute('aria-expanded', String(expanded));
    button.closest('li').classList.toggle('is-open', expanded);
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.setAttribute('aria-hidden', String(!expanded));
    panel.inert = !expanded;
  }
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      buttons.forEach(other => setExpanded(other, other === button && open));
    });
    button.addEventListener('keydown', event => {
      const index = buttons.indexOf(button);
      const target = { ArrowDown: (index + 1) % buttons.length, ArrowUp: (index + buttons.length - 1) % buttons.length, Home: 0, End: buttons.length - 1 }[event.key];
      if (target !== undefined) { event.preventDefault(); buttons[target].focus(); }
    });
  }
}
