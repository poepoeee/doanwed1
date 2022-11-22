
const sectionItems = document.querySelectorAll(".list-product li");
var products=JSON.parse(localStorage.getItem("products"))
sectionItems.forEach((sectionItem, index) => {
  sectionItem.onclick = () => {
    document
      .querySelector(".list-product li.active")
      .classList.remove("active");
    sectionItem.classList.add("active");
    renderProduct(products[index]);
  };
});

// Render sản phẩm ra màn hình
function renderProduct(products) {
  const htmls = products
    .map((item) => {
      return `<li class="card" style="">
        <img src='${item.image}' style= {}">
        <div class="card-body">
        <div class="card-reviews">
        <i class="ti-star"></i>
        <i class="ti-star"></i>
        <i class="ti-star"></i>
        <i class="ti-star"></i>
        <i class="ti-star"></i>
        <p class="status-review">
            review
        </p>
        </div>
    <div class="card-info">
        <span class="info-name">
            ${item.name}
            ${item.weight}
        </span>
        <span class="info-price">
            ${item.price}
        </span>
    </div>
    </div>`;
    })
    .join("");
  document.querySelector(".right").innerHTML = htmls;
}

const cards = document.querySelectorAll(".card img");
cards.forEach(function (item) {
  item.addEventListener("mouseover", () => {
    item.style.width = "100%";
    item.style.height = "100%";
  });
});
