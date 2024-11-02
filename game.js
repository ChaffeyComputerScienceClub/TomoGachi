let tomogachi_state = 
{
    health: 100, //initialized with max health
    happiness: 10,  //initialized with neutral happiness. 0 = depressed, 20 = very happy
    hunger: 0, //initialized at 0 hunger, loses 1 happiness at every increment when hunger is at -5, starts taking damage when hunger <= -20
};

