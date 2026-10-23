import { arrow, label } from './icons.js';
import { ProjectCard } from './ProjectCard.js';
import joker from '../../assets/d43e5652-4e83-4d72-9dfc-ba38230015cf.png';
import corte from '../../assets/sa corte antiga.png';
import join from '../../assets/join.png';

export const projects = [
  { id: 'joker-tattoo', title: 'JOKER TATTOO', tags: ['WEBSITE', 'BRAND'], image: joker, alt: 'Cinematic tattoo session in a dark studio with cool-blue lighting' },
  { id: 'sa-corte-antiga', title: 'SA CORTE ANTIGA', tags: ['WEBSITE', 'BOOKING PLATFORM'], image: corte, alt: 'Moonlit Nebida coastline and a warmly lit Sardinian stone terrace' },
  { id: 'join', title: 'JOIN', tags: ['APP', 'PRODUCT'], image: join, status: 'COMING SOON', statusInImage: true, alt: 'JOIN mobile app preview with social activities and a Coming Soon treatment' },
];

export function SelectedWork() {
  return `<section class="selected-work" id="work" aria-labelledby="work-title">
    <div class="work-heading">
      <div>${label('SELECTED WORK')}<h2 id="work-title">Latest <em>Work</em></h2></div>
      <div class="work-intro"><p>A selection of recent websites, products and digital experiences. Thoughtfully built, creatively driven, made for what's next.</p><a class="button button-outline" href="#projects">VIEW ALL WORK ${arrow}</a></div>
    </div>
    <div class="project-grid" id="projects">${projects.map(ProjectCard).join('')}</div>
  </section>`;
}
