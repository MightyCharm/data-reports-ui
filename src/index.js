import "./styles.css";
import { UIController } from "./dom";
import "@fortawesome/fontawesome-free/css/all.css";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");
  const uiController = new UIController();

  const navUl = document.getElementById("nav-ul");
  const navButton = document.getElementById("nav-button");

  const headerForm = document.getElementById("header-form");

  uiController.renderTiles();

  mainContainer.addEventListener("click", (event) => {
    const role = event.target.closest("[data-role]")?.dataset.role;
    let tile;
    let wrapper;
    console.log(role);

    if (role) {
      switch (role) {
        case "btn-menu":
          uiController.updateVisibilityMenu();
          break;
        case "nav-home":
          console.log("nav-home");
          uiController.closeMenu();
          break;
        case "nav-report":
          console.log("nav-report");
          uiController.closeMenu();
          break;
        case "nav-about":
          console.log("nav-about");
          uiController.closeMenu();
          break;
        case "tile":
          console.log("tile was clicked");
          tile = event.target.closest("[data-role]");
          wrapper = tile.parentElement;
          uiController.renderForm(wrapper);
          break;
        default:
          console.log("something went wrong. Click event");
      }
    }
    // check for closing the nav menu in footer
    if (!navUl.contains(event.target) && !navButton.contains(event.target)) {
      uiController.closeMenu();
    }
  });

  headerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit");
  });
});
