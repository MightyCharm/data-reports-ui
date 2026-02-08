class UIController {
  constructor(data) {
    this.data = data;
    this.containerCards = document.getElementById("container-cards");
    this.navMenu = document.getElementById("nav-ul");

    this.currentForm = null;
    this.state = {
      activeCard: null,
      prevCard: null,
      formOpen: false,
    };
  }

  updateVisibilityMenu() {
    this.navMenu.classList.toggle("hidden");
  }

  closeMenu() {
    this.navMenu.classList.add("hidden");
  }

  renderCards() {
    this.data.forEach((data) => {
      this.createCard(data);
    });
  }

  createCard(data) {
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

    this.containerCards.appendChild(positionContainer);
  }

  updateChart(value, img) {
    console.log("updateChart()");
    switch (value) {
      case "chart_a":
        img.src = this.data[0].imgSrc;
        img.alt = this.data[0].imgAlt;
        break;
      case "chart_b":
        img.src = this.data[1].imgSrc;
        img.alt = this.data[1].imgAlt;
        break;
      case "chart_c":
        img.src = this.data[2].imgSrc;
        img.alt = this.data[2].imgAlt;
        break;
      case "chart_d":
        img.src = this.data[3].imgSrc;
        img.alt = this.data[3].imgAlt;
        break;
      case "chart_e":
        img.src = this.data[4].imgSrc;
        img.alt = this.data[4].imgAlt;
        break;
      default:
        console.log("default case updateChart()");
    }
  }

  removeForm() {
    console.log("removeForm()");
    if (this.currentForm) {
      this.currentForm.remove();
      this.currentForm = null;
    }
  }

  renderForm() {
    console.log("renderForm()");
    let wrapper;
    if (this.state.activeCard) {
      wrapper = this.state.activeCard.parentElement;
    }

    if (this.state.formOpen && wrapper) {
      this.currentForm = this.createForm();
      const pageHeight = document.body.scrollHeight;
      wrapper.appendChild(this.currentForm);
      this.adjustFormPosition(pageHeight);
      setTimeout(() => {
        this.currentForm.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 0);
    }
  }

  createForm() {
    const divForm = document.createElement("div");

    const btnClose = document.createElement("button");
    const iconClose = document.createElement("i");
    const ul = document.createElement("ul");
    const li_1 = document.createElement("li");
    const li_2 = document.createElement("li");
    const li_3 = document.createElement("li");
    const strong_1 = document.createElement("strong");
    const strong_2 = document.createElement("strong");
    const strong_3 = document.createElement("strong");
    const span_1 = document.createElement("span");
    const span_2 = document.createElement("span");
    const span_3 = document.createElement("span");

    const divButtonContainer = document.createElement("div");
    const btnExcel = document.createElement("button");
    const btnPdf = document.createElement("button");
    const btnPrevious = document.createElement("button");
    const btnForward = document.createElement("button");
    const iconExcel = document.createElement("i");
    const iconPdf = document.createElement("i");
    const iconBack = document.createElement("i");
    const iconForward = document.createElement("i");
    const spanBtnExcel = document.createElement("span");
    const spanBtnPdf = document.createElement("span");
    const spanBtnPrevious = document.createElement("span");
    const spanBtnForward = document.createElement("span");

    divForm.classList.add("form-data");

    btnClose.classList.add("btn-close-form");
    btnClose.dataset.role = "btn-close-form";
    iconClose.classList.add("fas", "fa-times");

    ul.classList.add("ul-form");
    li_1.classList.add("list-item");
    li_2.classList.add("list-item");
    li_3.classList.add("list-item");
    strong_1.classList.add("list-strong");
    strong_2.classList.add("list-strong");
    strong_3.classList.add("list-strong");
    span_1.classList.add("list-span");
    span_2.classList.add("list-span");
    span_3.classList.add("list-span");

    divButtonContainer.classList.add("container-buttons");
    btnExcel.classList.add("btn-excel");
    btnExcel.dataset.role = "btn-excel";
    btnPdf.dataset.role = "btn-pdf";
    btnPrevious.classList.add("btn-previous");
    btnPrevious.dataset.role = "btn-previous";
    btnForward.classList.add("btn-forward");
    btnForward.dataset.role = "btn-forward";
    iconExcel.classList.add("fas", "fa-file-excel");
    iconPdf.classList.add("fas", "fa-file-pdf");
    iconBack.classList.add("fas", "fa-undo");
    iconForward.classList.add("fas", "fa-redo");
    spanBtnExcel.classList.add("span-btn");
    spanBtnPdf.classList.add("span-btn");
    spanBtnPrevious.classList.add("span-btn");
    spanBtnForward.classList.add("span-btn");

    // text content for ul-list
    strong_1.textContent = "report_id:";
    strong_2.textContent = "parameter_name:";
    strong_3.textContent = "parameter_value:";
    span_1.textContent = "1x334xx";
    span_2.textContent = "area_23";
    span_3.textContent = "population";
    // text content for buttons
    spanBtnExcel.textContent = "Download Excel-Document";
    spanBtnPdf.textContent = "Download PDF-Document";
    spanBtnPrevious.textContent = "Previous";
    spanBtnForward.textContent = "Forward";

    btnClose.appendChild(iconClose);

    li_1.appendChild(strong_1);
    li_1.appendChild(span_1);
    li_2.appendChild(strong_2);
    li_2.appendChild(span_2);
    li_3.appendChild(strong_3);
    li_3.appendChild(span_3);

    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);

    btnExcel.appendChild(iconExcel);
    btnExcel.appendChild(spanBtnExcel);
    btnPdf.appendChild(iconPdf);
    btnPdf.appendChild(spanBtnPdf);
    btnPrevious.appendChild(iconBack);
    btnPrevious.appendChild(spanBtnPrevious);
    btnForward.appendChild(iconForward);
    btnForward.appendChild(spanBtnForward);
    divButtonContainer.append(btnExcel);
    divButtonContainer.append(btnPdf);
    divButtonContainer.append(btnPrevious);
    divButtonContainer.append(btnForward);

    divForm.appendChild(btnClose);
    divForm.appendChild(ul);
    divForm.appendChild(divButtonContainer);

    return divForm;
  }

  adjustFormPosition(pageHeight) {
    console.log("adjustFormPosition");
    const wrapper = this.state.activeCard.parentElement;
    wrapper.offsetHeight;
    const formHeight = this.currentForm.offsetHeight;
    const cardBottom = wrapper.offsetTop + wrapper.offsetHeight;
    // pageHeight
    if (formHeight + cardBottom > pageHeight) {
      console.log("ITS BIGGER THAN PAGE HEIGHT NOT ENOUGH SPACE!");
      this.currentForm.classList.add("on-top");
    } else {
      this.currentForm.classList.remove("on-top");
    }
  }

  setState(newState) {
    console.log("setState(newState)");
    this.state = { ...this.state, ...newState };
    console.log(this.state);
  }

  updateCardVisibility() {
    console.log("updateCardVisibility()");
    const cards = document.querySelectorAll(".card");

    if (this.state.formOpen) {
      cards.forEach((card) => {
        card.classList.add("card-dimmed");
      });
    }

    if (!this.state.formOpen) {
      cards.forEach((card) => {
        card.classList.remove("card-dimmed");
      });
    }

    if (this.state.activeCard) {
      cards.forEach((card) => {
        if (card === this.state.activeCard) {
          card.classList.remove("card-dimmed");
        }
      });
    }

    if (this.state.prevCard) {
      cards.forEach((card) => {
        if (card === this.state.prevCard) {
          card.classList.add("card-dimmed");
        }
      });
    }
  }

  clearContent() {
    console.log("clear content");
  }
}

export { UIController };
