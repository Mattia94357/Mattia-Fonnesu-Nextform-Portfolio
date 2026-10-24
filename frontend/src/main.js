import { Home } from './pages/Home.js';
import { projects } from './components/SelectedWork.js';
import './styles/main.css';
import './styles/responsive.css';

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
const panels = {
  about: `<span class="eyebrow">DIGITAL STUDIO</span><h2 id="dialog-title">Designing what's next.</h2><p>Websites, products and digital experiences.</p><p>Human creativity meets emerging technology.</p>`,
  process: `<span class="eyebrow">OUR PROCESS</span><h2 id="dialog-title">From idea to experience.</h2><ol class="process-list"><li><span>01</span>Strategy</li><li><span>02</span>Design</li><li><span>03</span>Development</li></ol>`,
  contact: `<span class="eyebrow">START A PROJECT</span><h2 id="dialog-title">What's next?</h2><p>Shape your next website, product or digital experience.</p><form id="brief-form"><label for="brief-name">Your name</label><input id="brief-name" name="name" autocomplete="name" required maxlength="120"><label for="brief-email">Email address</label><input id="brief-email" name="email" type="email" autocomplete="email" required maxlength="254"><label for="brief-message">Tell us about your project</label><textarea id="brief-message" name="message" required rows="4" maxlength="5000"></textarea><button class="button button-light" type="submit">DOWNLOAD PROJECT BRIEF ↗</button><p class="form-note">Save your brief to share when you're ready.</p><p id="brief-status" role="status"></p></form>`,
};

function openDialog(html) {
  content.innerHTML = html;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-dialog], [data-project]');
  if (!trigger) return;
  if (trigger.dataset.dialog) openDialog(panels[trigger.dataset.dialog]);
  else {
    const project = projects.find(({ id }) => id === trigger.dataset.project);
    openDialog(`<img class="dialog-project-image" src="${project.image}" alt="${project.alt}"><span class="eyebrow">${project.tags.join(' · ')}${project.status && !project.statusInImage ? ` · ${project.status}` : ''}</span><h2 id="dialog-title">${project.title}</h2>`);
  }
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'brief-form') return;
  event.preventDefault();
  const data = new FormData(event.target);
  const brief = `NEXTFORM — PROJECT BRIEF\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\n\nProject\n${data.get('message')}\n`;
  const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'nextform-project-brief.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#brief-status').textContent = 'Your project brief is ready. Keep it for your next conversation with NEXTFORM.';
});
