(function () {
  function initNavLinkEventListener() {
    const navs = document.getElementsByClassName("nav__link");
    for (let i = 0; i < navs.length; ++i) {
      navs[i].addEventListener("click", () => {
        const activeNav = document.getElementsByClassName(
          "nav__link nav__link--active"
        );
        if (activeNav.length > 0) {
          activeNav[0].classList.remove("nav__link--active");
        }
        navs[i].classList.add("nav__link--active");
      });
    }
  }

  function initHeaderEventListener() {
    const header = document.getElementById("header");

    window.addEventListener("scroll", (ev) => {
      const top = window.scrollY;
      if (top > 0) {
        header.classList.add("header--fixed");
      } else {
        header.classList.remove("header--fixed");
      }
    });
  }

  window.addEventListener("load", () => {
    initHeaderEventListener();
    initNavLinkEventListener();
  });
})();
