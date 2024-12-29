const gifHolder = document.getElementById("tamaGif");
const gif1 = "/images/tomoIdle.gif";
const happinessMeter = document.getElementById("happiness-meter");
const hungerMeter = document.getElementById("hunger-meter");
const friendshipMeter = document.getElementById("friendship-meter");
let startTime = null;

function swapGifs(gif2) {
    console.log("wtf");
    if (gifHolder.src.includes(gif1)) {
        gifHolder.src = gif2;
        setTimeout(resetGif, 2000);
    }
    else {
        console.log("help");
    }
}


function resetGif() {
    gifHolder.src = gif1;
}

gifHolder.addEventListener('click', function() {
    swapGifs("/images/tomoHeart.gif");
    friendshipMeter.value += 10;
});


setInterval (() => {
    //email ? >:}
    let currentTime = Date.now();
   
    
    const num = 1;
    friendshipMeter.value -= num * ((currentTime - startTime) / 6000);
    happinessMeter.value -= num * ((currentTime - startTime) / 6000);
    hungerMeter.value -= num * ((currentTime - startTime) / 6000);
    console.log((currentTime - startTime) / 6000);
    console.log(currentTime);
    console.log(startTime);
    startTime = currentTime - 6000;
    // if (friendshipMeter.value <= 10) {
    //     console.log("friend down!!");
    // }
    // if (happinessMeter.value <= 10) {
    //     console.log("im sad");
    // }
    // if (hungerMeter.value <= 10) {
    //     console.log("hung");
    // }
    set(ref(db, testUser + "/Clock/"), {
        Time: currentTime
    })
    
    console.log("1 minute has passed");
}, 6000);


  document.addEventListener('DOMContentLoaded', async function () {
    const checkInterval = setInterval(() => {
        if (typeof window.get === "function") {
            get(ref(db, user.displayName + "/Clock/"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        startTime = snapshot.child("Time").val();
                        console.log("Start Time:", startTime);
                    } else {
                        console.log("No data found at the path.");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });

            // Stop checking once the function is available
            clearInterval(checkInterval);
        }
    }, 10); // Check every 100ms
});
