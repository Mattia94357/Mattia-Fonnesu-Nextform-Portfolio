import { arrow } from './icons.js';
import '../styles/case-studies.css';

// All content comes from the local project records, never from form/user input.
export function CaseStudy(project) {
  const study = project.caseStudy;
  return `<article class="case-study" aria-labelledby="dialog-title">
    <span class="eyebrow">CASE STUDY</span>
    <h2 id="dialog-title">${project.title}</h2>
    <p class="case-study-location">${study.location}</p>
    <a class="case-study-website" href="${study.website}" target="_blank" rel="noopener noreferrer">VISIT WEBSITE ${arrow}<span class="visually-hidden"> (opens in a new tab)</span></a>
    <img class="dialog-project-image" src="${project.image}" alt="${project.alt}" width="1672" height="941" decoding="async">
    <section class="case-study-block" aria-labelledby="case-challenge"><h3 id="case-challenge">CHALLENGE</h3><p>${study.challenge}</p></section>
    <section class="case-study-block" aria-labelledby="case-solution"><h3 id="case-solution">SOLUTION</h3><p>${study.solution}</p></section>
    <section class="case-study-block" aria-labelledby="case-technologies"><h3 id="case-technologies">TECHNOLOGIES</h3><ul class="case-study-technologies">${study.technologies.map(technology => `<li>${technology}</li>`).join('')}</ul></section>
    <p class="case-study-review">Implementation details provided by the project developer. Source-code verification pending.</p>
  </article>`;
}

export function ProjectDetails(project) {
  if (project.caseStudy) return CaseStudy(project);
  // Preserve JOIN's existing image-only preview, without unfinished product details.
  return `<img class="dialog-project-image" src="${project.image}" alt="${project.alt}"><span class="eyebrow">${project.tags.join(' · ')}${project.status && !project.statusInImage ? ` · ${project.status}` : ''}</span><h2 id="dialog-title">${project.title}</h2>`;
}
