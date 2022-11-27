
const cards = document.querySelectorAll(".card img");
cards.forEach(function (item) {
  item.addEventListener("mouseover", () => {
    item.style.width = "100%";
    item.style.height = "100%";
  });
});
