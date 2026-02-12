import "./styles.css";
import "./home.css";
import "./contact.css";
import "./help.css";

import { UIController } from "./uiController.js";
import { data } from "./data.js";
import { createModuleHome, updateChart } from "./home.js";
import { createModuleContact } from "./contact.js";
import { createModuleHelp } from "./help.js";
import "@fortawesome/fontawesome-free/css/all.css";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");
  const containerDynamicContent = document.getElementById(
    "container-dynamic-content",
  );

  const navBtn = document.getElementById("btn-menu");
  const navUl = document.getElementById("nav-ul");

  const uiController = new UIController(data);
  let resizeTimer = null;

  // create home view and select active btn
  createModuleHome(containerDynamicContent, data);
  uiController.setActiveButton(document.getElementById("btn-home"));

  mainContainer.addEventListener("click", (event) => {
    const role = event.target.closest("[data-role]")?.dataset.role;
    let card;
    let button;
    // console.log("role: ", role);
    switch (role) {
      case "btn-home":
        console.log("btn-home");
        uiController.clearContent(role);
        uiController.closeMenu();
        uiController.setActiveButton(event.target);
        createModuleHome(containerDynamicContent, data);
        break;
      case "btn-menu":
        console.log("btn-menu");
        uiController.updateVisibilityMenu();
        uiController.setState({
          activeCard: null,
          prevCard: null,
          formOpen: false,
        });
        // could be button or kebab clicked, so we search for closest button using role
        button = event.target.closest("[data-role]");
        uiController.setActiveButton(button);
        uiController.removeForm();
        uiController.updateCardVisibility();
        break;
      case "btn-contact":
        //====================================================
        console.log("open contact module");
        uiController.clearContent(role);
        createModuleContact(containerDynamicContent);
        uiController.closeMenu();
        break;
      case "btn-report":
      case "btn-about":
        uiController.closeMenu();
        break;
      case "btn-registration":
        console.log("btn-registration");
        uiController.closeMenu();
        uiController.setActiveButton(event.target);
        break;
      case "btn-help":
        console.log("btn-help");
        uiController.clearContent(role);
        createModuleHelp(containerDynamicContent);
        uiController.closeMenu();
        uiController.setActiveButton(event.target);
        break;
      case "card":
        console.log("card");
        uiController.closeMenu();
        card = event.target.closest("[data-role]");
        //console.log(card);
        if (uiController.state.activeCard) {
          if (card === uiController.state.activeCard) {
            uiController.setState({
              activeCard: null,
              prevCard: null,
              formOpen: false,
            });
          } else {
            uiController.setState({
              prevCard: uiController.state.activeCard,
              activeCard: card,
              formOpen: true,
            });
          }
        } else {
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
      !event.target.closest("#btn-home") &&
      !event.target.closest("#btn-registration") &&
      !event.target.closest("#btn-help") &&
      !event.target.closest("#btn-submit")
    ) {
      //console.log("click was not in navUl/navBtn/card/form/btn-home/btn-help/btn-submit -> updateWrapper/removeForm");
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
        updateChart(event.target.value, data, img);
        // uiController.updateChart(event.target.value, img);

        break;
    }
  });

  mainContainer.addEventListener("submit", (event) => {
    console.log("submit event listener");
    event.preventDefault();

    uiController.closeMenu();
    uiController.setState({
      activeCard: null,
      prevCard: null,
      formOpen: false,
    });
    uiController.removeForm();
    uiController.updateCardVisibility();
  });

  window.addEventListener("resize", () => {
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
