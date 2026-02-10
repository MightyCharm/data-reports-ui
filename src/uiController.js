class UIController {
  constructor(data) {
    this.data = data;
    this.containerCards = document.getElementById("container-dynamic-content");
    this.navMenu = document.getElementById("nav-ul");

    this.btnHome = document.getElementById("btn-home");
    this.btnMenu = document.getElementById("btn-menu");
    this.btnRegistration = document.getElementById("btn-registration");
    this.btnHelp = document.getElementById("btn-help");

    this.currentForm = null;
    this.state = {
      activeCard: null,
      prevCard: null,
      formOpen: false,
    };
  }

  // gets called if menu button itself is clicked
  updateVisibilityMenu() {
    this.navMenu.classList.toggle("hidden");
  }

  // gets called if other buttons are clicked
  closeMenu() {
    this.navMenu.classList.add("hidden");
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
    btnPdf.classList.add("btn-pdf");
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
    this.state = { ...this.state, ...newState };
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

  clearContent(role) {
    const className = `module-${role.replace("btn-", "")}`;
    this.containerCards.innerHTML = "";
    this.containerCards.classList = className;
  }

  setActiveButton(btn) {
    this.btnHome.classList.remove("selected-btn");
    this.btnMenu.classList.remove("selected-btn");
    this.btnRegistration.classList.remove("selected-btn");
    this.btnHelp.classList.remove("selected-btn");

    btn.classList.add("selected-btn");
  }
}

export { UIController };
