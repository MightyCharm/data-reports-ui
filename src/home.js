function createModuleHome(container, data) {
  console.log("createModuleHome()");
  // <!-- <h2 class="header-cards">Data Showcase</h2> -->
  container.append(createHeader());
  //   renderCards(container, data);
  data.forEach((data) => {
    container.appendChild(createCard(data));
  });
}

function createHeader() {
  const h2 = document.createElement("h2");
  h2.classList.add("header-cards-content");
  h2.textContent = "Data Showcase";
  return h2;
}

function createCard(data) {
  // - postion container is created as a reference point for the form that will be created if a tile is clicked
  // - setting position relative on tile directly breaks the flexbox layout, so this wrapper is set to relative
  // - the form that will be created later if tile is clicked uses this as a reference for postioning and is set
  //   to absolute
  const positionContainer = document.createElement("div");
  const article = document.createElement("article");
  const header3 = document.createElement("h3");
  const pDescription = document.createElement("p");

  const select = document.createElement("select");
  const option_1 = document.createElement("option");
  const option_2 = document.createElement("option");
  const option_3 = document.createElement("option");
  const option_4 = document.createElement("option");
  const option_5 = document.createElement("option");
  const option_6 = document.createElement("option");

  const img = document.createElement("img");
  const pAddInfo = document.createElement("p");

  positionContainer.classList.add("position-container");
  article.classList.add("card");
  article.setAttribute("data-role", "card");
  header3.classList.add("card-header");
  header3.textContent = data.title;
  pDescription.classList.add("card-description");
  pDescription.textContent = data.description;

  select.classList.add("select_1");
  select.setAttribute("data-role", "select");
  select.name = "select_1";
  option_1.value = "";
  option_2.value = "chart_a";
  option_3.value = "chart_b";
  option_4.value = "chart_c";
  option_5.value = "chart_d";
  option_6.value = "chart_e";
  option_1.textContent = "Produkt";
  option_2.textContent = "Chart A";
  option_3.textContent = "Chart B";
  option_4.textContent = "Chart C";
  option_5.textContent = "Chart D";
  option_6.textContent = "Chart E";
  option_1.selected = true;
  option_1.disabled = true;

  img.classList.add("card-img");
  img.src = data.imgSrc;
  img.alt = data.imgAlt;
  pAddInfo.classList.add("card-added-info");
  pAddInfo.textContent =
    "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?";

  select.appendChild(option_1);
  select.appendChild(option_2);
  select.appendChild(option_3);
  select.appendChild(option_4);
  select.appendChild(option_5);
  select.appendChild(option_6);
  article.appendChild(header3);

  article.appendChild(pDescription);
  article.appendChild(select);
  article.appendChild(img);
  article.appendChild(pAddInfo);

  positionContainer.appendChild(article);
  return positionContainer;
  //this.containerCards.appendChild(positionContainer);
}

function updateChart(value, data, img) {
  console.log("updateChart()");
  switch (value) {
    case "chart_a":
      img.src = data[0].imgSrc;
      img.alt = data[0].imgAlt;
      break;
    case "chart_b":
      img.src = data[1].imgSrc;
      img.alt = data[1].imgAlt;
      break;
    case "chart_c":
      img.src = data[2].imgSrc;
      img.alt = data[2].imgAlt;
      break;
    case "chart_d":
      img.src = data[3].imgSrc;
      img.alt = data[3].imgAlt;
      break;
    case "chart_e":
      img.src = data[4].imgSrc;
      img.alt = data[4].imgAlt;
      break;
    default:
      console.log("default case updateChart()");
  }
}

export { createModuleHome, updateChart };
