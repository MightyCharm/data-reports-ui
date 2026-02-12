function createModuleContact(container) {
  container.appendChild(createSectionIntro());
  container.appendChild(createSectionContactForm());
}

function createSectionIntro() {
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const para = document.createElement("p");
  const address = document.createElement("address");
  const a = document.createElement("a");
  const icon = document.createElement("i");

  h1.classList.add("contact-intro-header");
  para.classList.add("contact-intro-text");
  a.classList.add("contact-intro-link");
  icon.classList.add("fas", "fa-envelope");

  h1.textContent = "Bei Fragen oder Anregungen";
  para.textContent =
    "Diese Seite wird von ehrenamtlichen Helfern auf dem neuesten Stand gehalten, bei Problemen oder Anregungen kontaktieren Sie uns bitte direkt per E-mail oder füllen Sie unser Kontaktformular aus. Wir bitten um verständnis, dass die Bearbeitung von Anfragen etwas Zeit beanspruchen kann.";
  a.href = "mailto:info@data-reports.de";

  a.appendChild(icon);
  a.appendChild(document.createTextNode("info-reports.de"));
  address.appendChild(a);

  section.appendChild(h1);
  section.appendChild(para);
  section.appendChild(address);

  return section;
}

function createSectionContactForm() {
  const section = document.createElement("section");
  const form = document.createElement("form");
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  const li_1 = document.createElement("li");
  const li_2 = document.createElement("li");
  const li_3 = document.createElement("li");
  const label_1 = document.createElement("label");
  const label_2 = document.createElement("label");
  const label_3 = document.createElement("label");
  const span_1 = document.createElement("span");
  const span_2 = document.createElement("span");
  const span_3 = document.createElement("span");
  const input_1 = document.createElement("input");
  const input_2 = document.createElement("input");
  const textarea = document.createElement("textarea");
  const button = document.createElement("button");

  section.classList.add("section-contact-form");
  form.action = "";
  form.method = "post";
  legend.classList.add("contact-form-legend");
  icon.classList.add("fas", "fa-comment");
  ul.classList.add("contact-form-ul");
  li_1.classList.add("contact-form-li");
  li_2.classList.add("contact-form-li");
  li_3.classList.add("contact-form-li");
  label_1.htmlFor = "user-name";
  label_2.htmlFor = "user-email";
  label_3.htmlFor = "user-message";
  input_1.id = "user-name";
  input_1.classList.add("input-user-name");
  input_1.type = "text";
  input_1.name = "input-name";
  input_1.required = true;
  input_2.id = "user-email";
  input_2.classList.add("input-user-email");
  input_2.type = "email";
  input_2.name = "input-email";
  input_2.required = true;
  textarea.id = "user-message";
  textarea.classList.add("input-textarea");
  textarea.name = "input-textarea";
  textarea.required = true;
  button.classList.add("contact-form-submit-btn");
  button.textContent = "Senden";
  button.type = "submit";

  legend.appendChild(icon);
  legend.appendChild(document.createTextNode("Kontaktformular"));
  label_1.textContent = "Name ";
  label_2.textContent = "Email ";
  label_3.textContent = "Ihre Nachricht ";
  span_1.textContent = "(Pflichtfeld)";
  span_2.textContent = "(Pflichtfeld)";
  span_3.textContent = "(Pflichtfeld)";

  label_1.appendChild(span_1);
  label_2.appendChild(span_2);
  label_3.appendChild(span_3);

  li_1.appendChild(label_1);
  li_1.appendChild(input_1);
  li_2.appendChild(label_2);
  li_2.appendChild(input_2);
  li_3.appendChild(label_3);
  li_3.appendChild(textarea);
  ul.appendChild(li_1);
  ul.appendChild(li_2);
  ul.appendChild(li_3);

  fieldset.appendChild(legend);
  fieldset.appendChild(ul);
  fieldset.appendChild(button);
  form.appendChild(fieldset);

  section.appendChild(form);

  return section;
}

export { createModuleContact };
