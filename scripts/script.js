const carouselImage = document.getElementById("carousel-image");
const srcOil = "Gift Card ";
const dots = document.querySelectorAll(".dot");
const carouselTitle = document.querySelector(".carousel-text-container h2");
const carouselText = document.querySelector(".carousel-text-container p");
let autoSlide = setInterval(next, 2500); 
let image = 1;

document.getElementById("prev").addEventListener("click", () => {
    prev();
    resetAutoSlide();
});
document.getElementById("next").addEventListener("click", () => {
    next();
    resetAutoSlide();
});

function prev() {
    if(image < 2) image = 5;
    image--;
    checkCarouselTitleAndText();
    carouselImage.setAttribute("src", `images/${srcOil}${image}.jpg`);
    for(let i = 0; i < dots.length; i++)
    {
        if(dots[i].classList.contains("active"))
        {
            dots[i].classList.remove("active");
        }
    }
    dots[image-1].classList.add("active");
}

function next() {
    if(image > 3) image = 0;
    image++;
    checkCarouselTitleAndText();
    carouselImage.setAttribute("src", `images/${srcOil}${image}.jpg`);
    for(let i = 0; i < dots.length; i++)
    {
        if(dots[i].classList.contains("active"))
        {
            dots[i].classList.remove("active");
        }
    }
    dots[image-1].classList.add("active");
}

function startAutoSlide() {
    autoSlide = setInterval(next, 2500);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}


document.addEventListener("click", (event) => {
    for(let i = 0; i < dots.length; i++)
    {
        if(event.target.matches(".dot" + (i+1)))
        {
            for(let i = 0; i < dots.length; i++)
            {
                if(dots[i].classList.contains("active"))
                {
                    dots[i].classList.remove("active");
                }
            }
            dots[i].classList.add("active");
            image = i + 1;
            checkCarouselTitleAndText();
            // resetAutoSlide();
            carouselImage.setAttribute("src", `images/${srcOil}${image}.jpg`);
        }
    }
});

function checkCarouselTitleAndText() {
    if(image === 1) {
        carouselTitle.textContent = "Petrol Engine Oil";
        carouselText.textContent = "Lubricant for your car motor engines";
    } else if (image === 2) {
        carouselTitle.textContent = "Motorcycle Oil";
        carouselText.textContent = "Lubricant for your motorcycle";
    } else if (image === 3) {
        carouselTitle.textContent = "Commercial Oil";
        carouselText.textContent = "Lubricant for your commercial vehicles";
    } else if (image === 4) {
        carouselTitle.textContent = "Industrial Oil";
        carouselText.textContent = "Lubricant for general industrial application";
    }
}