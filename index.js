const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = () => {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png"
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png"
  }
};
