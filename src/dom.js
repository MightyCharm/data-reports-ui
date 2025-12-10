class UIController {
  constructor() {
    this.navMenu = document.getElementById("nav-ul");
  }

  updateVisibilityMenu() {
    console.log("new class and so");
    this.navMenu.classList.toggle("hidden");
  }

  closeMenu() {
    this.navMenu.classList.add("hidden");
  }
}

export { UIController };
