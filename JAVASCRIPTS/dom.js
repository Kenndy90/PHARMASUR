const openmenu = document.querySelector(".iconbar");
const closemenu = document.querySelector("#sideclose");
const Sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");
const openrayon = document.getElementById("rayonopen");
const Rayon = document.querySelector(".rayondemedicament");
const closerayon = document.getElementById("closerayon");

function openMenu(menu,open,close){
   open.addEventListener("click", () => {
    if ((menu.style.display = "none")) {
      menu.style.display = "flex";
      body.classList.add("no-scroll");
    }
  });
  close.addEventListener("click", () => {
    if ((menu.style.display = "flex")) {
      menu.style.display = "none";
      body.classList.remove("no-scroll");
    }
  });
}

openMenu(Sidebar,openmenu,closemenu)
openMenu(Rayon,openrayon,closerayon)


function fermerRayon() {
  Rayon.style.display = "none";
  body.classList.remove("no-scroll");
  openrayon.style.display = "flex";
  closerayon.style.display = "none";
}

fermerRayon();


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

