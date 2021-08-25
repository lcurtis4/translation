// Put your code here
console.log("Do you believe in magic?")
console.log("------------------------")

const getSpells = () => {
    const spells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf perosn the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
    ]

    return spells
}

const allspells = getSpells()

const makeGoodSpellBook = (allspells) => {
    const goodSpellBook = {
        title: "Good Book",
        spells: allspells.filter((spell) => spell.isEvil === false)
    }
    return goodSpellBook
}

const makeEvilSpellBook = (allspells) => {
    const evilSpellBook = {
        title: "Evil Book",
        spells: allspells.filter((spell) => spell.isEvil === true)
    }
    return evilSpellBook
}

const goodBook = makeGoodSpellBook(allspells)
const evilBook = makeEvilSpellBook(allspells)

const displaySpellBook = (book) => {
    for (const spell of book.spells) {
        console.log(`${spell.name}`)
    }
}

displaySpellBook(goodBook)
displaySpellBook(evilBook)