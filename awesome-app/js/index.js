(function () {
  function validateScreen() {
    const notiEl = document.getElementById("notification");
    const app = document.getElementById("app");
    if (window.screen.availWidth < 1300) {
      app.classList.add("hidden");
      notiEl.classList.remove("hidden");
    } else {
      app.classList.remove("hidden");
      notiEl.classList.add("hidden");
    }
  }

  function initTabEvent() {
    const tabs = document.querySelectorAll(".side-menu__tab .tab__item");
    tabs.forEach((el) => {
      el.addEventListener("click", (ev) => {
        const activeEl = document.querySelector(".side-menu__tab .tab__item.tab__item--active");
        if (activeEl !== null) {
          activeEl.classList.remove("tab__item--active");
        }
        el.classList.add("tab__item--active");
      });
    });

    initCategoryEvent();
  }

  function initCategoryEvent() {
    const categories = document.querySelectorAll(".category-list .category-list__item");
    categories.forEach((el) => {
      el.addEventListener("click", (ev) => {
        const activeEl = document.querySelector(".category-list .category-list__item.category-list__item--active");
        if (activeEl !== null) {
          activeEl.classList.remove("category-list__item--active");
        }
        el.classList.add("category-list__item--active");
      });
    });
  }

  function initSearchEvent() {
    const searchEl = document.querySelector(".header-search");
    const inpSearchEl = document.querySelector(".header-search .header-search__input");
    if (searchEl !== null && inpSearchEl !== null) {
      searchEl.addEventListener("click", (ev) => {
        inpSearchEl.focus();
      });
    }
  }

  window.addEventListener("load", function () {
    validateScreen();
    initTabEvent();
    initSearchEvent();
  });

  window.addEventListener("resize", validateScreen);
})();
