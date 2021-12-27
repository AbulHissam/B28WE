const allCatsUrl = "https://cataas.com/api/cats";
const catImageUrl = "https://cataas.com/cat/";
const searchByTagsUrl = "https://cataas.com/api/cats?tags=";

let cats, cats_container, popup, noResults, searchInput;

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

  // no result
  const noResult = document.createElement("div");
  noResult.setAttribute("class", "noResults");
  noResult.innerHTML = `<p>No results found</p>`;
  document.body.appendChild(noResult);

  // Handling seatrch
  const btn = document.getElementById("btn");
  btn.onclick = handleSearch;
  btn.onsubmit = handleSearch;

  // cats = document.getElementsByClassName("cats")[0];
  // Jquery
  cats = $(".cats")[0];
  cats_container = $(".cats-container")[0];
  noResults = $(".noResults")[0];

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
  const close = $(".close")[0];
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

const displayCats = async (fetchAll, filteredCatsId) => {
  try {
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
        img.setAttribute("src", `${catImageUrl}${catId}`);
        img.setAttribute("alt", "cats");

        // Add images only if they are loaded
        img.onload = () => {
          div.appendChild(img);
          cats_row.appendChild(div);
        };

        // On click open up a modal with corresponding cat image
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
      noResults.style.display = "block";
    }
  } catch (err) {
    console.log(err);
  }
};

const handleSearch = async (e) => {
  try {
    e.preventDefault();

    let searchInput = $(".search-cat")[0];
    let searchInputValue = searchInput.value;
    let search = $(".search")[0];

    search.classList.remove("search-error");

    let filteredCatsId = [];

    const response = await fetch(`${searchByTagsUrl}${searchInputValue}`);
    const data = await response.json();

    filteredCatsId = data.map((filteredCat) => filteredCat.id);

    const cats_row = $(".cats-row")[0];
    if (cats_row) {
      cats.removeChild(cats_row);
    }
    // Dont display all cats,display only filtered cats
    displayCats(false, filteredCatsId);

    // if (!searchInputValue) {
    //   // When searchInput value is empty display red outline to indicate user
    //   search.classList.add("search-error");
    // } else {
    //   // Continue to fliter only if searchInput value is not empty

    // }

    // searchInputValue= "";
  } catch (err) {
    console.log(err);
  }
};

// Intialize some initial elements
init();
// Display All cats at first
displayCats(true);
