class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nHealth: ${this.health}\nSpeed: ${this.speed}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats()
