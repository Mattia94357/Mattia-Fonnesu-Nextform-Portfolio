// Render the approved local composition directly, without secondary mockups or fallbacks.
export function ProjectPreview(project) {
  return `<span class="project-preview project-preview--${project.id}">
    <img decoding="async" src="${project.image}" alt="${project.alt}" width="1672" height="941" loading="lazy">
    <span class="preview-grade" aria-hidden="true"></span>
  </span>`;
}
