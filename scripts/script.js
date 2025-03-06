let bigImage = document.getElementById("big-image");
let srcGiftCard = "Gift Card ";
let image = 1;
let dots = document.querySelectorAll(".dot");

// Preload images
let images = [];
for (let i = 1; i <= 6; i++) {
    images[i] = new Image();
    images[i].src = `../images/${srcGiftCard}${i}.jpg`;
}

document.getElementById("prev").addEventListener("click", () => {
    if(image < 2) image = 7;
    bigImage.setAttribute("src", `../images/${srcGiftCard}${image-1}.jpg`);
    image--;
    for(let i = 0; i < dots.length; i++) {
        if(dots[i].classList.contains("active")) {
            dots[i].classList.remove("active");
        }
    }
    dots[image-1].classList.add("active");
});

document.getElementById("next").addEventListener("click", () => {
    if(image > 5) image = 0;
    bigImage.setAttribute("src", `../images/${srcGiftCard}${image+1}.jpg`);
    image++;
    for(let i = 0; i < dots.length; i++) {
        if(dots[i].classList.contains("active")) {
            dots[i].classList.remove("active");
        }
    }
    dots[image-1].classList.add("active");
});

document.addEventListener("click", (event) => {
    for(let i = 0; i < dots.length; i++) {
        if(event.target.matches(".dot" + (i+1))) {
            for(let i = 0; i < dots.length; i++) {
                if(dots[i].classList.contains("active")) {
                    dots[i].classList.remove("active");
                }
            }
            dots[i].classList.add("active");
            bigImage.setAttribute("src", `../images/${srcGiftCard}${i+1}.jpg`);
        }
    }
});