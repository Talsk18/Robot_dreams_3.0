class Vehicle {
    #height = null;
    #width = null;
    #weight = null;
    #color = null;
    constructor(height, width, weight, color) {
        this.#height = height;
        this.#width = width;
        this.#weight = weight;
        this.#color = color;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getWeigth() {
        return this.weight;
    }

    getColor() {
        return this.color;
    }
}

class Car extends Vehicle {
    #number_of_doors = null;
    #passengers = null;
    constructor(height, width, weight, color, number_of_doors, passengers) {
        super(height, width, weight, color);
        this.#number_of_doors = number_of_doors;
        this.#passengers = passengers;
    }

    numberOfDoors() {
        return this.#number_of_doors;
    }

    getMaxPassangers() {
        return this.#passengers;
    }
}

class Bike extends Vehicle {
    #number_of_wheels = null;
    constructor(height, width, weight, color, number_of_wheels) {
        super(height, width, weight, color);
        this.#number_of_wheels = number_of_wheels;
    }
    getNumberOfWheels() {
        return this.#number_of_wheels;
    }
}

let vehicle = new Vehicle(100, 200, 200, "green");

let car = new Car(400, 400, 200, "red", 4, 4);

let bike = new Bike(50, 50, 200, "black", 2);

console.log(vehicle);

console.log(car);

console.log(bike);