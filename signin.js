document.querySelector("form").addEventListener("submit", signIn);
var userData = JSON.parse(localStorage.getItem("userDetails"))||[];
console.log(userData);
function signIn(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // console.log(typeof email, typeof password);

  for (var i = 0; i < userData.length; i++) {
    if (email == userData[i].email && password == userData[i].password) {
      // console.log(userData[i].email, userData[i].password);
      window.location.href = "./index.html";

      alert("login successful");
      return;
    } else if (email == "" || password == "") {
      alert("Fill the details");
      return;
    } else if (
      email !== userData[i].email &&
      password !== userData[i].password
    ) {
      alert("wrong email or password");
      return;
    }
  }
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
