import "./styles.css";
import { UIController } from "./dom";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");
  const uiController = new UIController();

  const navUl = document.getElementById("nav-ul");
  const navButton = document.getElementById("nav-button");
  console.log(navUl);
  console.log(navButton);

  uiController.renderTiles();

  mainContainer.addEventListener("click", (event) => {
    const role = event.target.closest("[data-role]")?.dataset.role;
    console.log(role);

    if (role) {
      switch (role) {
        case "btn-menu":
          console.log("btn menu was pressed ma boi");
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
        default:
          console.log("something went wrong. Click event");
      }
    }
    // check for closing the nav menu in footer
    if (!navUl.contains(event.target) && !navButton.contains(event.target)) {
      console.log("Hello");
      uiController.closeMenu();
    }
  });
});
