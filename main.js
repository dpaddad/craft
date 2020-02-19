// Import external resources
// include('mainloop.js')



// Class definitions

class Character {
    constructor(name, npc_class, relationship_score = 0) {
        this.name = name;
        this.npc_class = npc_class;
        this.relationship_score = relationship_score;
    }

    get name() {
        return this.name;
    }

    get npc_class() {
        return this.npc_class;
    }

    get relationship_score() {
        return this.relationship_score;
    }
}


class Adventurer extends Character {
    constructor(budget) {
        this.budget = budget;
    }

    get budget() {
        return this.budget;
    }
}


// Initialize game data
var resources = {
    cash: 0,
    iron: 0,
    wood: 0,
    glass: 0,
    leather: 0,
    herbs: 0,
    cloth: 0,
    bone: 0,
    special: {
        acid: 0,
        phoenix_feather: 0,
        dragon_scale: 0
    }
};


// Functions

function saveGame() {
    var savedata = {
        resources: resources,

    };
    localStorage.setItem("craft_save", JSON.stringify(savedata));
}


// TEST FUNCTIONS



// Main game loop
// Currently EXTREMELY BASIC - may want to implement mainloop.js if needed

function mainLoop() {

    requestAnimationFrame(mainLoop);
}



// Start the game

requestAnimationFrame(mainLoop);