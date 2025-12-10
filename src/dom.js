import chart1 from "./images/chart1.jpg";
import chart2 from "./images/chart2.jpg";

class UIController {
  constructor() {
    this.navMenu = document.getElementById("nav-ul");
    this.containerTiles = document.getElementById("container-tiles");
  }

  renderTiles() {
    const seedData = [
      {
        title: "Title 1",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 2",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 3",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 4",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 5",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 6",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 7",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 8",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 9",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 10",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 11",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 12",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 13",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 14",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 15",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 16",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 17",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 18",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 19",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart1,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
      {
        title: "Title 20",
        description:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident quaerat?",
        imgSrc: chart2,
        imgAlt: "fancy chart of some data",
        addedInfo:
          "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?",
      },
    ];
    seedData.forEach((data) => {
      this.displayTiles(data);
    });
  }

  displayTiles(data) {
    /* 
     <article class="tile">
            <h3 class="tile-header">Title</h3>
            <p class="tile-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              provident quaerat?
            </p>
            <img
              class="tile-img"
              src="./images/chart1.jpg"
              alt="img of barchart"
            />
            <p class="tile-added-info">
              Ipsam deserunt alias, nihil vel excepturi voluptatem expedita
              necessitatibus reiciendis quod?
            </p>
          </article>
    */
    console.log(data);
    const article = document.createElement("article");
    const header3 = document.createElement("h3");
    const pDescription = document.createElement("p");
    const img = document.createElement("img");
    const pAddInfo = document.createElement("p");

    article.classList.add("tile");
    header3.classList.add("tile-header");
    header3.textContent = data.title;
    pDescription.classList.add("tile-description");
    pDescription.textContent = data.description;
    img.classList.add("tile-img");
    img.src = data.imgSrc;
    img.alt = "some fancy data charts";
    pAddInfo.classList.add("tile-added-info");
    pAddInfo.textContent =
      "Ipsam deserunt alias, nihil vel excepturi voluptatem expedita necessitatibus reiciendis quod?";

    article.appendChild(header3);
    article.appendChild(pDescription);
    article.appendChild(img);
    article.appendChild(pAddInfo);

    this.containerTiles.appendChild(article);
  }

  updateVisibilityMenu() {
    this.navMenu.classList.toggle("hidden");
  }

  closeMenu() {
    this.navMenu.classList.add("hidden");
  }
}

export { UIController };
