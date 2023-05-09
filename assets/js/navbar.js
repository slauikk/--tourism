const dropdowns = document.querySelectorAll(".header_nav_dropdown_title");
const burger = document.querySelector(".header_burger");
const header_nav = document.querySelector(".header_nav");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  const currentStatusDropdown = burger.dataset.active;
  console.log(currentStatusDropdown);

  switch (currentStatusDropdown) {
    case "true":
      console.log(1);
      header.classList.remove("active");
      header_nav.classList.remove("active");
      burger.classList.remove("active");
      burger.dataset.active = false;
      break;
    default:
      console.log(2);
      header.classList.add("active");
      header_nav.classList.add("active");
      burger.classList.add("active");
      burger.dataset.active = true;
  }
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    const element = e.target;
    const elementParent = element.parentElement;
    const elementSibling = element.nextElementSibling;
    const currentStatusDropdown = elementParent.dataset.opened;

    dropdowns.forEach((dropdown) => {
      const dropdownParent = dropdown.parentElement;
      const dropdownSibling = dropdown.nextElementSibling;

      dropdownParent.dataset.opened = false;
      dropdownParent.classList.remove("visible");
      dropdownSibling.style.height = `0px`;
    });

    switch (currentStatusDropdown) {
      case "true":
        elementParent.classList.remove("visible");
        elementParent.dataset.opened = false;
        elementSibling.style.height = `0px`;

        break;
      default:
        elementParent.classList.add("visible");
        elementParent.dataset.opened = true;
        elementSibling.style.height = `${elementSibling.scrollHeight + 20}px`;
    }
  });
});
