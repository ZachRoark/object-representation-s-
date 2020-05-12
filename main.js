// REPRESENTYOURPET/PETSOUNDS/MYPET"THIS"
const pet = {
    name: "Guinness",
    breed: "dog",
    nicknames: ["hey you", "bark monster"],
    age: 13,
    bark: function () {
        window.alert("Guinness barks 'WOOF!' at everything")
    },
    pant: function () {
        window.alert("Guinness has stinky breath")
    },
    out: function() {
        window.alert("Guinness wants to go out.")
    },
    favoriteToys: [],
    play: function (toy) {
        if(toy === ball) {
            this.favoriteToys.push(toy) }
    }
}
pet.bark()
pet.pant()
pet.out()



// FASTFOODORDERING
const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrders: function () {
        console.table(this.orders)
    }
    
}

const chickenComboMeal = {
    sandwich: "Chicken Club",
    fries: true,
    drinkSize: "medium"
}
const fishComboMeal = {
    sandwich: "Blackened Fish Sandwich",
    fries: false,
    drinkSize: "small"
}
const bbqComboMeal = {
    sandwich: "Pulled Pork",
    fries: true,
    drinkSize: "large"
}
// Place an order
restaurant.placeOrder(fishComboMeal)
// Invoke the function to return the list of all orders
// Output all orders to the console using console.table()




// POLITICALCAMPAIGN
const candidate = {
    district: "5th congressional district",
    platformStatements: {
        taxes: "less taxes",
        jobs: "more jobs",
        infrastructure: "better infrastructure",
        healthCare: "best plan",
        crime: "none of that",
    },
    biography: "cliched story",
    imageGallery: [
        "",
        "",
        "",
    ],
    missionStatement: "beat the other guy",
}

const candidateResources = {
    donationForm: "patreon.com",
    votingURL: "vote.com",
    calendarOfEvents: [
        "March 32nd fix everything",
        "Feb 1st fix everything else",
        "Feb 2nd rest"
    ]
}

const volunteers = [
    volunteer1 = {
        name: "John Doe",
        address: "123 street",
        email: "name@email.com",
        phone: "8675309",
        availability: "full-time",
        prefers: "being on the winning team"
    }
]

// function addToImageGallery (newImage) {
//     ...
// }

// function changeBiography (newBiography) {
//     ...
// }

// function changePlatform (topic, newPlatformStatement) {
//     ...
// }

function addToImageGallery (newImage) {
    candidate.imageGallery.push(newImage)
}

function changeBiography (newBiography) {
    candidate.biography = newBiography
}

function changePlatform (topic, newPlatformStatement) {
    candidate.platformStatements[topic] = newPlatformStatement
}