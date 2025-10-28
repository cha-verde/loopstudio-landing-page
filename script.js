
const header = document.querySelector("header")
const navigationHamburger = document.querySelector(".navigation-hamburger")
const navigationMobile = document.querySelector(".mobile")
const closeNavigationMobile = document.querySelector(".mobile__close")
const headerHero = document.querySelector(".hero__mobile")
const mobileLinks = document.querySelector(".mobile__links")



const mobileNavigationClose = document.querySelector(".mobile__close")

navigationHamburger.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    mobileLinks.style.display = "block";
    mobileLinks.style.position = "absolute";
})


mobileNavigationClose.addEventListener('click', () => {
    header.style.display = "block";
    navigationMobile.style.display = 'none';
    document.body.style.overflow = 'visible';
    navigationMobile.style.display = "block";
    mobileLinks.style.display = "none";
})


const card = document.querySelectorAll("div.card")

const desktopImages = [
    "./images/desktop/cards/image-curiosity.jpg",
    "./images/desktop/cards/image-deep-earth.jpg",
    "./images/desktop/cards/image-fisheye.jpg",
    "./images/desktop/cards/image-from-above.jpg",
    "./images/desktop/cards/image-grid.jpg",
    "./images/desktop/cards/image-night-arcade.jpg",
    "./images/desktop/cards/image-pocket-borealis.jpg",
    "./images/desktop/cards/image-soccer-team.jpg"
]

card.forEach(element => {
    const a = element.querySelector("a");
    const img = a.querySelector("img");
    const name = img.getAttribute("file");      
    desktopImages.forEach(i => {
        if(i.includes(name)){
            img.src = i;  
        }
    })
});

const mobileImages = [
    "./images/mobile/cards/image-curiosity.jpg",
    "./images/mobile/cards/image-deep-earth.jpg",
    "./images/mobile/cards/image-fisheye.jpg",
    "./images/mobile/cards/image-from-above.jpg",
    "./images/mobile/cards/image-grid.jpg",
    "./images/mobile/cards/image-night-arcade.jpg",
    "./images/mobile/cards/image-pocket-borealis.jpg",
    "./images/mobile/cards/image-soccer-team.jpg"
]


function changeHeader(media){
    if(media.matches){
        card.forEach(element => {
            const a = element.querySelector("a");
            const img = a.querySelector("img");
            const name = img.getAttribute("file");      
            mobileImages.forEach(i => {
                if(i.includes(name)){
                    img.src = i;  
                }
            })
        });
    }

    else{
        card.forEach(element => {
            const a = element.querySelector("a");
            const img = a.querySelector("img");
            const name = img.getAttribute("file");      
            desktopImages.forEach(i => {
                if(i.includes(name)){
                    img.src = i;  
                }
            })
        });
        
    }
}

const media = window.matchMedia("(width < 800px)")

media.addEventListener("change", () => {
    changeHeader(media);
})
