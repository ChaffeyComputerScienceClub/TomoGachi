//allows game.js to run in the background

chrome.alarms.onAlarm.addListener((alarm) => 
{
    if (alarm.name == "tomogachi_feed") //runs hunger / happiness bar
    {
        chrome.storage.local.get(["tomogachi"], (result) => //gets local tomogachi state and runs result on tomogachi every hour
        {
            if (result.tomogachi)
            {
                let tomogachi = result.tomogachi;
                tomogachi.hunger += 1;
                tomogachi.happiness -= 1; 

            }
        }
    }
});