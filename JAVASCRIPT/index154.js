/*Define a player variable and assign a literal object with the following properties and methods:
    property: name, value: null
    property: energy, value: 100
    property: lifes, value: 3
    method: loseEnergy
    method: recoveryEnergy
    method: looseLife
    method: recoveryLife
Methods
    The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
    The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
    The looseLife doesn't accepts parameters and just substract one player life everytime you call it
    The recoveryLife doesn't accepts parameters and just adds one player life everytime you call it
Rules
    The player energy can't be negative
    The player energy can't be more than 100
    The player lifes can't be bigger thant 99
    If the player energy is equal or lees than 0 then the player will loose a life
Play Time!!!
1. Set the player name
2. Player loose a life
3. Player loose 10 energy value
4. Player loose 5 energy value
5. Player loose 15 energy value
6. Player loose 20 energy value
7. Player earn 10 energy value
8. Player loose 30 energy value
9. Player loose 40 energy value
10.Player loose a life
11.Player wins a life
12.Player wins a life
Simulate each game play using the players object methods
Show the following output after doing all the object methods calls
    The %player name% has %energy% energy % and  %lifes% lifes*/

const player = {
    name: null,
    energy: 100,
    lifes: 3,
    loseEnergy: function(damage) {
        this.energy = this.energy - damage;
        while (this.energy < 0) {
            this.energy = 0;
        }
    },
    recoveryEnergy: function(energyUp) {
        this.energy = this.energy + energyUp;
        while (this.energy > 100) {
            this.energy = 100;
        }
    },
    looseLife: function() {
        this.lifes--;
    },
    recoveryLife: function() {
        this.lifes++;
        while (this.lifes > 99) {
            this.lifes = 99;
        }
    }
}

player.name = 'Michaello';
player.looseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoveryEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);

while (this.energy <= 0) {
    this.lifes = this.lifes - 1;
player.looseLife();
player.recoveryLife();
player.recoveryLife();
}

console.log(`The ${player.name} has ${player.energy} energy and ${player.lifes} lifes`);