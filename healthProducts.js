import healthData from "./js/health.js";
// console.log(healthData);
var shoppingArr = JSON.parse(localStorage.getItem("shoppingBag")) || [];
displayItems(healthData);
var select = document.getElementById("product-sort");
select.addEventListener("change", sortHandle);

function sortHandle(e) {
  var value = e.target.value;
  console.log(value);
  if (value == "nameAscending") {
    healthData.sort(function (a, b) {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    });
  }
  if (value == "nameDescending") {
    healthData.sort(function (a, b) {
      if (a.title > b.title) return -1;
      else if (a.title < b.title) return 1;
      else return 0;
    });
  }
  if (value == "priceAscending") {
    healthData.sort(function (a, b) {
      return +a.price.slice(1) - +b.price.slice(1);
    });
  }

  if (value == "priceDescending") {
    healthData.sort(function (a, b) {
      return +b.price.slice(1) - +a.price.slice(1);
    });
  }

  displayItems(healthData);
}

function displayItems(healthData) {
  document.querySelector(".product-image-link-right").textContent = "";

  healthData.map(function (elem) {
    var mainDiv = document.querySelector(".product-image-link-right");
    var container = document.createElement("div");

    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "prod");
    var img = document.createElement("img");
    img.setAttribute("src", elem.imgUrl);
    imageDiv.append(img);
    var detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "detailsDiv");
    var text = document.createElement("p");
    text.textContent = elem.title;
    var price = document.createElement("h4");
    var btn = document.createElement("button");
    btn.textContent = "Add To Cart";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    price.textContent = elem.price;
    detailsDiv.append(text, price, btn);
    container.append(imageDiv, detailsDiv);
    mainDiv.append(container);
  });
}
function addToCart(elem) {
  shoppingArr.push(elem);
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingArr));
}

var credentialsSlider = document.querySelector(".credentials-slider");
var myAccountLink = document.getElementById("my-account-link");
var catalogs = document.querySelector(".catalogs");
var navLinks = document.querySelectorAll("#left-navbar-links > li > a");
var leftNavLinks = document.getElementById("left-navbar-links");

// console.log(navLinks);
var isLinksVisible = false;

function toggleLinks(isLinksVisible) {
  credentialsSlider.style.display = isLinksVisible ? "flex" : "none";
}

myAccountLink.addEventListener("click", function (event) {
  isLinksVisible = !isLinksVisible;

  toggleLinks(isLinksVisible);
});

var isCatalogVisible = false;

function toggleCatalog(isCatalogVisible) {
  catalogs.style.display = isCatalogVisible ? "flex" : "none";
}

navLinks.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (event) {
    const { target } = event;

    if (!isCatalogVisible && target.id == "shop-link") {
      isCatalogVisible = !isCatalogVisible;

      toggleCatalog(isCatalogVisible);
    } else if (isCatalogVisible) {
      isCatalogVisible = !isCatalogVisible;
      toggleCatalog(isCatalogVisible);
    }
  });
});

catalogs.addEventListener("mouseleave", function (event) {
  isCatalogVisible = !isCatalogVisible;
  toggleCatalog(isCatalogVisible);
});
catalogs.style.display = "none";
