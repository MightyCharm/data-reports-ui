import "./styles.css";
import { UIController } from "./dom";
import "@fortawesome/fontawesome-free/css/all.css";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-container");

  const navBtn = document.getElementById("nav-button");
  // const btnSubmit = document.getElementById("btn-submit");
  const navUl = document.getElementById("nav-ul");
  console.log(mainContainer);

  const uiController = new UIController();
  let resizeTimer = null;

  uiController.renderCards();

  mainContainer.addEventListener("click", (event) => {
    const role = event.target.closest("[data-role]")?.dataset.role;
    let card;
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
