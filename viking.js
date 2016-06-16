var Viking = function (name,health,strength,defense) {
	this.name = name,
	this.health = health,
	this.strength = strength,
	this.defense = defense
}
Viking.prototype.attack = function () {
	return random(this.strength,5);
}

var Saxon = function (name,health,strength,defense) {
	this.name= name,
	this.health = health,
	this.strength = strength,
	this.defense = defense
}

Saxon.prototype.attack = function () {
	return random(this.strength,5);
}

var Pit = function(vikingo1, vikingo2, round) {
	this.round = round,
	this.viking1 = viking1,
	this.viking2 = viking2,
	this.winner = ""
}

Pit.prototype.checkHealth = function(attack,health) {
	var doAttack = true;
    	if (health < attack) {
    		doAttack = false;
    	}
    	return doAttack;
}

Pit.prototype.battle = function(round) {
	console.log(round)
	var counter = 0;
    while (counter < round && (this.checkHealth(viking1.attack(),viking2.health) && this.checkHealth(viking2.attack(),viking1.health) )) {
    	
    	console.log(this.checkHealth(viking1.attack(),viking2.health))
    	if (this.checkHealth(viking1.attack(),viking2.health)) {
    		viking2.health = viking2.health - viking1.attack() + viking2.defense;	
    		console.log(viking1.name + "("+viking1.health+"-"+viking1.attack()+")" +viking2.name + "("+viking2.defense+")" + " se queda con " + viking2.health);
    	} 
    	
    	console.log(this.checkHealth(viking2.attack(),viking1.health))
    	if (this.checkHealth(viking2.attack(),viking1.health)) {
    		viking1.health = viking1.health - viking2.attack() + viking1.defense;
    		console.log(viking2.name + "("+viking2.health+"-"+viking2.attack()+")" +viking1.name + "("+viking1.defense+")" +" se queda con " + viking1.health);
    	}
    	
    	counter ++;
    }
    if (viking1.health > viking2.health) {
    	this.winner = viking1.name;
    } else {
    	this.winner = viking2.name;
    }
    console.log("El ganador es " + this.winner)
}

	var viking1 = new Viking("Eric", 100, random(30,20),random(5,1));
    var viking2 = new Viking("Paul", 100, random(30,20),random(5,1));

var Assault = function (round) {
	this.armyVikings = [],
	this.armySaxons = [],
	this.round = round
}

Assault.prototype.generateArmy = function () {
	for (var i= 0; i<100; i++) {
		this.armyVikings.push( new Viking("v"+i,100, random(30,20),random(5,1)))
	}
	for (var i= 0; i<100; i++) {
		this.armySaxons.push( new Saxon("s"+i,100, random(25,20),random(5,1)) )
	}
	console.log(this.armyVikings)
	console.log(this.armySaxons)
}
Assault.prototype.checkHealth = function(health) {
	var doAttack = true;
    	if (health <= 0) {
    		doAttack = false;
    	}
    	return doAttack;
}

var assault = new Assault(5)
assault.generateArmy()

Assault.prototype.war = function () {
	var deadVikings = 0;
	var deadSaxons = 0;
	for (var i =0; i<this.armyVikings.length; i++) {
		var healthViking = this.armyVikings[i].health;
		var healthSaxon = this.armySaxons[i].health;
		var attackViking = this.armyVikings[i].attack();
		var attackSaxon = this.armySaxons[i].attack();
		while (healthViking > 0 && healthSaxon > 0) {
			healthSaxon = healthSaxon - attackViking;
			healthViking = healthViking - attackSaxon;
		}
		if (healthViking <= 0) {
				deadVikings ++;
		}
		else if (healthSaxon <= 0) {
				deadSaxons ++;
		}
	}
	console.log("Han muerto " + deadSaxons + " Saxons")
	console.log ("Han muerto " + deadVikings + " Vikings")
}


function random (max, min) {
	return Math.floor(Math.random() * (max - min)) + min;
}


var pit = new Pit (viking1,viking2,6)
pit.battle(pit.round)

assault.war();





