var catTitle = document.querySelectorAll(".cat-title");
var mobilesShow = document.querySelector(".mobiles-show");
var accessShow = document.querySelector(".access-show");
function showMobiles() {
  catTitle[1].classList.remove("active-color");
  catTitle[0].classList.add("active-color");
  mobilesShow.classList.remove("d-none");
  accessShow.classList.add("d-none");
}
function showAccess() {
  catTitle[0].classList.remove("active-color");
  catTitle[1].classList.add("active-color");
  mobilesShow.classList.add("d-none");
  accessShow.classList.remove("d-none");
}

var menuList1 = document.querySelector(".menu-list-1");
var naviLink = document.querySelectorAll(".navi-link");
var searhIcon2 = document.querySelector(".search-icon-2");
var searchBar = document.querySelector(".search-bar");
var bgColor = document.querySelector(".bg-color");
var barsIcon = document.querySelector(".bars-icon");
function showMenu() {
  menuList1.classList.toggle("w-75");
  searhIcon2.classList.toggle("d-block");
  searchBar.classList.toggle("d-block");
  naviLink[0].classList.toggle("d-block");
  naviLink[1].classList.toggle("d-block");
  naviLink[2].classList.toggle("d-block");
  naviLink[3].classList.toggle("d-block");
  naviLink[4].classList.toggle("d-block");
  bgColor.classList.toggle("d-block");
}

var quantity = document.getElementById("quantity");

function increaseQ() {
  var i = quantity.value;
  i++;
  quantity.value = i;
}
function decreaseQ() {
  var i = quantity.value;
  if (i > 0) {
    i--;
    quantity.value = i;
  }
}
var options1 = {
  fillContainer: true,
  offset: { vertical: 0, horizontal: 10 },
};

new ImageZoom(document.getElementById("img-container"), options1);
