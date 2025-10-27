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
        console.log(i);
        console.log(name);
        if(i.includes(name)){
            img.src = i;  
        }
    })
});