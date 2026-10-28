import { Home } from './pages/Home.js';
import { projects } from './components/SelectedWork.js';
import { ProjectDetails } from './components/CaseStudy.js';
import './styles/main.css';
import './styles/responsive.css';
import './styles/hero.css';
import { initProcess } from './interactions/process.js';
import { initHeroMotion } from './interactions/heroMotion.js';
import { initContact } from './interactions/contact.js';

document.querySelector('#app').innerHTML = Home();

// A disclosure menu on phones; the existing desktop navigation stays visible.
const header = document.querySelector('.header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const phoneViewport = window.matchMedia('(max-width: 760px)');

function setMenu(open, restoreFocus = false) {
  const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
  header.classList.toggle('is-menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  if (!open && wasOpen && restoreFocus) toggle.focus();
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a, button')) setMenu(false, true);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    setMenu(false, true);
  }
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) setMenu(false);
});
phoneViewport.addEventListener('change', () => {
  const navHadFocus = navigation.contains(document.activeElement);
  setMenu(false);
  if (phoneViewport.matches && navHadFocus) toggle.focus();
});


const dialog = document.querySelector('dialog');
const content = dialog.querySelector('.dialog-content');

let projectOpener = null;

function openProject(project, trigger) {
  projectOpener = trigger;
  dialog.classList.toggle('case-study-dialog', Boolean(project.caseStudy));
  content.innerHTML = ProjectDetails(project);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  dialog.querySelector('.dialog-close').focus({ preventScroll: true });
  content.scrollTop = 0;
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project]');
  if (!trigger) return;
  const project = projects.find(({ id }) => id === trigger.dataset.project);
  if (project) openProject(project, trigger);
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

// Keep keyboard focus within the modal's controls, including at browser-chrome boundaries.
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')]
    .filter(element => element.getClientRects().length);
  const first = controls[0];
  const last = controls[controls.length - 1];
  if ((event.shiftKey && document.activeElement === first) ||
      (!event.shiftKey && document.activeElement === last)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus({ preventScroll: true });
  }
});
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (projectOpener?.isConnected) projectOpener.focus({ preventScroll: true });
  projectOpener = null;
});

initProcess();
initHeroMotion();
initContact();
