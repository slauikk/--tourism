const nav = document.querySelectorAll(".header_nav_item");
const pages = document.querySelectorAll(".page");

const PBurger = document.querySelector(".header_burger");
const PHeader_nav = document.querySelector(".header_nav");
const PHeader = document.querySelector(".header");

function setPage(page) {
  pages.forEach((pagesItem) => {
    pagesItem.classList.add("hidden");
  });

  document.getElementById(page).classList.remove("hidden");

  localStorage.setItem("page", page);
}

const page = localStorage.page;

page ? setPage(page) : setPage("home");

nav.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    window.scrollTo(0, 0);

    const page = e.target.dataset.page;

    setPage(page);

    //close mobile menu
    const currentStatusDropdown = PBurger.dataset.active;
    console.log(currentStatusDropdown);

    switch (currentStatusDropdown) {
      case "true":
        console.log(1);
        PHeader.classList.remove("active");
        PHeader_nav.classList.remove("active");
        PBurger.classList.remove("active");
        PBurger.dataset.active = false;
        break;
      default:
        console.log(2);
    }

    //close dropdown menu
    const element = e.target;
    const elementParent = element.closest(".header_nav_dropdown");
    const elementParentMenu = element.closest(".header_nav_dropdown_menu");
    if (elementParent) {
      elementParent.dataset.opened = false;
      elementParent.classList.remove("visible");
      elementParentMenu.style.height = `0px`;
    } else {
      const dropdowns = document.querySelectorAll(".header_nav_dropdown_title");
      dropdowns.forEach((dropdown) => {
        const dropdownParent = dropdown.parentElement;
        const dropdownSibling = dropdown.nextElementSibling;

        dropdownParent.dataset.opened = false;
        dropdownParent.classList.remove("visible");
        dropdownSibling.style.height = `0px`;
      });
    }
  });
});
