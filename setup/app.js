const slide = document.querySelectorAll(".slide");
console.log(slide);
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
console.log(slide.length);
let i = 0;
slide.forEach(function (item, index) {
  item.style.left = `${index * 100}%`;
});
prevBtn.style.display = "none"

nextBtn.addEventListener("click", function () {
 prevBtn.style.display = "block"
  if (i === slide.length - 2) {
    nextBtn.style.display =  "none"
  }
  if (i < slide.length - 1) {
    i++;
  }
  corousel();
});
prevBtn.addEventListener("click", function () {
  nextBtn.style.display = "block";
   if (i === 1) {
     console.log("hi");
     prevBtn.style.display = "none";
   }
  if (i > 0) {
    i--;
  }
  corousel();
});

function corousel() {
  slide.forEach(function (item) {
    item.style.transform = `translateX(-${i * 100}%)`;
  });
}
