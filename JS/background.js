//allows game.js to run in the background
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("/HTML/signup.html") });
  });
  

// let tomogachi_state = 
// {
//     health: 100, //initialized with max health
//     happiness: 10,  //initialized with neutral happiness. 0 = depressed, 20 = very happy
//     hunger: 0, //initialized at 0 hunger, loses 1 happiness at every increment when hunger is at +5, starts taking damage when hunger <= +20, starves to death at 100
// };

// chrome.storage.local.set({ tomogachi: tomogachi_state}); // saves initial state to local
// chrome.alarms.create("tomogachi_feed", {periodInMinutes: 60}); // sets alarm to activate every hour, reducing pets hunger by -1 and happiness by -1

// function hunger_management(tomogachi) 
// {
//     tomogachi.hunger += 1;

//     if (tomogachi.hunger >= 5)
//     {
//         tomogachi.happiness -= 1;
//     }

//     if (tomogachi.hunger >= 20 && tomogachi.hunger <= 100)
//     {
//         const damage = tomogachi.hunger - 1; //tomogachi loses 1 health every hour, while hunger >= 20 and <- 100
//         tomogachi.health -= damage;
//     }

//     if (tomogachi.hunger > 100) //tomogachi dies if hunger > 100
//     {
//         tomogachi.health = 0;
//     }
    
//     return tomogachi;
// }

// chrome.alarms.onAlarm.addListener((alarm) => 
// {
//     if (alarm.name == "tomogachi_feed") //runs hunger / happiness bar
//     {
//         chrome.storage.local.get(["tomogachi"], (result) => //gets local tomogachi state and runs result on tomogachi every hour
//         {
//             if (result.tomogachi)
//             {
//                 let updated_tomogachi = hunger_management(result.tomogachi);
//                 chrome.storage.local.set({ tomogachi: updated_tomogachi });
//             }
//         });
//     }
// });

