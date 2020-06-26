var readline = require("readline-sync");
var optionsYesNo = ["Yes", "No"];
var noOptions = ["Fine", "..."]

// Constructors //
    const Enemy (type, health, attack, courage, voiceSound) {
        this.type = type
        this.health = health
        this.attack = attack
        this.courage = courage
        this.voiceSound = voiceSound
        }

        // enemy vocalization function
        Enemy.prototype.voiceSound = function() {
            console.log(this.voiceSound)
        }


        // enemy types // 
        var skeleton = new Enemy ("Skeleton", 7, 5, 2, "*bones clanking*")
        var goblin = new Enemy ("Goblin", 20, 10, 15, "Felicia? Is that you?")
        var rat = new Enemy ("Rat", 4, 2, 7, "*squeak* Gramblgort *squeak* You're not a human!! *squeak squeak*")
        var zombie = new Enemy ("Zombie", 8, 9, 100, "Aaauuuhggg.." ) 
        var foragerHippie = new Enemy ("Forager",100,100,100, "Hey man, I'm gathering mushrooms and herbs. Have you--Yooo, my duuude! Is that a Goblin?!")

        // weapon constructor
        const Weapon (typeOf, damage, intimidation, defense, descWeapon){
            this.typeOf = typeOf
            this.damage = damage
            this.intimidation = intimidation
            this.defense = defense
            this.descWeapon = descWeapon
        }

        // weapon description+why intimidation //
        Weapon.prototype.description = function() {
            console.log(this.descWeapon)
        }

        // weapon types // 
        var bow = new Weapon("")
        var unknown = new Weapon()
        var blunt = new Weapon()
        var weapon = new Weapon()//


// Functions //
function walk(){
    var sum = Math.floor(Math.random()*13)
    Math.floor(Math.random() * 13)
    if (sum === 0){
        return "Dark, swap grass softly crunches beneath your feet..."
    } else if (sum/2 === 2){
        return "find mushroom const placeholder"
    } else if (sum/5 === 4){
        return "Felicia comment placeholder.."
    } else if (sum === 5) {
        return "Mud sucks your feet toward the Earth with each step..."
    } else if (sum === 6) {
        return "find health object const"
    } else if (sum === 7){
        return "battle const placeholder"
    } else if (sum == 8) {
        return "battle const placeholder"
    } else if (sum == 12){
        return "You stumble over a large, solid object hidden by the grass and darkness..."
    } else {
        return "monster sounds const placeholder (or just delete)"
    }
}

function nameWrong() {
    var sum = Math.floor(Math.random() * 13) 
    Math.floor(Math.random() * 13)
    if (sum === 0){
        return "Pa"
    } else if (sum/2 === 2){
        return "Ho"
    } else if (sum/3 === 6){
        return "Fa" 
    } else if (sum/4 === 3){
        return "Ga"
    } else if (sum/5 === 4){
        return "Sch"
    } else if (sum === 5) {
        return "Na"
    } else if (sum === 6) {
        return "Phu"
    } else if (sum === 7){
        return "Gri"
    } else if (sum == 8) {
        return "La"
    } else if (sum == 12){
        return "Wa"
    } else {
        return "Ru"
    }
}


// const inventory = [];
// var battle = ["run", "cry", sword:"+5 physical damage +10 humiliation", Felicia: magic""];

let colossalRPG = true

readline.keyInPause ("Warm night air rustles dry grass around you...");
readline.keyInPause ("Opening your eyes you come face to face with a small, red goblin. Their face couldn't be any closer to your own.");
readline.keyInPause ("They croak: \n 'Do you want to play a game with me?'");

while (colossalRPG) {
    var reply = readline.keyInSelect(optionsYesNo, 'How will you reply?')
    if (reply === 0) {
        console.log("Finally! I thought I'd have to kill you like all the others! Not so fun after the first 100 or so.")
        introFelicia();
    } else if ( reply === 1) {
        readline.keyInPause("I bet you're fun at parties...")
        readline.keyInPause("C'mon.." )
        var askAgain = readline.keyInSelect(noOptions, "How will you reply?")
    } else if (reply === 2) {
        console.log("\n \n*THWACK!*\nGAME OVER.\nReload to replay or close window to exit.")
        break
    } if (askAgain === 1){
        console.log("\n \n*THWACK!*\nGAME OVER.\nReload to replay or close window to exit.")
        break
    } else if (askAgain === 0) {
        console.log("I REALLY thought I'd have to kill you like all the others! Not so fun after the first 100 or so.")
        introFelicia();
    } break
    
    function introFelicia() {
    let playerName = readline.question("What is your name?");
    readline.keyInPause("-ACTUALLY, I don't care but my name is Felicia.")
    readline.keyInPause("I've always wanted to be a human. I picked out my own name. I wanted something that sounded more.. Human.")
    readline.keyInPause("The other humans laughed at me when I told them that so I had to kill them. You're kind of quiet but you didn't laugh at me. Maybe we can be friends.")
    readline.keyInPause("Come on, "+nameWrong()+playerName.toLowerCase()+ " let's walk. The poison certainly should've worn off enough for your pathetic body to do at least that.")
    var command = readline.keyIn("*PRESS w TO WALK*",{limit: '$<w>'})
    let explore = true

    while (explore){
        if (command === "w"){ 
            console.log(walk())
            var command = readline.keyIn("*PRESS W TO WALK*")
        } else if (command != "w") {
            console.log("Where are you going "+nameWrong()+playerName.toLowerCase()+"? This way..")
            var command = readline.keyIn("*PRESS W TO WALK*")
        } 
    }
    }
}

