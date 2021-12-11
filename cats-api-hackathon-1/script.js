const allCatsUrl = "https://cataas.com/api/cats";
const catImageUrl = "https://cataas.com/cat/";
const searchByTagsUrl = "https://cataas.com/api/cats?tags=";

let cats;
let cats_container;
let popup;

const init = () => {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "nav-card");
  nav.innerHTML = `
  <form>
    <div class="search">
      <input type="text" class="search-cat" placeholder="Search by Tags" />
      <button type="submit" class="btn-search" id="btn">
        <img
          src="/assets/search-outline.svg"
          alt="search-icon"
          class="search-icon"
          value=""
        />
      </button>
    </div>
  </form>
  `;
  document.body.appendChild(nav);
  const div = document.createElement("div");

  div.setAttribute("class", "cats container-fluid");
  document.body.appendChild(div);

  cats = document.getElementsByClassName("cats")[0];
  cats_container = document.getElementsByClassName("cats-container")[0];

  const btn = document.getElementById("btn");
  btn.onclick = handleSearch;
  btn.onsubmit = handleSearch;

  createModal();
};

const createModal = () => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.setAttribute("id", "myModal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="" alt="Searched Cat" class="modal-cat">
    </div>
  `;

  document.body.appendChild(modal);
  popup = modal;
  const close = document.getElementsByClassName("close")[0];
  close.onclick = () => {
    modal.style.display = "none";
  };
  modal.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

const fetchAllCats = async () => {
  let catsId = [];
  try {
    const response = await fetch(allCatsUrl);
    const data = await response.json();
    catsId = data.map((cat) => cat.id);
    // console.log(catsId);
  } catch (err) {
    console.log(err);
  }
  return catsId;
};

const handleImageClick = () => {
  popup.style.display = "block";
  console.log("hell0");
};

const displayCats = async (fetchAll, filteredCatsId) => {
  try {
    let noResults = document.getElementsByClassName("noResults")[0];
    let catsId =
      fetchAll && !filteredCatsId ? await fetchAllCats() : filteredCatsId;

    if (catsId.length > 0) {
      // when the catsId is not empty hide the no result text
      noResults.style.display = "none";

      const cats_row = document.createElement("div");
      cats_row.setAttribute("class", "row cats-row");

      catsId.map((catId) => {
        let div = document.createElement("div");
        div.setAttribute("class", "col-3 catsCard");

        let img = document.createElement("img");
        img.setAttribute("id", "cat");
        img.setAttribute("class", "cat");
        // img.setAttribute("class", "col-3");
        img.setAttribute("src", `${catImageUrl}${catId}`);
        img.setAttribute("alt", "cats");

        // Add images only if they are loaded
        img.onload = () => {
          div.appendChild(img);
          cats_row.appendChild(div);
        };
        img.onclick = () => {
          popup.style.display = "block";
          // find image tag inside popup(modal)
          let imgTagInsideModal = popup.childNodes[1].childNodes[3];
          imgTagInsideModal.src = img.src;
        };
      });
      cats.appendChild(cats_row);
    } else {
      // when the catsId is  empty display the no result text
      document.getElementsByClassName("noResults")[0].style.display = "block";
    }
  } catch (err) {
    console.log(err);
  }
};

const handleSearch = async (e) => {
  try {
    e.preventDefault();
    // const modal = document.getElementById("myModal");
    // modal.style.display = "block";

    let searchInput = document.getElementsByClassName("search-cat")[0];
    let searchInputValue = searchInput.value;
    let search = document.getElementsByClassName("search")[0];

    if (!searchInputValue) {
      search.classList.add("search-error");
    } else {
      search.classList.remove("search-error");
      let filteredCatsId = [];

      const response = await fetch(`${searchByTagsUrl}${searchInputValue}`);
      const data = await response.json();

      filteredCatsId = data.map((filteredCat) => filteredCat.id);

      const cats_row = document.getElementsByClassName("cats-row")[0];

      if (cats_row) {
        cats.removeChild(cats_row);
      }
      displayCats(false, filteredCatsId);
    }

    // searchInputValue= "";
  } catch (err) {
    console.log(err);
  }
};

init();

displayCats(true);
