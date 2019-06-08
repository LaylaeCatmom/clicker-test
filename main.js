//Initialize Data
var food = {
  name: 'food',
  total: 0,
  increment: 1,
  specialChance: 0.1
},
wood = {
	name:'wood',
	total:0,
	increment:1,
	specialchance:0.1
},
stone = {
	name:'stone',
	total:0,
	increment:1,
	specialchance:0.1
},
science = {
  name: 'science',
  total: 0,
  increment: 1,
  specialChance: 0.01
},
skins = {
	name:'skins',
	total:0,
},
herbs = {
	name:'herbs',
	total:0,
},
ore = {
	name:'ore',
	total:0,
},
leather = {
	name:'leather',
	total:0,
},
metal = {
	name:'metal',
	total:0,
},
gold = {
	name:'gold',
	total:0,
},
land = 1000,
totalBuildings = 0,
tent = {
	total:0,
	require:{
		food:0,
		wood:2,
		stone:0,
		skins:2,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
whut = {
	total:0,
	require:{
		food:0,
		wood:20,
		stone:0,
		skins:1,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
cottage = {
	total:0,
	require:{
		food:0,
		wood:10,
		stone:30,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
house = {
	total:0,
	require:{
		food:0,
		wood:30,
		stone:70,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
mansion = {
	total:0,
	require:{
		food:0,
		wood:200,
		stone:200,
		skins:0,
		herbs:0,
		ore:0,
		leather:20,
		metal:0,
		corpses:0
	}
},
population = {
  current: 10,
  cap: 20,
  corpses: 0,
  graves: 0,
  unemployed: 0,
  foragers: 10,
  hunters: 0,
  healthy:0,
	totalSick:0,
	unemployedIll:0,
  foragersIll: 0,
  huntersIll: 0,
  boar: 0,
  wolves: 0
},
efficiency = {
  happiness: 1,
  foragers: 0,
  pestBonus: 0,
  hunters: 0,
},
upgrades = {
  fire: 0,
},
  age = 'Dawn Age',
  resourceClicks = 0,
  logRepeat = 1,
  attackCounter = 0,
  delimiters = true,
  body = document.getElementById('body')[0];

//Update functions. Called by other routines in order to update the interface.

function updateResourceTotals() {
  //Update page with resource numbers
  document.getElementById('food').innerHTML = prettify(Math.floor(food.total));
  document.getElementById('wood').innerHTML = prettify(Math.floor(wood.total));
	document.getElementById('stone').innerHTML = prettify(Math.floor(stone.total));
	document.getElementById('science').innerHTML = prettify(Math.floor(science.total));

  //Calculate and update production values for primary resources
  var netFood = (population.foragers * (1 + (efficiency.foragers * efficiency.happiness)) * (1 + efficiency.pestBonus)) + (population.hunters * (1 + (efficiency.hunters * efficiency.happiness)))  - population.current;
  document.getElementById('netFood').innerHTML = prettify(netFood.toFixed(1));

  //Colorize net production values. Only food should be negative
  if (netFood < 0) {
    document.getElementById('netFood').style.color = '#f00';
	} else if (netFood == 0){
		document.getElementById('netFood').style.color = '#000';
	} else {
		document.getElementById('netFood').style.color = '#0b0';
  }
}

function updatePopulation() {
  //Check if in dawn Age, if true pop cap is 20 else pop cap is dependant on housing
  if (age === 'Dawn Age') {
    population.cap = 20;
  } else {
    population.cap = tent.total + (whut.total * 3) + (cottage.total * 6) + (house.total * 10) + (mansion.total * 50);
  };

  //Update sick workers
  population.totalSick = population.foragersIll + population.huntersIll + population.unemployedIll;

  //Display or hide the sick row
  if (population.totalSick > 0) {
    document.getElementById('sickGroup').style.display = 'table-row';
  }

  //Calculate healthy workers
  population.healthy = population.unemployed + population.foragers + population.hunters;

  //Calculate maximum population that uses housing
  population.current = population.healthy + population.totalSick;

  //Update page with numbers
  document.getElementById('popcurrent').innerHTML = prettify(population.current);
	document.getElementById('popcap').innerHTML = prettify(population.cap);
	document.getElementById('graves').innerHTML = prettify(population.graves);
	document.getElementById('sickTotal').innerHTML = prettify(population.totalSick);
  if (population.graves > 0){
		document.getElementById('gravesTotal').style.display = "inline";
	} else {
		document.getElementById('gravesTotal').style.display = "none";
	}

  //Line 1328
};

function updateMobs(){
	//Check through each mob type and update numbers or hide as necessary.
  if (population.boar > 0){
		document.getElementById('boargroup').style.display = 'table-row';
		document.getElementById('boar').innerHTML = prettify(population.boar);
	} else {
		document.getElementById('boargroup').style.display = 'none';
	};
	if (population.wolves > 0){
		document.getElementById('wolfgroup').style.display = 'table-row';
		document.getElementById('wolves').innerHTML = prettify(population.wolves);
	} else {
		document.getElementById('wolfgroup').style.display = 'none';
	};
};

function updateHappiness(){
	//updates the happiness stat
	//first checks there's someone to be happy or unhappy
	if (population.current > 0){
		if (efficiency.happiness > 1.4){
			document.getElementById('happiness').innerHTML = "Blissful"
			document.getElementById('happiness').style.color = "#f0f"
		} else if (efficiency.happiness > 1.2){
			document.getElementById('happiness').innerHTML = "Happy"
			document.getElementById('happiness').style.color = "#00f"
		} else if (efficiency.happiness > 0.8){
			document.getElementById('happiness').innerHTML = "Content"
			document.getElementById('happiness').style.color = "#0b0"
		} else if (efficiency.happiness > 0.6){
			document.getElementById('happiness').innerHTML = "Unhappy"
			document.getElementById('happiness').style.color = "#880"
		} else {
			document.getElementById('happiness').innerHTML = "Angry"
			document.getElementById('happiness').style.color = "#f00"
		}
	} else {
		efficiency.happiness = 1;
		document.getElementById('happiness').innerHTML = "Content"
		document.getElementById('happiness').style.color = "#0d0"
	}
}

function increment(material){
	//This function is called every time a player clicks on a primary resource button
	resourceClicks += 1;
	//document.getElementById("clicks").innerHTML = prettify(Math.round(resourceClicks));
	material.total = material.total + material.increment;

	//Handles random collection of special resources.
	x = Math.random();
	if (material == food){
		if (x < material.specialchance){
			skins.total = skins.total + food.increment;
		}
	}
	if (material == wood){
		if (x < material.specialchance){
			herbs.total = herbs.total + wood.increment;
		}
	}
	if (material == stone){
		if (x < material.specialchance){
			ore.total = ore.total + stone.increment;
		}
	}
  if (x < science.specialChance) {
    science.total = science.total + science.increment;
  }

	//Checks to see that resources are not exceeding their caps
	if (food.total > 200/* + ((barn.total + (barn.total * upgrades.granaries)) * 200)*/){
		food.total = 200/* + ((barn.total + (barn.total * upgrades.granaries)) * 200)*/;
	}
	if (wood.total > 200/* + (woodstock.total * 200)*/){
		wood.total = 200/* + (woodstock.total * 200)*/;
	}
	if (stone.total > 200/* + (stonestock.total * 200)*/){
		stone.total = 200/* + (stonestock.total * 200)*/;
	}
	if (science.total > 200/* + (lab.total * 200)*/){
		science.total = 200/* + (lab.total * 200)*/;
	}
	updateResourceTotals(); //Update the page with totals
}

function paneSelect(name){
	//Called when user switches between the various panes on the left hand side of the interface
	if (name == 'buildings'){
		document.getElementById("buildingsPane").style.display = "block";
		document.getElementById("upgradesPane").style.display = "none";
		document.getElementById("conquestPane").style.display = "none";
		document.getElementById("tradePane").style.display = "none";
		document.getElementById("selectBuildings").className = "paneSelector selected";
		document.getElementById("selectUpgrades").className = "paneSelector";
		document.getElementById("selectConquest").className = "paneSelector";
		document.getElementById("selectTrade").className = "paneSelector";
	}
	if (name == 'upgrades'){
		document.getElementById("buildingsPane").style.display = "none";
		document.getElementById("upgradesPane").style.display = "block";
		document.getElementById("conquestPane").style.display = "none";
		document.getElementById("tradePane").style.display = "none";
		document.getElementById("selectBuildings").className = "paneSelector";
		document.getElementById("selectUpgrades").className = "paneSelector selected";
		document.getElementById("selectConquest").className = "paneSelector";
		document.getElementById("selectTrade").className = "paneSelector";
	}
	if (name == 'conquest'){
		document.getElementById("buildingsPane").style.display = "none";
		document.getElementById("upgradesPane").style.display = "none";
		document.getElementById("conquestPane").style.display = "block";
		document.getElementById("tradePane").style.display = "none";
		document.getElementById("selectBuildings").className = "paneSelector";
		document.getElementById("selectUpgrades").className = "paneSelector";
		document.getElementById("selectConquest").className = "paneSelector selected";
		document.getElementById("selectTrade").className = "paneSelector";
	}
	if (name == 'trade'){
		document.getElementById("buildingsPane").style.display = "none";
		document.getElementById("upgradesPane").style.display = "none";
		document.getElementById("conquestPane").style.display = "none";
		document.getElementById("tradePane").style.display = "block";
		document.getElementById("selectBuildings").className = "paneSelector";
		document.getElementById("selectUpgrades").className = "paneSelector";
		document.getElementById("selectConquest").className = "paneSelector";
		document.getElementById("selectTrade").className = "paneSelector selected";
	}
}

function prettify(input){ //Copypasta function, credit 2014 David Stark <dhmholley@gmail.com>
	var output = '';
	if (delimiters){
		output = input.toString();
		var characteristic = '', //the bit that comes before the decimal point
			mantissa = '', //the bit that comes afterwards
			digitCount = 0;
			delimiter = "&#8239;"; //thin space is the ISO standard thousands delimiter. we need a non-breaking version

		//first split the string on the decimal point, and assign to the characteristic and mantissa
		var parts = output.split('.');
		if (typeof parts[1] === 'string') var mantissa = '.' + parts[1]; //check it's defined first, and tack a decimal point to the start of it

		//then insert the commas in the characteristic
		var charArray = parts[0].split(""); //breaks it into an array
		for (var i=charArray.length; i>0; i--){ //counting backwards through the array
			characteristic = charArray[i-1] + characteristic; //add the array item at the front of the string
			digitCount++;
			if (digitCount == 3 && i!=1){ //once every three digits (but not at the head of the number)
				characteristic = delimiter + characteristic; //add the delimiter at the front of the string
				digitCount = 0;
			}
		}
		output = characteristic + mantissa; //reassemble the number
	} else {
		output = input;
	}
	return output;
}
