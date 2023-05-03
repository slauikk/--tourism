const dropdowns = document.querySelectorAll(".header_nav_dropdown_title");

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
