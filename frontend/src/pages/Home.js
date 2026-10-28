import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero.js';
import { SelectedWork } from '../components/SelectedWork.js';
import { About } from '../components/About.js';
import { Process } from '../components/Process.js';
import { Contact } from '../components/Contact.js';
import { Footer } from '../components/Footer.js';

export function Home() {
  return `${Header()}<main id="main">${Hero()}${About()}${SelectedWork()}${Process()}${Contact()}</main>${Footer()}
  <dialog id="project-dialog" class="detail-dialog" aria-labelledby="dialog-title"><button class="dialog-close" type="button" aria-label="Close dialog">×</button><div class="dialog-content"></div></dialog>`;
}
