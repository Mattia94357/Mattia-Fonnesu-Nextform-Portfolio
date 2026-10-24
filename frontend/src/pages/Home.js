import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero.js';
import { SelectedWork } from '../components/SelectedWork.js';
import { About } from '../components/About.js';

export function Home() {
  return `${Header()}<main id="main">${Hero()}${SelectedWork()}${About()}</main><footer class="footer"><a class="wordmark" href="#">NEXTFORM</a><span>DESIGNING WHAT'S NEXT.</span><a href="#main">BACK TO TOP ↑</a></footer>
  <dialog class="detail-dialog" aria-labelledby="dialog-title"><button class="dialog-close" aria-label="Close dialog">×</button><div class="dialog-content"></div></dialog>`;
}
