// SECTION GLOBAL VARIABLES
const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣', '🕌', '⛩️', '🏯'
]

let people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
},
{
    name: 'Miles',
    picture: '👮‍♀️',
    location: '🕌',
},
{
    name: 'Nick',
    picture: '🧙‍♂️',
    location: '🕌',
},
{
    name: 'Joshua',
    picture: '🧝',
    location: '🕌',
},
{
    name: 'Kaitlyn',
    picture: '🤹',
    location: '⛩️',
},
{
    name: 'Robbie',
    picture: '👩‍💻',
    location: '⛩️',
},
{
    name: 'Margaret',
    picture: '🧖‍♂️',
    location: '⛩️',
},
{
    name: 'Garret',
    picture: '👩‍🎤',
    location: '🏯',
},
{
    name: 'Linda',
    picture: '🦸‍♂️',
    location: '🏯',
},
{
    name: 'Noah',
    picture: '🧑‍🚀',
    location: '🏯',
}
]
let hoursLeft = 10
let hunter

// !SECTION

function resetPeople() {
    people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤'
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤'
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤'
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥'
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
    },
    {
        name: 'Miles',
        picture: '👮‍♀️',
        location: '🕌',
    },
    {
        name: 'Nick',
        picture: '🧙‍♂️',
        location: '🕌',
    },
    {
        name: 'Joshua',
        picture: '🧝',
        location: '🕌',
    },
    {
        name: 'Kaitlyn',
        picture: '🤹',
        location: '⛩️',
    },
    {
        name: 'Robbie',
        picture: '👩‍💻',
        location: '⛩️',
    },
    {
        name: 'Margaret',
        picture: '🧖‍♂️',
        location: '⛩️',
    },
    {
        name: 'Garret',
        picture: '👩‍🎤',
        location: '🏯',
    },
    {
        name: 'Linda',
        picture: '🦸‍♂️',
        location: '🏯',
    },
    {
        name: 'Noah',
        picture: '🧑‍🚀',
        location: '🏯',
    }
    ]
}
function createLocationElements() {
    locations.forEach(location => {
        let element = document.createElement('div')
        element.innerHTML = `
        <div class="location-card" id="${location}-parent">
            <p class="fs-1">${location}</p>
            <p id="${location}"></p>
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
        document.getElementById(location).innerText = peopleText
    })
    document.getElementById('hours-element').innerText = hoursLeft
    document.getElementById('bat-count-element').innerText =
        (numberOfBatsAroundHunter() == 1 ? "There is 1 bat that sees the hunter" : `There are ${numberOfBatsAroundHunter()} bats that see the hunter`)
}

function btnClicked(location) {
    shakeAnim(location)
    let localPeople = findLocalPeople(location)
    for (let i = 0; i < localPeople.length; i++) {
        let person = localPeople[i]
        if (person.name == hunter.name && !canHunterBeTurned()) {
            endGame('hunter')
            return
        }
        person.picture = '🦇'
    }
    movePeople()
    checkForWinOrLose()
    draw()
}

function findLocalPeople(location) {
    return people.filter((person) => person.location == location)
}

function checkForWinOrLose() {
    decrementHours()
    let winState = true
    people.forEach((person) => {
        if (person.picture != "🦇") winState = false
    })
    if (winState) {
        endGame('win')
    } else if (hoursLeft == 0) {
        endGame('time')
    }
}

function movePeople() {
    people.forEach((person) => {
        person.location = locations[Math.floor(Math.random() * locations.length)]
        if (person.name == hunter.name) hunter.location = person.location
    })
}

function decrementHours() {
    hoursLeft--
}

function endGame(winState) {
    switch (winState) {
        case 'win':
            alert('You Win!');
            break
        case 'time':
            alert('You ran out of time')
            break
        case 'hunter':
            alert('you tried to kill the hunter too early :(')
            break
    }
    hoursLeft = 10
    chooseHunter()
    resetPeople()
    draw()
}

function chooseHunter() {
    hunter = people[Math.floor(Math.random() * people.length)]
    console.log(hunter);
}

function canHunterBeTurned() {
    let canTurn = true
    people.forEach((person) => {
        if (person.name != hunter.name && person.picture != "🦇") canTurn = false
    })
    return canTurn
}

function numberOfBatsAroundHunter() {
    let localPeople = findLocalPeople(hunter.location)
    let numberOfBats = 0
    localPeople.forEach(person => {
        if (person.picture == "🦇") numberOfBats++
    })
    return numberOfBats
}

function shakeAnim(id) {
    let element = document.getElementById(id + "-parent")
    element.classList.add('shake-anim')
    setTimeout(stopShakeAnim, 500, element)
}
function stopShakeAnim(element) {
    console.log('am i ever run?');
    element.classList.remove('shake-anim')
}

createLocationElements()
chooseHunter()
draw()