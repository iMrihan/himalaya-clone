document.querySelector("form").addEventListener("submit", registerForm);
var userData = JSON.parse(localStorage.getItem("userDetails")) || [];

function registerForm(event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // console.log(firstName, lastName, email, password);

  var registerData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  userData.push(registerData);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
    window.location.href = "signin.html";
  } else {
    alert("Fill the details");
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
