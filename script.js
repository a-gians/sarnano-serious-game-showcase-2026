const projects = [
  {
    group: "ECoLoGisti",
    title: "Il Prezzo del Successo",
    description: "ECoLoGisti: serious game sul lancio di un brand di moda sostenibile, fra fondi, popolarita ed etica.",
    format: "Gioco + Pitch Deck",
    href: "./students/ecologisti-prezzo-successo/"
  },
  {
    group: "Cosm-Etica",
    title: "Cosm-Etica",
    description: "Simulazione CEO su cosmetici biologici, cruelty-free, packaging sostenibile, energia pulita e reputazione etica.",
    format: "Gioco Gestionale",
    href: "./students/cosm-etica/"
  },
  {
    group: "MND",
    title: "Eudaimonia Corp",
    description: "CEO simulation su una startup di supporto psicologico, fra benessere delle persone, profitti e sostenibilita energetica.",
    format: "CEO Simulation",
    href: "./students/eudaimonia-corp/"
  }
];

const container = document.querySelector("#student-projects");

container.innerHTML = projects.map((project) => {
  const content = `
    <span class="tag">${project.format}</span>
    <div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <span class="arrow" aria-hidden="true">→</span>
  `;

  if (project.href) {
    return `<a class="card" href="${project.href}">${content}</a>`;
  }

  return `<article class="card">${content}</article>`;
}).join("");
