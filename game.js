let tomogachi_state = 
{
    health: 100, //initialized with max health
    happiness: 10,  //initialized with neutral happiness. 0 = depressed, 20 = very happy
    hunger: 0, //initialized at 0 hunger, loses 1 happiness at every increment when hunger is at +5, starts taking damage when hunger <= +20, starves to death at 100
};

chrome.storage.local.set({ tomogachi: tomogachi_state}); // saves initial state to local

chrome.alarms.create("tomogachi_feed", {interval_in_minutes: 60}); // sets alarm to activate every hour, reducing pets hunger by -1 and happiness by -1
