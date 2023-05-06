const nav = document.querySelectorAll(".header_nav_item");
const pages = document.querySelectorAll(".page");

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
    const page = e.target.dataset.page;

    setPage(page);

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
