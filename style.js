// style.js
/*
 * > Base code By Thomas Hj edited by NeighboringHeart to be about transformers
 */

// Word selection
// New word = ["Word name", "Hint"]
var word = [
    ["Transformers", "The name of the franchise."],
    // autobots
    ["Ambulon", "Former Decepticon medic who joined the Autobots and suffered from flaky paint. Worked on Delphi with First Aid and Pharma."],
    ["Anode", "Archeologist and Blacksmith who brought her wife back to life."],
    ["Arcee", "The first female transformer."],
    ["Blaster", "Autobot cassette carrier."],
    ["Blurr", "Fastest Cybertronian."],
    ["Brainstorm", "The most brilliant mind in existence who created a time machine."],
    ["Bulkhead", "Big, green sweetheart with wrecking ball hands."],
    ["Bumblebee", "The Autobots' yellow scout."],
    ["Chromedome", "Mnemosurgeon who nearly sacrificed his life to reunite his beloved with his long lost lover."],
    ["Cliffjumper", "Little red guy who you need to watch out for if you intend on betraying the Autobots."],
    ["Cosmos", "Poor guy gets left alone in space too much. My flying saucer king."],
    ["Dominus Ambus", "After being found out when he went undercover as a member of the DJD, he was domesticated and later died after a failed attempt to recover him to his previous state."],
    ["Drift", "Former Decepticon now formidable swordsman."],
    ["Elita One", "Female Autobot who's a total jock and has a history with Optimus."],
    ["First Aid", "Slightly unhinged Autobot medic who Ratchet is training to replace him as CMO."],
    ["Fortress Maximus", "Underwent horrible torture by Overlord and recovered by becoming a law enforcer and saving countless domesticated Cybertronians."],
    ["Getaway", "Autobot who launched a mutiny to try and take out Team Rodimus."],
    ["Grimlock", "Once leader of the dynobots, now a member of the Scavengers."],
    ["Hot Rod", "Turbo revving young punk."],
    ["Hound", "Green Autobot who can create holograms."],
    ["Ironfist", "Wrecker fanboy turned wrecker who died when his own prototype bullet finally made its way into his brain module."],
    ["Jazz", "Smooth Autobot special operative."],
    ["Jetfire", "Used to have a different name. An old friend of Starscream who is now a member of the Autobots."],
    ["Kup", "Old Autobot soldier who once got trapped on a crystal planet that gave him horrible hallucinations."],
    ["Lug", "Treasure hunter who turns into a backpack and loves her wife."],
    ["Minimus Ambus", "Current bearer of the Magnus armor."],
    ["Mirage", "He's your boy and he's got some illusory tricks."],
    ["Nautica", "Camien quantum physicist who joined the Lost Light."],
    ["Optimus Prime", "The leader of the Autobots."],
    ["Perceptor", "Brilliant scientist who also has a skill for sharpshooting."],
    ["Pharma", "A former colleague of Ratchet's who wound up making a deal with the DJD that caused him to spiral further and further to hide his crimes."],
    ["Prowl", "Autobot cop."],
    ["Ratchet", "The Autobots' grumpy doctor."],
    ["Rewind", "Archivist who spent years trying to find his lover who went missing."],
    ["Rodimus", "Rambunctious captain of the Lost Light."],
    ["Rung", "Psychotherapist who turned out to actually be god."],
    ["Sideswipe", "Red speedster who has abandonment issues in Robots in Disguise (2015)."],
    ["Skids", "Theoretician with a past that would be best left forgotten."],
    ["Springer", "Triple changer who once led the wreckers."],
    ["Strongarm", "Young autobot cadet who was assigned to work with Bumblebee before they got stuck on Earth."],
    ["Sunstreaker", "Speedster who has some trauma after he was used by humans for Headmaster experiments."],
    ["Swerve", "Resident metallurgist and bartender on the Lost Light. Blurr's biggest fan."],
    ["Tailgate", "Waste disposal guy who got stuck underground for millions of years."],
    ["Thunderclash", "Often called the greatest Autobot of all time, but Rodimus would greatly disagree."],
    ["Toaster", "Turns into a toaster."],
    ["Ultra Magnus", "Begrudging leader of the wreckers."],
    ["Velocity", "Camien medic who joined the Lost Light."],
    ["Wheeljack", "Autobot scientist whose experiments have a habit of blowing up."],
    ["Whirl", "Former wrecker who far in his past used to make beautiful clocks."],
    ["Windblade", "Camien representative who was created through a fan poll."],
    // maximals
    ["Airazor", "Wise bird lady who's been through too much."],
    ["Cheetor", "The moon cheetah. Guardian of the Allspark."],
    ["Optimus Primal", "The leader of the Maximals."],
    // decepticons
    ["Acid Storm", "Nauseatingly green rainmaker (I'm kidding they're my favorite shade of green)."],
    ["Airachnid", "Arcee's nemesis in Transformers Prime."],
    ["Astrotrain", "Triple changer that is often used to shuttle other Decepticons due to his size."],
    ["Blackarachnia", "Scary spider lady who has a history with Optimus in Transformers Animated."],
    ["Blitzwing", "Triple changer with an unpredictable attitude."],
    ["Bombshell", "Insecticon scientist with a penchant for mind control."],
    ["Breakdown", "In some continuities a big bruiser who loves his unhinged husband, in others a daring speedster. He's always iconic, though."],
    ["Crankcase", "The grumpy pilot of the Savengers."],
    ["Dead End", "Pessimistic stunticon who does not get along with Astrotrain."],
    ["Frenzy", "Sometimes red, sometimes blue, but always pretty wild."],
    ["Fulcrum", "The Scavenger who used to be a bit explosive."],
    ["Ion Storm", "Bright Blue rainmaker."],
    ["Kaon", "The DJD's electric chair."],
    ["Knockout", "Sometimes a Decepticon medic, sometimes a cosmetic surgeon, but always has the most lustrous finish."],
    ["Krok", "The captain of the Scavengers."],
    ["Lockdown", "Decepticon bounty hunter."],
    ["Megatron", "The leader of the Decepticons."],
    ["Misfire", "The scavenger with the best (worst) aim."],
    ["Motormaster", "Leader of the Stunticons."],
    ["Nickel", "Former medic of the DJD, now a member of the Scavengers."],
    ["Nova Storm", "Yellow rainmaker. One of Starscream's seekers in EarthSpark."],
    ["Onslaught", "Leader of the Combaticons."],
    ["Overlord", "Phase sixer known for his luscious lips."],
    ["Ravage", "Cassette who turns into a jaguar."],
    ["Rumble", "Sometimes red, sometimes blue, but always shakes things up."],
    ["Scorponok", "Decepticon who got himself pregnant."],
    ["Shockwave", "Decepticon scientist who is guided by pure logic."],
    ["Skybyte", "Aquatic Decepticon with a love for poetry."],
    ["Skywarp", "Purple seeker known for his ability to teleport."],
    ["Slipstream", "Female seeker who was a clone of Starscream in Transformer Animated."],
    ["Soundwave", "Megatron's loyal right-hand who always has many allies with him."],
    ["Spinister", "The Savengers' trigger happy medic."],
    ["Starscream", "Traitorous Decepticon commander known for his dramatic flair."],
    ["Swindle", "Greatest con artist in the Decepticons."],
    ["Tarantulas", "Spider guy who has history with Prowl."],
    ["Tarn", "The leader of the DJD."],
    ["Thundercracker", "Blue seeker with a passion for writing screenplays and a love of dogs."],
    ["Vos", "Member of the DJD who only speaks the primordial tongue."],
    // others
    ["Bob", "Sunstreaker's pet insecticon."],
    ["Cyclonus", "Former ally of Galvatron, now a member of the Lost Light."],
    ["Galvatron", "Originally a reformatted Megatron, now a separate entity from the dead universe."],
    ["Primus", "The first Cybertonian."],
    ["Unicron", "The greatest enemy of Primus."],
    // quotes
    ["One shall stand one shall fall", "Something Optimus said to Megatron occasionally in battle."],
    ["Till all are one", "Something that Optimus said rarely to rally the troops, but now Rodimus says all the time so it's lost its oomph."],
    ["I Starscream am now leader of the Decepticons", "What Starscream announces every time he thinks Megatron is down for the count."],
    ["Megatron has fallen", "An iconic line that Starscream would declare whenever Megatron became incapacitated."],
    // songs/artists
    ["The Touch", "Song that originally played in the 1986 movie when Hot Rod became Rodimus Prime."],
    ["Dare to be Stupid", "Weird Al song that played when Hot Rod danced with Wreck-Gar and the other Junkions in the 1986 movie."],
    ["Linkin Park", "Band whose songs were almost always present on the soundtracks of the Michael Bay directed Transformers movies."]
]

// console.log(word)

// Game keyboard
var tastatur = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Game memory
var select = 0
var wordLeft = []
var fail = 0

// Web-page onload
window.onload = function () {
    gId("moveKeybord").addEventListener('touchmove', function (e) {
        wH = window.innerHeight
        tY = e.touches[0].clientY
        eL = gId("tastatur")
        resY = wH - tY - eL.offsetHeight
        if (resY < 0) {
            resY = 0
        } else if (resY > wH / 2) {
            resY = wH / 2
        }
        eL.style.bottom = resY + "px"
    }, false)
    createTastur()
}

// Start game
function startGame() {
    gId("home").className = "h"
    gId("result").className = "h"
    newGame()
}

// New game
function newGame() {
    clearTastatur()
    clearPlayer()
    createWord()
}

// Clear keyboard
function clearTastatur() {
    var e = document.getElementsByClassName("b")
    for (a = 0; a < e.length; a++) {
        e[a].setAttribute("data", "")
    }
}

// Clear player
function clearPlayer() {
    fail = 0
    wordLeft = []
    gId("g0").setAttribute("data", "false")
    gId("g1").setAttribute("data", "false")
    gId("g2").setAttribute("data", "false")
    gId("g3").setAttribute("data", "false")
    gId("g4").setAttribute("data", "false")
    gId("g5").setAttribute("data", "false")
    gId("g5").setAttribute("r", "false")
    gId("g5").setAttribute("l", "false")
    gId("g6").setAttribute("data", "false")
    gId("g6").setAttribute("l", "false")
    gId("g6").setAttribute("r", "false")
    gId("hintButton").setAttribute("data", "false")
    gId("hint").style.display = "none"
}

// Get new word
function createWord() {
    var d = gId("letter")
    d.innerHTML = ""
    select = Math.floor(Math.random() * word.length)
    for (a = 0; a < word[select][0].length; a++) {
        var x = word[select][0][a].toUpperCase()
        var b = document.createElement("span")
        b.className = "l" + (x == " " ? " ls" : "")
        b.innerHTML = "&nbsp"
        b.id = "l" + a;
        d.appendChild(b)

        if (x != " ") {
            if (wordLeft.indexOf(x) == -1) {
                wordLeft.push(x)
            }
        }
    }
}

// Create keyboard
function createTastur() {
    var tas = gId("keybord")
    tas.innerHTML = ""
    for (a = 0; a < tastatur.length; a++) {
        var b = document.createElement("span")
        b.className = "b"
        b.id = "letter" + a
        b.innerText = tastatur[a]
        b.setAttribute("data", "")
        b.onclick = function () {
            bTas(this)
        }
        tas.appendChild(b)
    }
}

// keyboard events
document.addEventListener('keydown', (e) => {
    let key = parseInt(e.keyCode)
    console.log(key)
    if (key >= 65 && key <= 90) {
        bTas(getButton(key))
    } else if (key == 13) {
        if (gId('home').className == '' || gId('result').className == '') {
            startGame()
        }
    }
})

function getButton(e) {
    let boardNum = e - 65
    let button = document.getElementById("letter" + boardNum)
    return button;
}

// Game check, If show next error / game end
function bTas(a) {
    if (a.getAttribute("data") == "") {
        var x = isExist(a.innerText)
        a.setAttribute("data", x)
        if (x) {
            if (wordLeft.length == 0) {
                gameEnd(true)
            }
        } else {
            showNextFail()
        }
    }
}

// If letter "X" exist
function isExist(e) {
    e = e.toUpperCase()
    var x = wordLeft.indexOf(e)
    if (x != -1) {
        wordLeft.splice(x, 1)
        typeWord(e)
        return true
    }
    return false
}

// Show next fail drawing
function showNextFail() {
    fail++
    switch (fail) {
        case 1:
            gId("g0").setAttribute("data", "true")
            break;

        case 2:
            gId("g1").setAttribute("data", "true")
            break;

        case 3:
            gId("g2").setAttribute("data", "true")
            break;

        case 4:
            gId("g3").setAttribute("data", "true")
            break;

        case 5:
            gId("g4").setAttribute("data", "true")
            break;

        case 6:
            gId("g5").setAttribute("data", "true")
            break;

        case 7:
            gId("g5").setAttribute("l", "true")
            gId("hintButton").setAttribute("data", "true")
            break;

        case 8:
            gId("g5").setAttribute("r", "true")
            break;

        case 9:
            gId("g6").setAttribute("data", "true")
            gId("g6").setAttribute("l", "true")
            break;

        case 10:
            gId("g6").setAttribute("r", "true")
            gameEnd(false)
            break;
    }
}

function typeWord(e) {
    for (a = 0; a < word[select][0].length; a++) {
        if (word[select][0][a].toUpperCase() == e) {
            gId("l" + a).innerText = e
        }
    }
}

// Game result
function gameEnd(e) {
    var d = gId("result")
    d.setAttribute("data", e)
    if (e) {
        gId("rT").innerText = "You Win!"
        gId("rM").innerHTML = "Congratulations, you solved it!<br/><br/>Good Job!"
    } else {
        gId("rT").innerText = "You Lose!"
        gId("rM").innerHTML = "The answer was <br/><br/>\"" + word[select][0].toUpperCase() + "\"<br/><br/>Better luck next time."
    }
    d.className = ""
}

// Show hint
function hint() {
    gId("hintText").innerText = word[select][1]
    gId("hint").style.display = "block"
}

// Exit hint
function hintExit() {
    gId("hint").style.display = "none"
}

// Get HTML ID element by name
function gId(a) {
    return document.getElementById(a)
}
