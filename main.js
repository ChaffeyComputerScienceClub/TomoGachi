const gifHolder = document.getElementById("tamaGif");


function swapGifs() {
    const gif1 = "ShopItemJPEGs/donald-trump-potus.gif";
    const gif2 = "ShopItemJPEGs/racoon-raccoon.gif";
    
    gifHolder.src = gifHolder.src.includes(gif1) ? gif2 : gif1;

}

gifHolder.addEventListener('click', swapGifs);