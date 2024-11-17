/* Created by Tivotal */

let images = document.querySelectorAll(".image");
let lightBox = document.querySelector(".light-box");

let preview = lightBox.querySelector(".preview");

let currentImg = lightBox.querySelector(".index");
let totalImg = lightBox.querySelector(".total");

let closeBtn = lightBox.querySelector(".close-btn");
let prevBtn = lightBox.querySelector(".prev");
let nextBtn = lightBox.querySelector(".next");

totalImg.textContent = images.length;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showLightBox(index);
    prevBtn.addEventListener("click", () => {
      index = index - 1;
      showLightBox(index);
    });
    nextBtn.addEventListener("click", () => {
      index = index + 1;
      showLightBox(index);
    });
  });
});

closeBtn.addEventListener("click", () => {
  lightBox.classList.remove("show");
});

function showLightBox(index) {
  lightBox.classList.add("show");

  currentImg.textContent = index + 1;

  preview.src = images[index].src;

  toggleBtn(index);
}

function toggleBtn(index) {
  if (index == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (index >= images.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}
