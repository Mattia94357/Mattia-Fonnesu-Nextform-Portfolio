import { arrow } from './icons.js';
import { ProjectPreview } from './ProjectPreview.js';
import '../styles/project-cards.css';

export function ProjectCard(project, index) {
  return `<button type="button" class="project-card" aria-haspopup="dialog" aria-controls="project-dialog" data-project="${project.id}" aria-label="${project.caseStudy ? 'View case study:' : 'Preview'} ${project.title}${project.status ? ` — ${project.status}` : ''}">
    ${ProjectPreview(project)}
    <span class="project-overlay" aria-hidden="true"></span>
    <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
    ${project.status ? `<span class="project-status${project.statusInImage ? ' project-status--embedded' : ''}" aria-hidden="true">${project.status}</span>` : ''}
    <span class="project-info"><span class="project-title">${project.title}</span><span class="project-tags">${project.tags.join('<span aria-hidden="true">•</span>')}</span></span>
    ${project.caseStudy ? '<span class="case-study-action">VIEW CASE STUDY</span>' : ''}
    <span class="project-arrow">${arrow}</span>
  </button>`;
}
