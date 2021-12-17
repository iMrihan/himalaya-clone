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
    const {target} = event;

    if(!isCatalogVisible && target.id == "shop-link") {
      isCatalogVisible = !isCatalogVisible;
  
      toggleCatalog(isCatalogVisible);
    } 
    else if(isCatalogVisible) {
      isCatalogVisible = !isCatalogVisible;
      toggleCatalog(isCatalogVisible)
    }
  });
})

catalogs.addEventListener("mouseleave", function (event) {

  isCatalogVisible = !isCatalogVisible;
  toggleCatalog(isCatalogVisible)
})
