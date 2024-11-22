const gifHolder = document.getElementById("tamaGif");
const gif1 = "ShopItemJPEGs/donald-trump-potus.gif";
function swapGifs(gif2) {
    console.log("open");
    if (gifHolder.src.includes(gif1)) {
        gifHolder.src = gif2;
        setTimeout(resetGif, 3000);
    }
    else {
        console.log("help");
    }
}


function resetGif() {
    gifHolder.src = gif1;
}

gifHolder.addEventListener('click', function () {
    swapGifs("ShopItemJPEGs/racoon-raccoon.gif");
});