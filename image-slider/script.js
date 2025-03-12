const leftBtn = document.querySelector(".btn-left");
const rigthBtn = document.querySelector(".btn-right");
const imageContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll(".img-grid img");

const images = ["img0", "img1", "img2", "img3", "img4"];

let counter = 0;

const blurImages = () => {
  imgs.forEach((img) => (img.style.opacity = "0.3"));
};

const moveLeft = () => {
  counter--;
  blurImages();
  if (counter < 0) {
    counter = imgs.length - 1;
  }
  imageContainer.style.backgroundImage = `url(./images/${images[counter]}.jpg)`;
  imgs[counter].style.opacity = "1";
};

const moveRight = () => {
  counter++;
  blurImages();
  if (counter > images.length) {
    counter = 0;
  }
  imageContainer.style.backgroundImage = `url(./images/${images[counter]}.jpg)`;
  imgs[counter].style.opacity = "1";
};

leftBtn.addEventListener("click", moveLeft);
rigthBtn.addEventListener('click' , moveRight);


imgs.forEach((img, index) => {
    img.addEventListener('click', (e) =>{
        imageContainer.style.backgroundImage = `url(${img.getAttribute('src')}`;
        blurImages();
        img.style.opacity = '1';
        counter = index;
    })
})
