// global variable declaration start here
const category = document.querySelectorAll(".category"),
  filterItem = document.querySelectorAll(".filter-item");
// global variable declaration end here

// filtering start here
for (let item of filterItem) {
  item.classList.add("show");
};
// event for each ul button start here
category.forEach(function (element) {
  element.addEventListener("click", () => {
    const active = document.querySelector(".active"),
      ulAttribute = element.getAttribute('data-target');
    if (active) {
      active.classList.remove("active");
    }
    element.classList.add("active");
    // event for each list item start here
    filterItem.forEach(function (list) {
      const listAttribute = list.getAttribute('data-target');
      if (ulAttribute == listAttribute || ulAttribute == 'All') {
        list.classList.add("show");
      } else {
        list.classList.remove("show");
      }
    });
  });
});
// filtering end here
