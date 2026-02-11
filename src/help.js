function createModuleHelp(container) {
  container.appendChild(createSectionGettingStarted());
  container.appendChild(createSectionFAQ());
  container.appendChild(createSectionDataInfo());

  // contact and feeback should be placed inside Kontak module later!
  //container.appendChild(createSectionContact());
  //container.appendChild(createSectionFeedback());
}

function createSectionGettingStarted() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const paraIntro = document.createElement("p");
  const ol = document.createElement("ol");
  const li_1 = document.createElement("li");
  const li_2 = document.createElement("li");
  const li_3 = document.createElement("li");
  const para_1a = document.createElement("p");
  const para_1b = document.createElement("p");
  const para_2a = document.createElement("p");
  const para_2b = document.createElement("p");
  const para_3a = document.createElement("p");
  const para_3b = document.createElement("p");
  const ul = document.createElement("ul");
  const li_A = document.createElement("li");
  const li_B = document.createElement("li");
  const li_C = document.createElement("li");

  section.classList.add("section-getting-started");
  h3.classList.add("getting-started-header");
  paraIntro.classList.add("getting-started-intro");
  ol.classList.add("getting-started-ol");
  li_1.classList.add("getting-started-li");
  li_2.classList.add("getting-started-li");
  li_3.classList.add("getting-started-li");
  ul.classList.add("getting-started-ul");

  h3.textContent = "Erste Schritte";
  paraIntro.textContent =
    "Willkommen beim Data2Office Web-Frontend für Stadt- und Regionalstatistik. Hier finden Sie erste Anleitungen, um schnell mit der Analyse und Visualisierung von regionalen Daten zu beginnen.";
  para_1a.textContent = "Daten suchen";
  para_1b.textContent =
    " Verwenden Sie die Suchleiste oben, um nach Themen wie Bevölkerung, Wohnfläche oder Arbeitslosigkeit zu suchen. Sie können auch nach Städten und Regionen filtern.";
  para_2a.textContent = "Karten und Diagramme erkunden";
  para_2b.textContent =
    " Klicken Sie auf eine der interaktiven Kacheln, um Details zu einer Region anzuzeigen. Jede Kachel zeigt einen statistischen Indikator an, z.B. Einwohnerzahl oder Durchschnittseinkommen.";
  para_3a.textContent = "Daten herunterladen";
  para_3b.textContent =
    "Nach Auswahl eines Diagramms öffnet sich ein kleines Formular mit folgenden Optionen:";
  li_A.textContent = "Excel-Dokument herunterladen";
  li_B.textContent = "PDF-Dokument herunterladen";
  li_C.textContent = "Vorherige / Nächste...";

  ul.appendChild(li_A);
  ul.appendChild(li_B);
  ul.appendChild(li_C);

  li_1.appendChild(para_1a);
  li_1.appendChild(para_1b);
  li_2.appendChild(para_2a);
  li_2.appendChild(para_2b);
  li_3.appendChild(para_3a);
  li_3.appendChild(para_3b);
  li_3.appendChild(ul);

  ol.appendChild(li_1);
  ol.appendChild(li_2);
  ol.appendChild(li_3);

  section.appendChild(h3);
  section.appendChild(paraIntro);
  section.appendChild(ol);
  return section;
}

function createSectionFAQ() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const ul = document.createElement("ul");
  const li_1 = document.createElement("li");
  const li_2 = document.createElement("li");
  const li_3 = document.createElement("li");
  const li_4 = document.createElement("li");
  const li_5 = document.createElement("li");
  const li_6 = document.createElement("li");
  const para_1q = document.createElement("p");
  const para_1a = document.createElement("p");
  const para_2q = document.createElement("p");
  const para_2a = document.createElement("p");
  const para_3q = document.createElement("p");
  const para_3a = document.createElement("p");
  const para_4q = document.createElement("p");
  const para_4a = document.createElement("p");
  const para_5q = document.createElement("p");
  const para_5a = document.createElement("p");
  const para_6q = document.createElement("p");
  const para_6a = document.createElement("p");

  section.classList.add("section-faq");
  h3.classList.add("faq-header");
  ul.classList.add("faq-ul");
  para_1q.classList.add("faq-question");
  para_1a.classList.add("faq-answer");
  para_2q.classList.add("faq-question");
  para_2a.classList.add("faq-answer");
  para_3q.classList.add("faq-question");
  para_3a.classList.add("faq-answer");
  para_4q.classList.add("faq-question");
  para_4a.classList.add("faq-answer");
  para_5q.classList.add("faq-question");
  para_5a.classList.add("faq-answer");
  para_6q.classList.add("faq-question");
  para_6a.classList.add("faq-answer");

  h3.textContent = "FAQs";
  para_1q.textContent = "Wie starte ich mit der Nutzung der Plattform?";
  para_1a.textContent =
    "Beginnen Sie mit der Suche nach Ihrer Stadt oder Region. Nutzen Sie die Karten und Diagramme, um erste Einblicke zu gewinnen.";
  para_2q.textContent = "Wie kann ich Daten herunterladen?";
  para_2a.textContent =
    " Klicken Sie auf eine Kachel oder Diagramm, um ein Formular mit Optionen zum Herunterladen von Excel- oder PDF-Dokumenten zu öffnen.";
  para_3q.textContent = "Welche Datenquellen werden verwendet?";
  para_3a.textContent =
    "Die Platform nutzt offizielle statistische Daten, z.B. von regionalen Ämtern, dem Statistischen Bundesamt und anderen öffentlichen Quellen.";
  para_4q.textContent = "Wie oft werden die Daten aktualisiert?";
  para_4a.textContent =
    "Die Daten werden quartalsweise aktualisiert. Ein Hinweis auf das letzte Aktualisierungsdatum finden Sie bei jedem Indikator.";
  para_5q.textContent = "Kann ich benutzerdefinierte Berichte erstellen?";
  para_5a.textContent =
    "Ja, nach Auswahl mehrere Indikatoren können Sie einen kombinierten Bericht generieren und exportieren.";
  para_6q.textContent = "Wo finde ich Erklärungen zu den Indikatoren?";
  para_6a.textContent =
    "Im Abschnitt „Daten Info“ finden Sie Metadaten, Definitionen und methodische Hinweiße zu allen verfügbaren Statistiken.";

  li_1.appendChild(para_1q);
  li_1.appendChild(para_1a);
  li_2.appendChild(para_2q);
  li_2.appendChild(para_2a);
  li_3.appendChild(para_3q);
  li_3.appendChild(para_3a);
  li_4.appendChild(para_4q);
  li_4.appendChild(para_4a);
  li_5.appendChild(para_5q);
  li_5.appendChild(para_5a);
  li_6.appendChild(para_6q);
  li_6.appendChild(para_6a);
  ul.appendChild(li_1);
  ul.appendChild(li_2);
  ul.appendChild(li_3);
  ul.appendChild(li_4);
  ul.appendChild(li_5);
  ul.appendChild(li_6);
  section.appendChild(h3);
  section.appendChild(ul);

  return section;
}

function createSectionDataInfo() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const paraIntro = document.createElement("p");
  const h4 = document.createElement("h4");
  const ul = document.createElement("ul");
  const li_1 = document.createElement("li");
  const li_2 = document.createElement("li");
  const li_3 = document.createElement("li");
  const p_1a = document.createElement("p");
  const p_1b = document.createElement("p");
  const p_2a = document.createElement("p");
  const p_2b = document.createElement("p");
  const p_3a = document.createElement("p");
  const p_3b = document.createElement("p");

  section.classList.add("section-data-info");
  h3.classList.add("data-info-header");
  paraIntro.classList.add("data-info-intro");
  h4.classList.add("data-info-header-ul");
  ul.classList.add("data-info-ul");
  li_1.classList.add("data-info-li");
  li_2.classList.add("data-info-li");
  li_3.classList.add("data-info-li");

  h3.textContent = "Data Info";
  paraIntro.textContent =
    " Dieser Abschnitt bietet Metadata über die statistischen Indikatoren verwendet in the Data2Office platform. Die Daten kommen von offizellen Quellen und werden verarbeitet um die regionale Analyse zu unterstützen.";
  h4.textContent = "Quellen";
  p_1a.textContent = "Statistische Ämter des Bundes und der Länder:";
  p_1b.textContent = "Bevölkerungs-, Beschäftigungs- und Wohnungsdaten";
  p_2a.textContent = "Stadtplanungsdatenbanken:";
  p_2b.textContent = "Daten zur Landnutzung, Verkehr und Infrastruktur";
  p_3a.textContent = "Umweltbehörden:";
  p_3b.textContent = "Daten zur Luftqualität, Grünflächen und Klima";

  li_1.appendChild(p_1a);
  li_1.appendChild(p_1b);
  li_2.appendChild(p_2a);
  li_2.appendChild(p_2b);
  li_3.appendChild(p_3a);
  li_3.appendChild(p_3b);
  ul.appendChild(li_1);
  ul.appendChild(li_2);
  ul.appendChild(li_3);
  section.appendChild(h3);
  section.appendChild(paraIntro);
  section.appendChild(h4);
  section.appendChild(ul);
  return section;
}

/*
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
*/

/*

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

*/

export { createModuleHelp };
