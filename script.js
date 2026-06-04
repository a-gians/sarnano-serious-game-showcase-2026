const projects = [
  {
    group: "ECoLoGisti",
    title: "Il Prezzo del Successo",
    description: "Gioco di scelte su moda sostenibile, fast fashion, fondi, popolarita e impatto etico.",
    status: "Giocabile",
    href: "./students/ecologisti-prezzo-successo/"
  }
];

const container = document.querySelector("#student-projects");

container.innerHTML = projects.map((project) => {
  const content = `
    <span class="tag">${project.status}</span>
    <div>
      <h3>${project.title}</h3>
      <p><strong>${project.group}</strong> · ${project.description}</p>
    </div>
  `;

  if (project.href) {
    return `<a class="card" href="${project.href}">${content}</a>`;
  }

  return `<article class="card">${content}</article>`;
}).join("");
