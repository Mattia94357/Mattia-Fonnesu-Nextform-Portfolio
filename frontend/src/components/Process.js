import '../styles/studio-sections.css';

const steps = [
  ['Strategy', 'Understanding your goals, audience and ideas. We define the direction, structure and functionality before development begins.'],
  ['Design', 'Creating clean, intuitive interfaces that combine visual identity, usability and thoughtful attention to detail.'],
  ['Development', 'Transforming designs into responsive, functional digital experiences, with a focus on performance, reliability and seamless interaction.'],
];

export function Process() {
  return `<section class="studio-section process-section" id="process" aria-labelledby="process-title">
    <div class="studio-intro"><span class="eyebrow">OUR PROCESS</span><h2 id="process-title">From idea to experience.</h2></div>
    <ol class="process-list">${steps.map(([title, description], index) => `<li>
      <h3 class="process-row-heading"><button class="process-trigger" type="button" id="process-trigger-${index}" aria-expanded="false" aria-controls="process-panel-${index}">
        <span class="process-number">0${index + 1}</span><span class="process-name">${title}</span><span class="process-toggle" aria-hidden="true"></span>
      </button></h3>
      <div class="process-panel" id="process-panel-${index}" role="region" aria-labelledby="process-trigger-${index}" aria-hidden="true" inert><div class="process-panel-inner"><p>${description}</p></div></div>
    </li>`).join('')}</ol>
  </section>`;
}
