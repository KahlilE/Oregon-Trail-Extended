class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food = this.food + 2
    }

    eat() {

        if (this.food > 0) {
            this.food = this.food - 1
        } else {
            this.isHealthy = false
        }
    }

}


// getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.

// join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

// shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.

// totalFood() - Returns the total amount of food among all passengers in the wagon.








class Wagon {
    constructor(capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(Traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(Traveler)
        }




    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            const currentPassenger = this.passengers[index];

            if (currentPassenger.isHealthy === false) {
                return true
            }


        }
        return false



    }

    totalFood() {

        let newTotalFood = 0

        for (let index = 0; index < this.passengers.length; index++) {
            const currentPassenger = this.passengers[index];

            newTotalFood = newTotalFood + currentPassenger.food
            

        }

        return newTotalFood
    }
}


let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)