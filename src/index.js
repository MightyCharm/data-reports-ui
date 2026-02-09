import "./styles.css";
import "./help.css";
import { UIController } from "./uiController.js";
import { data } from "./data.js";
import { createModuleHelp } from "./help.js";
import "@fortawesome/fontawesome-free/css/all.css";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");
  const containerDynamicContent = document.getElementById(
    "container-dynamic-content",
  );

  const navBtn = document.getElementById("menu-button");
  // const btnSubmit = document.getElementById("btn-submit");
  const navUl = document.getElementById("nav-ul");

  const uiController = new UIController(data);
  let resizeTimer = null;

  uiController.renderCards();

  mainContainer.addEventListener("click", (event) => {
    const role = event.target.closest("[data-role]")?.dataset.role;
    let card;
    console.log("role: ", role);
    switch (role) {
      case "btn-menu":
        console.log("btn-menu");
        uiController.updateVisibilityMenu();
        uiController.setState({
          activeCard: null,
          prevCard: null,
          formOpen: false,
        });
        uiController.removeForm();
        uiController.updateCardVisibility();
        break;
      case "nav-home":
      case "nav-report":
      case "nav-about":
        uiController.closeMenu();
        break;
      case "btn-registration":
        console.log("btn-registration was clicked");
        break;
      case "btn-help":
        uiController.clearContent(role);
        createModuleHelp(containerDynamicContent);
        break;
      case "card":
        console.log("card");
        uiController.closeMenu();
        card = event.target.closest("[data-role]");
        console.log(card);
        if (uiController.state.activeCard) {
          // console.log("there is an active card");
          if (card === uiController.state.activeCard) {
            // console.log("same card was clicked again");
            uiController.setState({
              activeCard: null,
              prevCard: null,
              formOpen: false,
            });
          } else {
            // console.log("a different card was clicked");
            uiController.setState({
              prevCard: uiController.state.activeCard,
              activeCard: card,
              formOpen: true,
            });
          }
        } else {
          // console.log("there is no active card");
          uiController.setState({ activeCard: card, formOpen: true });
        }
        if (uiController.currentForm) {
          uiController.removeForm();
        }
        uiController.renderForm();
        uiController.updateCardVisibility();
        break;
      case "btn-close-form":
        console.log("btn-close-form");
        uiController.closeMenu();
        uiController.setState({
          activeCard: null,
          prevCard: null,
          formOpen: false,
        });
        if (uiController.currentForm) {
          uiController.removeForm();
        }
        uiController.updateCardVisibility();
        break;
      default:
        console.log("default case");
        break;
    }

    if (
      !navUl.contains(event.target) &&
      !navBtn.contains(event.target) &&
      !event.target.closest("[data-role='card']") &&
      !event.target.closest(".form-data") &&
      !event.target.closest("#btn-submit")
    ) {
      console.log(
        "click was not in navUl/navBtn/card/form/btn-submit -> updateWrapper/removeForm",
      );
      uiController.closeMenu();
      uiController.setState({
        activeCard: null,
        prevCard: null,
        formOpen: false,
      });
      if (uiController.currentForm) {
        uiController.removeForm();
      }
      uiController.updateCardVisibility();
    }
  });

  mainContainer.addEventListener("change", (event) => {
    const role = event.target.dataset.role;
    console.log("change event listener: ", role);
    let card = undefined;
    let img = undefined;
    switch (role) {
      case "select":
        card = event.target.closest(".card");
        img = card.querySelector("img");
        uiController.updateChart(event.target.value, img);
        break;
    }
  });

  mainContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    uiController.closeMenu();
    uiController.setState({
      activeCard: null,
      prevCard: null,
      formOpen: false,
    });
    uiController.removeForm();
    uiController.updateCardVisibility();
    console.log("submit");
  });

  window.addEventListener("resize", () => {
    // const card = event.target.closest("[data-role]");
    // console.log(card);
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // new logic needed
      if (uiController.currentForm) {
        uiController.removeForm();
        uiController.renderForm();
      }
    }, 100);
  });
});
