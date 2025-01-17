const modal = document.querySelector("#modal");
const imgInModal = document.querySelector("#modal-img");

//? btnn-navigation
const btnClose = document.querySelector(".close");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

const gallery = document.querySelector(".gallery-img");

let currentIndex = 0;

// array of objects img
let galleryImages = [
  { src: "./img/kitchen.jpg", caption: "køkkenet" },
  { src: "./img/bathroom.jpg", caption: "badeværelset" },
  { src: "./img/livingroom.jpg", caption: "stuen" },
  { src: "./img/garden.jpg", caption: "haven" },
];



// galleryImages.forEach((item, index) => {
//   console.log(`Index: ${index}, Src: ${item.src}, Caption: ${item.caption}`);
//  })

galleryImages.forEach((item) => {
  gallery.innerHTML += `
  <div class='gallery-item'>
  <img src='${item.src}' alt='${item.caption}' class='img'>
  <p class="img-caption">${item.caption}</p>  
  </div>
  `;
});

//? MODAL-GALLERY
// update-img-in modal window
function setActiveSlider() {
  if (galleryImages.length > 0) {
    imgInModal.src = galleryImages[currentIndex].src;
  }
}

//?

setActiveSlider();

function right() {
  if (currentIndex >= galleryImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setActiveSlider();
}

btnRight.addEventListener("click", right);

function left() {
  if (currentIndex === 0) {
    currentIndex = galleryImages.length - 1;
  } else {
    currentIndex--;
  }
  setActiveSlider();
}

btnLeft.addEventListener("click", left);

//? MODAL-GALLERY-ARROWS

btnClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
  }
});

const img = document.querySelectorAll(".img");

img.forEach((element) => {
  element.addEventListener("click", (e) => {
    let imgSrc = e.target.getAttribute("src");
    imgInModal.setAttribute("src", imgSrc);
    modal.classList.add("show");
  });
});
