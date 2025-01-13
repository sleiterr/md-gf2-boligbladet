const slide = document.querySelector(".image-in-slide");

let currentImageIndex = 0;

let images = ["./img/slider1.jpg", "./img/slider2.jpg", "./img/slider3.jpg"];

function heroActiveSlide() {
  slide.src = images[currentImageIndex];
}
heroActiveSlide();

setInterval(function () {
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  heroActiveSlide();
}, 4000);

