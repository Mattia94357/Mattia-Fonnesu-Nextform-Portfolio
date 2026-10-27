import { Home } from './pages/Home.js';
import { projects } from './components/SelectedWork.js';
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

function openDialog(html) {
  content.innerHTML = html;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project]');
  if (!trigger) return;
  const project = projects.find(({ id }) => id === trigger.dataset.project);
  openDialog(`<img class="dialog-project-image" src="${project.image}" alt="${project.alt}"><span class="eyebrow">${project.tags.join(' · ')}${project.status && !project.statusInImage ? ` · ${project.status}` : ''}</span><h2 id="dialog-title">${project.title}</h2>`);
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

initProcess();
initHeroMotion();
initContact();
