const openmenu = document.querySelector(".iconbar");
const closemenu = document.querySelector("#sideclose");
const Sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

function sidebartoggle() {
  openmenu.addEventListener("click", () => {
    if ((Sidebar.style.display = "none")) {
      Sidebar.style.display = "flex";
      body.classList.add("no-scroll");
    }
  });
  closemenu.addEventListener("click", () => {
    if ((Sidebar.style.display = "flex")) {
      Sidebar.style.display = "none";
      body.classList.remove("no-scroll");
    }
  });
}

sidebartoggle();

const openrayon = document.getElementById("rayonopen");
const Rayon = document.querySelector(".rayondemedicament");
const closerayon = document.getElementById("closerayon");
const rayonLink = document.querySelectorAll(".rayonlinks");
function rayontoggle() {
  openrayon.addEventListener("click", () => {
    if ((Rayon.style.display = "none")) {
      Rayon.style.display = "flex";
      body.classList.add("no-scroll");
      closerayon.style.display = "flex";
      openrayon.style.display = "none";
    }
  });
  closerayon.addEventListener("click", () => {
    if ((Rayon.style.display = "flex")) {
      Rayon.style.display = "none";
      body.classList.remove("no-scroll");
      openrayon.style.display = "flex";
      closerayon.style.display = "none";
    }
  });
}

rayontoggle();

function fermerRayon() {
  Rayon.style.display = "none";
  body.classList.remove("no-scroll");
  openrayon.style.display = "flex";
  closerayon.style.display = "none";
}

fermerRayon();

// ************ORDIMENU**********************
let openOrdimenu = document.getElementById("ordimenu");
let ordiMenu = document.querySelector(".ordilinks");
console.log(ordiMenu)
openOrdimenu.style.color= "red";
function menuDordi() {
  openmenu.addEventListener("click", () => {
    if ((ordiMenu.style.display = "none")) {
      ordiMenu.style.display = "flex";
    }
  });
}  

// ***********SCROLL ANIMATION*****************
let indexcompteur = 0;

function scrollindex(index) {
  const container = document.querySelector(".aviscrollable");
  const largeurDesBoites = container.offsetWidth;
  container.scrollTo({ left: largeurDesBoites * index, behavior: "smooth" });
}

function scrollgauche() {
  if (indexcompteur > 0) {
    indexcompteur--;
    scrollindex(indexcompteur);
  }
}

function scrollRight() {
  let scrollableright = document.querySelector(".aviscrollable");
  const maxIndex = scrollableright.children.length - 1;
  if (indexcompteur < maxIndex) {
    indexcompteur++;
    scrollindex(indexcompteur);
  }
}

// **********SYSTEME DE FILTRAGE*************

function filtrer(type) {
  const meds = document.querySelectorAll(".medicamentinfo,.medecinitems");

  meds.forEach((med) => {
    if (type === "tous" || med.dataset.type === type) {
      med.style.display = "flex";
    } else {
      med.style.display = "none";
    }
  });
}

filtrer("tous");

// **************NAVIGATION PAR ONGLETS***************

function openOnglet(evt, tabname) {
  const contents = document.querySelectorAll(".content");
  const tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active");
  }
  document.getElementById(tabname).style.display = "flex";
  evt.currentTarget.className += " active";
}

// *************VALIDATION ACHATS *****************

// document.addEventListener("DOMContentLoaded", function () {
//   const commandeButton = document.querySelector(".commandebutton");
//   const confirmationAchat = document.querySelector(".confirmationAchat");
//   commandeButton.addEventListener("click", function () {
//     confirmationAchat.style.display = "block";
//   });
// });
