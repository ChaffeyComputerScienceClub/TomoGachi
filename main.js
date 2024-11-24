const gifHolder = document.getElementById("tamaGif");
const gif1 = "ShopItemJPEGs/donald-trump-potus.gif";
const happinessMeter = document.getElementById("happiness-meter");
const hungerMeter = document.getElementById("hunger-meter");
const friendshipMeter = document.getElementById("friendship-meter");


function swapGifs(gif2) {
    console.log("wtf");
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

gifHolder.addEventListener('click', function() {
    swapGifs("ShopItemJPEGs/racoon-raccoon.gif");
    friendshipMeter.value += 10;
});


setInterval (() => {
    console.log("1 minute has passed");
    const num = 1;
    friendshipMeter.value -= num;
    happinessMeter.value -= num;
    hungerMeter.value -= num;
    if (friendshipMeter.value <= 10) {
        console.log("friend down!!");
    }
    if (happinessMeter.value <= 10) {
        console.log("im sad");
    }
    if (hungerMeter.value <= 10) {
        console.log("hung");
    }
}, 60000);