function createModuleHelp(container) {
  container.appendChild(createSectionGettingStarted());
  container.appendChild(createSectionFAQ());
  container.appendChild(createSectionDataInfo());
  container.appendChild(createSectionContact());
  container.appendChild(createSectionFeedback());
}

function createSectionGettingStarted() {
  //console.log("function createSectionGettingStarted()");
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const para = document.createElement("p");
  section.classList.add("section-getting-started");
  h3.classList.add("section-help-header");
  para.classList.add("section-help-text");
  h3.textContent = "Erste Schritte";
  para.textContent =
    "orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi magni excepturi vero?" +
    "Tempora praesentium earum, molestias incidunt, mollitia excepturi possimus eligendi totam" +
    "rem a laboriosam facilis quae nostrum corrupti dolor?";

  section.appendChild(h3);
  section.appendChild(para);
  return section;
}

function createSectionFAQ() {
  //console.log("function createSectionFAQ()");
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const para = document.createElement("p");
  section.classList.add("section-faq");
  h3.classList.add("section-help-header");
  para.classList.add("section-help-text");
  h3.textContent = "FAQs";
  para.textContent =
    "orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi magni excepturi vero?" +
    "Tempora praesentium earum, molestias incidunt, mollitia excepturi possimus eligendi totam" +
    "rem a laboriosam facilis quae nostrum corrupti dolor?";
  section.appendChild(h3);
  section.appendChild(para);
  return section;
}

function createSectionDataInfo() {
  //console.log("function createSectionDataInfo()");
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const para = document.createElement("p");
  section.classList.add("section-data-info");
  h3.classList.add("section-help-header");
  para.classList.add("section-help-text");
  h3.textContent = "Data Info";
  para.textContent =
    "orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi magni excepturi vero?" +
    "Tempora praesentium earum, molestias incidunt, mollitia excepturi possimus eligendi totam" +
    "rem a laboriosam facilis quae nostrum corrupti dolor?";
  section.appendChild(h3);
  section.appendChild(para);
  return section;
}

function createSectionContact() {
  //console.log("function createSectionContact()");
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const para = document.createElement("p");
  section.classList.add("section-contact");
  h3.classList.add("section-help-header");
  para.classList.add("section-help-text");
  h3.textContent = "Kontakt";
  para.textContent =
    "orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi magni excepturi vero?" +
    "Tempora praesentium earum, molestias incidunt, mollitia excepturi possimus eligendi totam" +
    "rem a laboriosam facilis quae nostrum corrupti dolor?";
  section.appendChild(h3);
  section.appendChild(para);
  return section;
}

function createSectionFeedback() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const para = document.createElement("p");
  section.classList.add("section-feedback");
  h3.classList.add("section-help-header");
  para.classList.add("section-help-text");
  h3.textContent = "Feedback";
  para.textContent =
    "orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi magni excepturi vero?" +
    "Tempora praesentium earum, molestias incidunt, mollitia excepturi possimus eligendi totam" +
    "rem a laboriosam facilis quae nostrum corrupti dolor?";
  section.appendChild(h3);
  section.appendChild(para);
  return section;
}

export { createModuleHelp };
