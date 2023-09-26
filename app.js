// SECTION GLOBAL VARIABLES
const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣', '🕌', '⛩️', '🏯', '⛪', '🛕', '🏰', '🏚️'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
    identity: '🤵',
    origin: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
    identity: '🙆‍♀️',
    origin: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤',
    identity: '👷',
    origin: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥',
    identity: '👷',
    origin: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
    identity: '🤴',
    origin: '🏥'
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
    identity: '🕵️',
    origin: '🏥'
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
    identity: '👩‍🍳',
    origin: '🏭'
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
    identity: '💂',
    origin: '🏭'
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
    identity: '🧜‍♂️',
    origin: '🏭'
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
    identity: '🏐',
    origin: '🏢'
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
    identity: '👩‍⚕️',
    origin: '🏢'
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
    identity: '🦹',
    origin: '🏢'
},
{
    name: 'Miles',
    picture: '👮‍♀️',
    location: '🕌',
    identity: '👮‍♀️',
    origin: '🕌'
},
{
    name: 'Nick',
    picture: '🧙‍♂️',
    location: '🕌',
    identity: '🧙‍♂️',
    origin: '🕌'
},
{
    name: 'Joshua',
    picture: '🧝',
    location: '🕌',
    identity: '🧝',
    origin: '🕌'
},
{
    name: 'Kaitlyn',
    picture: '🤹',
    location: '⛩️',
    identity: '🤹',
    origin: '⛩️'
},
{
    name: 'Robbie',
    picture: '👩‍💻',
    location: '⛩️',
    identity: '👩‍💻',
    origin: '⛩️'
},
{
    name: 'Margaret',
    picture: '🧖‍♂️',
    location: '⛩️',
    identity: '🧖‍♂️',
    origin: '⛩️'
},
{
    name: 'Garret',
    picture: '👩‍🎤',
    location: '🏯',
    identity: '👩‍🎤',
    origin: '🏯'
},
{
    name: 'Linda',
    picture: '🦸‍♂️',
    location: '🏯',
    identity: '🦸‍♂️',
    origin: '🏯'
},
{
    name: 'Noah',
    picture: '🧑‍🚀',
    location: '🏯',
    identity: '🧑‍🚀',
    origin: '🏯'
},
{
    name: '1-Marie',
    picture: '👩‍🍳',
    location: '🏣',
    identity: '👩‍🍳',
    origin: '🏣'
},
{
    name: '1-Mykeal',
    picture: '💂',
    location: '🏣',
    identity: '💂',
    origin: '🏣'
},
{
    name: '1-Phil',
    picture: '🧜‍♂️',
    location: '🏣',
    identity: '🧜‍♂️',
    origin: '🏣'
},
{
    name: '1-Wilson',
    picture: '🏐',
    location: '⛪',
    identity: '🏐',
    origin: '⛪'
},
{
    name: '1-Wendy',
    picture: '👩‍⚕️',
    location: '⛪',
    identity: '👩‍⚕️',
    origin: '⛪'
},
{
    name: '1-Jeremy',
    picture: '🦹',
    location: '⛪',
    identity: '🦹',
    origin: '⛪'
},
{
    name: '1-Miles',
    picture: '👮‍♀️',
    location: '🛕',
    identity: '👮‍♀️',
    origin: '🛕'
},
{
    name: '1-Nick',
    picture: '🧙‍♂️',
    location: '🛕',
    identity: '🧙‍♂️',
    origin: '🛕'
},
{
    name: '1-Joshua',
    picture: '🧝',
    location: '🛕',
    identity: '🧝',
    origin: '🛕'
},
{
    name: '1-Kaitlyn',
    picture: '🤹',
    location: '🏰',
    identity: '🤹',
    origin: '🏰'
},
{
    name: '1-Robbie',
    picture: '👩‍💻',
    location: '🏰',
    identity: '👩‍💻',
    origin: '🏰'
},
{
    name: '1-Margaret',
    picture: '🧖‍♂️',
    location: '🏰',
    identity: '🧖‍♂️',
    origin: '🏰'
},
{
    name: '1-Garret',
    picture: '👩‍🎤',
    location: '🏚️',
    identity: '👩‍🎤',
    origin: '🏚️'
},
{
    name: '1-Linda',
    picture: '🦸‍♂️',
    location: '🏚️',
    identity: '🦸‍♂️',
    origin: '🏚️'
},
{
    name: '1-Noah',
    picture: '🧑‍🚀',
    location: '🏚️',
    identity: '🧑‍🚀',
    origin: '🏚️'
}
]
let attacksLeft = 18
let hunter
let healer

// !SECTION


// SECTION GAME LOGIC

function btnClicked(location) {
    shakeAnim(location)
    let localPeople = findLocalPeople(location)
    for (let i = 0; i < localPeople.length; i++) {
        let person = localPeople[i]
        if (hunter && person.name == hunter.name && !canHunterBeTurned()) {
            endGame('hunter')
            return
        }
        person.picture = '🦇'
    }
    if (!hunter) chooseHunter()
    if (!healer) chooseHealer()
    performHeal()
    movePeople()
    checkForWinOrLose()
    draw()
}

function checkForWinOrLose() {
    decrementHours()
    let winState = true
    people.forEach((person) => {
        if (person.picture != "🦇") winState = false
    })
    if (winState) {
        endGame('win')
    } else if (attacksLeft == 0) {
        endGame('time')
    }
}

function movePeople() {
    people.forEach((person) => {
        let possibleLocation
        while (!possibleLocation) {
            let choice = locations[Math.floor(Math.random() * locations.length)]
            if (people.filter((person) => person.location == choice).length < 5) {
                possibleLocation = choice
            }
        }
        person.location = possibleLocation
        if (person.name == hunter.name) hunter.location = person.location
    })
}

function performHeal() {
    if (healer.picture == "🦇") return
    let localPeople = findLocalPeople(healer.location)
    let localBats = localPeople.filter((person) => person.picture == "🦇")
    if (localBats.length > 0) {
        console.log(localBats[0]);
        localBats[0].picture = localBats[0].identity
        console.log(localBats[0]);
    }
}

function chooseHunter() {
    while (true) {
        hunter = people[Math.floor(Math.random() * people.length)]
        if (healer != hunter && hunter.picture != '🦇') break
    }
}

function chooseHealer() {
    while (true) {
        healer = people[Math.floor(Math.random() * people.length)]
        if (hunter != healer && healer.picture != '🦇') break
    }
}

function endGame(winState) {
    switch (winState) {
        case 'win':
            let winElem = document.getElementById('win-element')
            winElem.classList.remove('d-none')
            setTimeout(removeElem, 6000, winElem)
            break
        case 'time':
            let timeLoseElem = document.getElementById('time-lose-element')
            timeLoseElem.classList.remove('d-none')
            setTimeout(removeElem, 6000, timeLoseElem)
            break
        case 'hunter':
            let hunterLoseElem = document.getElementById('hunter-lose-element')
            hunterLoseElem.classList.remove('d-none')
            setTimeout(removeElem, 6000, hunterLoseElem)
            break
    }
    attacksLeft = 18
    hunter = null
    healer = null
    resetPeople()
    draw()
}

// !SECTION

// SECTION UTIL FUNCTIONS

function canHunterBeTurned() {
    let canTurn = true
    people.forEach((person) => {
        if (person.name != hunter.name && person.picture != "🦇") canTurn = false
    })
    return canTurn
}

function findLocalPeople(location) {
    return people.filter((person) => person.location == location)
}

function decrementHours() {
    attacksLeft--
}

function numberOfBatsAroundPerson(targetPerson) {
    if (!targetPerson) return 0
    let localPeople = findLocalPeople(targetPerson.location)
    let numberOfBats = 0
    localPeople.forEach(person => {
        if (person.picture == "🦇") numberOfBats++
    })
    return numberOfBats
}

function resetPeople() {
    people.forEach((person) => {
        person.picture = person.identity
        person.location = person.origin
    })
}

function createLocationElements() {
    locations.forEach(location => {
        let element = document.createElement('div')
        element.innerHTML = `
        <div class="location-card" id="${location}-parent">
            <p class="fs-1">${location}</p>
            <p id="${location}" class="fs-5"></p>
            <button class="btn btn-danger" onclick="btnClicked('${location}')">Attack!</button>
        </div>
        `
        element.classList = 'col-lg-2 col-md-3 col-sm-4 col-6 my-3'
        document.getElementById('locations-container').appendChild(element)
    });
}

function draw() {
    locations.forEach(location => {
        let localPeople = findLocalPeople(location)
        let peopleText = ""
        localPeople.forEach((person) => {
            peopleText += person.picture
        })
        document.getElementById(location).innerText = (peopleText ? peopleText : ".")
    })
    document.getElementById('hours-element').innerText = attacksLeft
    document.getElementById('bat-hunter-element').innerText =
        (numberOfBatsAroundPerson(hunter) == 1 ? "There is 1 bat that sees the hunter" : `There are ${numberOfBatsAroundPerson(hunter)} bats that see the hunter`)
    if (!healer || healer.picture != "🦇") {
        console.log("hello");
        document.getElementById('bat-healer-element').innerText =
            (numberOfBatsAroundPerson(healer) == 1 ? "There is 1 bat that sees the healer" : `There are ${numberOfBatsAroundPerson(healer)} bats that see the healer`)
    } else {
        document.getElementById('bat-healer-element').innerText = 'The healer has been turned into a bat.'
    }
}

// !SECTION

// SECTION VISUAL LOGIC

function shakeAnim(id) {
    let element = document.getElementById(id + "-parent")
    element.classList.add('shake-anim')
    setTimeout(stopShakeAnim, 500, element)
}
function stopShakeAnim(element) {
    element.classList.remove('shake-anim')
}
function removeElem(element) {
    element.classList.add('d-none')
}

// !SECTION

createLocationElements()
draw()