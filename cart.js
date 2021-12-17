var shoppingBag = JSON.parse(localStorage.getItem("shoppingBag")) || [];
// console.log(shoppingBag);

displayShoppingBag(shoppingBag);
// console.log(shoppingBag.length);

// console.log(items.textContent);

function displayShoppingBag(shoppingBag) {
  var sum = 0;

  for (var i = 0; i < shoppingBag.length; i++) {
    sum += +shoppingBag[i].price.slice(1);
  }

  console.log(sum);
  var totalPrice = document.querySelectorAll("span")[3];
  totalPrice.textContent = sum;

  document.querySelector(".product-image-link-right").textContent = "";
  var items = document.querySelectorAll("span")[2];

  items.textContent = shoppingBag.length;

  shoppingBag.map(function (elem, index) {
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
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {
      deleteTask(index);
    });
    price.textContent = elem.price;
    detailsDiv.append(text, price, btn);
    container.append(imageDiv, detailsDiv);
    mainDiv.append(container);

    var deleteAll = document.getElementById("deleteAll");
    deleteAll.addEventListener("click", function () {
      deleteAllTask(shoppingBag);
    });
  });
}

var btn = document.querySelector(".checkOut-button");
btn.addEventListener("click", function () {
  if (shoppingBag.length > 0) {
    window.location.href = "./shippingAddress.html";
  } else {
    alert("Please add the product");
  }
});

function deleteTask(index) {
  shoppingBag.splice(index, 1);
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  displayShoppingBag(shoppingBag);
}
function deleteAllTask(shoppingBag) {
  console.log(shoppingBag.splice(0, shoppingBag.length));
  localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  displayShoppingBag(shoppingBag);
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
