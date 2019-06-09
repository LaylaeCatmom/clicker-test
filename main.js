var version = 0;
console.log('running');

//Cookies go here

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
  specialChance: 0.05,
  discovered:0,
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
barn = {
	total:0,
	require:{
		food:0,
		wood:100,
		stone:0,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
woodstock = {
	total:0,
	require:{
		food:0,
		wood:100,
		stone:0,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
stonestock = {
	total:0,
	require:{
		food:0,
		wood:100,
		stone:0,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
tannery = {
	total:0,
	require:{
		food:0,
		wood:30,
		stone:70,
		skins:2,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
smithy = {
	total:0,
	require:{
		food:0,
		wood:30,
		stone:70,
		skins:0,
		herbs:0,
		ore:2,
		leather:0,
		metal:0,
		corpses:0
	}
},
apothecary = {
	total:0,
	require:{
		food:0,
		wood:30,
		stone:70,
		skins:0,
		herbs:2,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
barracks = {
	total:0,
	require:{
		food:20,
		wood:60,
		stone:120,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:10,
		corpses:0
	}
},
stable = {
	total:0,
	require:{
		food:60,
		wood:60,
		stone:120,
		skins:0,
		herbs:0,
		ore:0,
		leather:10,
		metal:0,
		corpses:0
	}
},
mill = {
	total:0,
	require:{
		food:0,
		wood:100,
		stone:100,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
graveyard = {
	total:0,
	require:{
		food:0,
		wood:50,
		stone:200,
		skins:0,
		herbs:50,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
fortification = {
	total:0,
	require:{
		food:0,
		wood:0,
		stone:100,
		skins:0,
		herbs:0,
		ore:0,
		leather:0,
		metal:0,
		corpses:0
	}
},
wonder = {
	total:0,
	food:0,
	wood:0,
	stone:0,
	skins:0,
	herbs:0,
	ore:0,
	leather:0,
	metal:0,
	array:[],
	name:'',
	building:false,
	completed:false,
	progress:0
},
population = {
  current:10,
  cap:20,
  corpses:0,
  graves:0,
  unemployed:0,
  foragers:10,
  hunters:0,
  huntersCas:0,
  farmers:0,
  woodcutters:0,
	miners:0,
	tanners:0,
	blacksmiths:0,
	apothecaries:0,
	labourers:0,
	soldiers:0,
	soldiersCas:0,
	cavalry:0,
	cavalryCas:0,
	soldiersParty:0,
	soldiersPartyCas:0,
	cavalryParty:0,
	cavalryPartyCas:0,
	siege:0,
	esoldiers:0,
	esoldiersCas:0,
	eforts:0,
  healthy:0,
	totalSick:0,
	unemployedIll:0,
  foragersIll:0,
  huntersIll:0,
	farmersIll:0,
	woodcuttersIll:0,
	minersIll:0,
	tannersIll:0,
	blacksmithsIll:0,
	apothecariesIll:0,
	clericsIll:0,
	labourersIll:0,
	soldiersIll:0,
	soldiersCasIll:0,
	cavalryIll:0,
	cavalryCasIll:0,
  boar: 0,
  boarCas: 0,
  wolves: 0,
  wolvesCas: 0,
	banditsCas:0,
	barbarians:0,
	barbariansCas:0,
	esiege:0,
	enemiesSlain:0,
},
efficiency = {
  happiness:1,
  foragers:0,
  hunters:0,
  farmers:0.2,
  pestBonus:0,
  woodcutters:0.5,
	miners:0.2,
	tanners:0.5,
	blacksmiths:0.5,
	apothecaries:0.1,
	soldiers:0.05,
	cavalry:0.08,
},
upgrades = {
  fire: 0,
  tools:0,
  skinning:0,
  harvesting:0,
  prospecting:0,
  agriculture:0,
  domestication:0,
},
  age = 'Dawn Age',
	targetMax = 'thorp',
	raiding = {
		raiding:false,
		victory:false,
		iterations:0,
		last:""
	},
	resourceClicks = 0,
	logRepeat = 1,
	attackCounter = 0,
	tradeCounter = 0,
	throneCount = 0,
	pestTimer = 0,
	gloryTimer = 0,
	cureCounter = 0,
	graceCost = 1000,
	walkTotal = 0,
	autosave = "on",
	autosaveCounter = 1,
	customIncrements = false,
	delimiters = true,
	usingWords = false,
	worksafe = false,
	size = 1,
	body = document.getElementsByTagName('body')[0];

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

  //If science is greater than 0, reveal the science resources
  if (science.total > 0 && science.discovered == 0) {
    science.discovered = 1;
    document.getElementById('scienceTable').style.display= 'table-row';
  }
}

function updateBuildingTotals(){
	//Update page with building numbers, also stockpile limits.
	document.getElementById('tents').innerHTML = prettify(tent.total);
	document.getElementById('whuts').innerHTML = prettify(whut.total);
	document.getElementById('cottages').innerHTML = prettify(cottage.total);
	document.getElementById('houses').innerHTML = prettify(house.total);
	document.getElementById('mansions').innerHTML = prettify(mansion.total);
	document.getElementById('barns').innerHTML = prettify(barn.total);
	document.getElementById('maxfood').innerHTML = prettify(200 + (200 * (barn.total + (barn.total * upgrades.granaries))));
	document.getElementById('woodstock').innerHTML = prettify(woodstock.total);
	document.getElementById('maxwood').innerHTML = prettify(200 + (200 * woodstock.total));
	document.getElementById('stonestock').innerHTML = prettify(stonestock.total);
	document.getElementById('maxstone').innerHTML = prettify(200 + (200 * stonestock.total));
	document.getElementById('tanneries').innerHTML = prettify(tannery.total);
	document.getElementById('smithies').innerHTML = prettify(smithy.total);
	document.getElementById('apothecaria').innerHTML = prettify(apothecary.total);
	document.getElementById('barracks').innerHTML = prettify(barracks.total);
	document.getElementById('stables').innerHTML = prettify(stable.total);
	document.getElementById('mills').innerHTML = prettify(mill.total);
	document.getElementById('graveyards').innerHTML = prettify(graveyard.total);
	document.getElementById('fortifications').innerHTML = prettify(fortification.total);
	//Update land values
	totalBuildings = tent.total + whut.total + cottage.total + house.total + mansion.total + barn.total + woodstock.total + stonestock.total + tannery.total + smithy.total + apothecary.total + temple.total + barracks.total + stable.total + mill.total + graveyard.total + fortification.total + battleAltar.total + fieldsAltar.total + underworldAltar.total + catAltar.total;
	var freeLand = Math.max(land - totalBuildings, 0);
	document.getElementById('totalLand').innerHTML = prettify(land);
	document.getElementById('totalBuildings').innerHTML = prettify(Math.round(totalBuildings));
	document.getElementById('freeLand').innerHTML = prettify(Math.round(freeLand));
	//Unlock jobs predicated on having certain buildings
	if (smithy.total > 0) document.getElementById('blacksmithgroup').style.display = 'table-row';
	if (tannery.total > 0) document.getElementById('tannergroup').style.display = 'table-row';
	if (apothecary.total > 0) document.getElementById('apothecarygroup').style.display = 'table-row';
	if (temple.total > 0) document.getElementById('clericgroup').style.display = 'table-row';
	if (barracks.total > 0) document.getElementById('soldiergroup').style.display = 'table-row';
	if (stable.total > 0) document.getElementById('cavalrygroup').style.display = 'table-row';
	//Unlock upgrades predicated on having certain buildings
	if (temple.total > 0 && upgrades.deity != 1){ //At least one Temple is required to unlock Worship
		document.getElementById('deity').disabled = false;
	}
	if (barracks.total > 0 && upgrades.standard != 1){ //At least one Barracks is required to unlock Standard
		document.getElementById('standard').disabled = false;
	}
	updatePopulation(); //updatePopulation() handles the population caps, which are determined by buildings.
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
  //Unlocking interface elements as population increases to reduce unnecessary clicking
  	if (population.current >= 10) {
  		if (!customIncrements){
  			document.getElementById('spawn10').style.display="inline";
  			var elems = document.getElementsByClassName('job10');
  			for(var i = 0; i < elems.length; i++) {
  				elems[i].style.display = 'table-cell';
  			}
  		}
  	}
  	if (population.current >= 100) {
  		if (!customIncrements){
  			document.getElementById('spawn100').style.display="block";
  			var elems = document.getElementsByClassName('buildingten');
  			for(var i = 0; i < elems.length; i++) {
  				elems[i].style.display = 'table-cell';
  			}
  			var elems = document.getElementsByClassName('job100');
  			for(var i = 0; i < elems.length; i++) {
  				elems[i].style.display = 'table-cell';
  			}
  		}
  	}
  	if (population.current >= 1000) {
  		if (!customIncrements){
  			document.getElementById('spawn1000').style.display="block";
  			var elems = document.getElementsByClassName('buildinghundred');
  			for(var i = 0; i < elems.length; i++) {
  				elems[i].style.display = 'table-cell';
  			}
  		}
  		var elems = document.getElementsByClassName('jobAll');
  		for(var i = 0; i < elems.length; i++) {
  			elems[i].style.display = 'table-cell';
  		}
  		var elems = document.getElementsByClassName('jobNone');
  		for(var i = 0; i < elems.length; i++) {
  			elems[i].style.display = 'table-cell';
  		}
  	}
  	if (population.current >= 10000) {
  		if (!customIncrements){
  			var elems = document.getElementsByClassName('buildingthousand');
  			for(var i = 0; i < elems.length; i++) {
  				elems[i].style.display = 'table-cell';
  			}
  		}
  	}
  	updateSpawnButtons();
  	//Calculates and displays the cost of buying workers at the current population.
  	document.getElementById('workerCost').innerHTML = prettify(calcCost(1));
  	document.getElementById('workerCost10').innerHTML = prettify(calcCost(10));
  	document.getElementById('workerCost100').innerHTML = prettify(calcCost(100));
  	document.getElementById('workerCost1000').innerHTML = prettify(calcCost(1000));
  	updateJobs(); //handles the display of individual worker types
  	updateMobs(); //handles the display of enemies
  	updateHappiness();
  	updateAchievements(); //handles display of achievements
}

function updateSpawnButtons(){
	//Turning on/off buttons based on free space.
	if ((population.current + 1) <= population.cap && food.total >= calcCost(1)){
		document.getElementById('spawn1').disabled = false;
	} else {
		document.getElementById('spawn1').disabled = true;
	}
	if ((population.current + 10) <= population.cap && food.total >= calcCost(10)){
		document.getElementById('spawn10button').disabled = false;
	} else {
		document.getElementById('spawn10button').disabled = true;
	}
	if ((population.current + 100) <= population.cap && food.total >= calcCost(100)){
		document.getElementById('spawn100button').disabled = false;
	} else {
		document.getElementById('spawn100button').disabled = true;
	}
	if ((population.current + 1000) <= population.cap && food.total >= calcCost(1000)){
		document.getElementById('spawn1000button').disabled = false;
	} else {
		document.getElementById('spawn1000button').disabled = true;
	}
	if (population.current == population.cap){
		document.getElementById('spawn1').disabled = true;
		document.getElementById('spawn10button').disabled = true;
		document.getElementById('spawn100button').disabled = true;
		document.getElementById('spawn1000button').disabled = true;
	}
}

function updateJobs(){
	//Update the page with the latest worker distribution and stats
	document.getElementById('unemployed').innerHTML = prettify(population.unemployed);
	document.getElementById('foragers').innerHTML = prettify(population.foragers);
	updateJobButtons('foragers','foragers',false,false);
	document.getElementById('hunters').innerHTML = prettify(population.hunters);
	updateJobButtons('hunters','hunters',false,false);
	document.getElementById('corpses').innerHTML = prettify(population.corpses);
	document.getElementById('enemiesSlain').innerHTML = prettify(population.enemiesSlain);
}
function updateJobButtons(job,name,building,support){
	if (building){
		if (population[job] > 0){ //None
			document.getElementById(name + 'group').children[0].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[0].children[0].disabled = true;
		}
		if (population[job] >= 100){ //-100
			document.getElementById(name + 'group').children[2].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[2].children[0].disabled = true;
		}
		if (population[job] >= 10){ //-10
			document.getElementById(name + 'group').children[3].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[3].children[0].disabled = true;
		}
		if (population[job] >= 1){ //-1
			document.getElementById(name + 'group').children[4].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[4].children[0].disabled = true;
		}
		if ((job == 'soldiers' && metal.total >= 10 && leather.total >= 10 && population.unemployed >= 1 && population[job] + 1 <= building.total * support) || (job == 'cavalry' && food.total >= 20 && leather.total >= 20 && population.unemployed >= 1 && population[job] + 1 <= building.total * support) || (job != 'soldiers' && job != 'cavalry' && population.unemployed >= 1 && population[job] + 1 <= building.total * support)){ //1
			document.getElementById(name + 'group').children[7].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[7].children[0].disabled = true;
		}
		if ((job == 'soldiers' && metal.total >= 100 && leather.total >= 100 && population.unemployed >= 10 && population[job] + 10 <= building.total * support) || (job == 'cavalry' && food.total >= 200 && leather.total >= 200 && population.unemployed >= 10 && population[job] + 10 <= building.total * support) || (job != 'soldiers' && job != 'cavalry' && population.unemployed >= 10 && population[job] + 10 <= building.total * support)){ //10
			document.getElementById(name + 'group').children[8].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[8].children[0].disabled = true;
		}
		if ((job == 'soldiers' && metal.total >= 1000 && leather.total >= 1000 && population.unemployed >= 100 && population[job] + 100 <= building.total * support) || (job == 'cavalry' && food.total >= 2000 && leather.total >= 2000 && population.unemployed >= 100 && population[job] + 100 <= building.total * support) || (job != 'soldiers' && job != 'cavalry' && population.unemployed >= 100 && population[job] + 100 <= building.total * support)){ //100
			document.getElementById(name + 'group').children[9].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[9].children[0].disabled = true;
		}
		if ((job == 'soldiers' && metal.total >= 10 && leather.total >= 10 && population.unemployed >= 1 && population[job] + 1 <= building.total * support) || (job == 'cavalry' && food.total >= 20 && leather.total >= 20 && population.unemployed >= 1 && population[job] + 1 <= building.total * support) || (job != 'soldiers' && job != 'cavalry' && population.unemployed >= 1 && population[job] + 1 <= building.total * support)){ //Max
			document.getElementById(name + 'group').children[11].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[11].children[0].disabled = true;
		}
	} else {
		if (population[job] > 0){ //None
			document.getElementById(name + 'group').children[0].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[0].children[0].disabled = true;
		}
		if (population[job] >= 100){ //-100
			document.getElementById(name + 'group').children[2].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[2].children[0].disabled = true;
		}
		if (population[job] >= 10){ //-10
			document.getElementById(name + 'group').children[3].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[3].children[0].disabled = true;
		}
		if (population[job] >= 1){ //-1
			document.getElementById(name + 'group').children[4].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[4].children[0].disabled = true;
		}
		if (population.unemployed >= 1){ //1
			document.getElementById(name + 'group').children[7].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[7].children[0].disabled = true;
		}
		if (population.unemployed >= 10){ //10
			document.getElementById(name + 'group').children[8].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[8].children[0].disabled = true;
		}
		if (population.unemployed >= 100){ //100
			document.getElementById(name + 'group').children[9].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[9].children[0].disabled = true;
		}
		if (population.unemployed > 0){ //Max
			document.getElementById(name + 'group').children[11].children[0].disabled = false;
		} else {
			document.getElementById(name + 'group').children[11].children[0].disabled = true;
		}
	}
	//do something with these later
	//document.getElementById(name + 'group').children[1].children[0].disabled = false; //-Custom
	//document.getElementById(name + 'group').children[10].children[0].disabled = false; //Custom
}

function updateUpgrades(){
	//Check to see if the player has an upgrade and hide as necessary
	//Check also to see if the player can afford an upgrade and enable/disable as necessary
  //fire
  if (upgrades.fire == 1) {
    document.getElementById('fireLine').style.display = 'none';
    document.getElementById('Pfire').style.display = 'block';
  } else {
    document.getElementById('fireLine').style.display = 'inline';
    document.getElementById('Pfire').style.display = 'none';
    if (science.total >= 10) {
      document.getElementById('fire').disabled = false;
    } else {
      document.getElementById('fire').disabled = true;
    }
  }
}

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


function calcCost(number){
	//Calculates and returns the cost of adding a certain number of workers at the present population
	//First set temporary values
	var aggCost = 0,
		currentPrice = 0,
		popCurrentTemp = population.current;
	//Then iterate through adding workers, and increment temporary values
	for (var i=0; i<number; i++){
			currentPrice = 10 + Math.floor(popCurrentTemp / 100); //CURRENT FOOD COST CALCULATION
			//currentPrice = Math.floor(20 * Math.pow(1.005,popCurrentTemp / 1500) + popCurrentTemp / 100); //POTENTIAL NEW COST CALCULATION
			aggCost += currentPrice;
			popCurrentTemp += 1;
	}
	//Finally, return the aggregated cost to the function that called this one.
	return aggCost;
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
	if (food.total > 200 + ((barn.total + (barn.total * upgrades.granaries)) * 200)){
		food.total = 200 + ((barn.total + (barn.total * upgrades.granaries)) * 200);
	}
	if (wood.total > 200 + (woodstock.total * 200)){
		wood.total = 200 + (woodstock.total * 200);
	}
	if (stone.total > 200 + (stonestock.total * 200)){
		stone.total = 200 + (stonestock.total * 200);
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

/* Enemies */

function spawnMob(mobtype){
	//Creates enemies based on current population
	if (mobtype == 'wolf'){
		//Calculates appropriate number
		var num = Math.random(),
			pop = (population.current / 50),
			tot = num * pop,
			clt = Math.ceil(tot);
		population.wolves += clt;
		population.wolvesCas += clt;
		//Informs player
        if (clt > 0) gameLog(prettify(clt) + ' wolves attacked');
		document.getElementById('wolfgroup').style.display = 'table-row';
	}
  if (mobtype == 'boar'){
    var num = Math.random(),
			pop = (population.current / 50),
			tot = num * pop,
			clt = Math.ceil(tot);
		population.boar += clt;
		population.boarCas += clt;
        if (clt > 0) gameLog(prettify(clt) + ' boars attacked');
		document.getElementById('boargroup').style.display = 'table-row';
  }
/*
	if(mobtype == 'bandit'){
		var num = Math.random(),
			pop = ((population.current + population.zombies) / 50),
			tot = num * pop,
			clt = Math.ceil(tot),
			nus = Math.random(),
			tos = nus * clt/500,
			cls = Math.floor(tos);
		population.bandits += clt;
		population.banditsCas += clt;
		population.esiege += cls;
        if (cls > 0){
			gameLog(prettify(clt) + ' bandits attacked, with ' + prettify(cls) + ' siege engines');
			document.getElementById('banditgroup').style.display = 'table-row';
			document.getElementById('esiegegroup').style.display = 'table-row';
		} else if (clt > 0){
			gameLog(prettify(clt) + ' bandits attacked');
			document.getElementById('banditgroup').style.display = 'table-row';
		}
	}
	if (mobtype == 'barbarian'){
		var num = Math.random(),
			pop = ((population.current + population.zombies) / 50),
			tot = num * pop,
			clt = Math.ceil(tot),
			nus = Math.random(),
			tos = nus * clt/100,
			cls = Math.floor(tos);
		population.barbarians += clt;
		population.barbariansCas += clt;
		population.esiege += cls;
        if (cls > 0){
			gameLog(prettify(clt) + ' barbarians attacked, with ' + prettify(cls) + ' siege engines');
			document.getElementById('barbariangroup').style.display = 'table-row';
			document.getElementById('esiegegroup').style.display = 'table-row';
		} else if (clt > 0){
			gameLog(prettify(clt) + ' barbarians attacked');
			document.getElementById('barbariangroup').style.display = 'table-row';
		}
	}
*/
	updateMobs(); //updates page with numbers
}

/* Timed functions */

window.setInterval(function(){
	//The whole game runs on a single setInterval clock. Basically this whole list is run every second
	//and should probably be minimised as much as possible.

	//debugging - mark beginning of loop execution
	//var start = new Date().getTime();

	//Autosave
/*
	if (autosave == "on") {
		autosaveCounter += 1;
		if (autosaveCounter >= 60){ //Currently autosave is every minute. Might change to 5 mins in future.
			save('auto');
			autosaveCounter = 1;
		}
	}
*/
	//Resource-related

	var millMod = 1;
	food.total += population.foragers * (1 + (efficiency.foragers * efficiency.happiness)) * (1 + efficiency.pestBonus) * (1 + walkTotal/120); //foragers harvest food
/*
	if (upgrades.skinning == 1 && population.farmers > 0){ //and sometimes get skins
		x = Math.random();
		if (x < food.specialchance){
			z = 0;
			if (upgrades.butchering == 1){
				z = population.farmers / 15
			};
			skins.total += ((food.increment + z) * (1 + (wonder.skins/10)));
		}
	}
*/
/*
	wood.total += population.woodcutters * (efficiency.woodcutters * efficiency.happiness) * (1 + (wonder.wood/10)); //Woodcutters cut wood
	if (upgrades.harvesting == 1 && population.woodcutters > 0){ //and sometimes get herbs
		x = Math.random();
		if (x < wood.specialchance){
			z = 0;
			if (upgrades.gardening == 1){
				z = population.woodcutters / 5
			};
			herbs.total += (wood.increment + z) * (1 + (wonder.herbs/10));
		}
	}
*/
/*
	stone.total += population.miners * (efficiency.miners * efficiency.happiness) * (1 + (wonder.stone/10)); //Miners mine stone
	if (upgrades.prospecting == 1 && population.miners > 0){ //and sometimes get ore
		x = Math.random();
		if (x < stone.specialchance){
			z = 0;
			if (upgrades.extraction == 1){
				z = population.miners / 5
			};
			ore.total += (stone.increment + z) * (1 + (wonder.ore/10));
		}
	}
*/
	food.total -= population.current; //The living population eats food.
	if (food.total < 0) { //and will starve if they don't have enough
		if (/*upgrades.waste &&*/ population.corpses >= (food.total * -1)){ //population eats corpses instead
			population.corpses = Math.floor(population.corpses + food.total);
		} else if (/*upgrades.waste &&*/ population.corpses > 0){ //corpses mitigate starvation
			var starve = Math.ceil((population.current - population.corpses)/1000);
			if (starve == 1) gameLog('A worker starved to death');
			if (starve > 1) gameLog(prettify(starve) + ' workers starved to death');
			for (var i=0; i<starve; i++){
				jobCull();
			}
			updateJobs();
			population.corpses = 0;
		} else { //they just starve
			var starve = Math.ceil(population.current/1000);
			if (starve == 1) gameLog('A worker starved to death');
			if (starve > 1) gameLog(prettify(starve) + ' workers starved to death');
			for (var i=0; i<starve; i++){
				jobCull();
			}
			updateJobs();
			mood(-0.01);
		};
		food.total = 0;
		updatePopulation(); //Called because jobCull doesn't. May just change jobCull?
	}
	//Resources occasionally go above their caps.
	if (food.total > 200/* + ((barn.total + (barn.total * upgrades.granaries)) * 200)*/){
		food.total = 200/* + ((barn.total + (barn.total * upgrades.granaries)) * 200)*/;
	};
	if (wood.total > 200/* + (woodstock.total * 200)*/){
		wood.total = 200/* + (woodstock.total * 200)*/;
	};
	if (stone.total > 200/* + (stonestock.total * 200)*/){
		stone.total = 200/* + (stonestock.total * 200)*/;
	};
	if (science.total > 200){
		science.total = 200;
	};
	//Workers convert secondary resources into tertiary resources

/*
	if (ore.total >= population.blacksmiths * (efficiency.blacksmiths * efficiency.happiness)){
		metal.total += population.blacksmiths * (efficiency.blacksmiths * efficiency.happiness) * (1 + (wonder.metal/10));
		ore.total -= population.blacksmiths * (efficiency.blacksmiths * efficiency.happiness);
	} else if (population.blacksmiths) {
		metal.total += ore.total * (1 + (wonder.metal/10));
		ore.total = 0;
	};
	if (skins.total >= population.tanners * (efficiency.tanners * efficiency.happiness)){
		leather.total += population.tanners * (efficiency.tanners * efficiency.happiness) * (1 + (wonder.leather/10));
		skins.total -= population.tanners * (efficiency.tanners * efficiency.happiness);
	} else if (population.tanners) {
		leather.total += skins.total * (1 + (wonder.leather/10));
		skins.total = 0;
	};
	//Clerics generate piety
	piety.total += population.clerics * (efficiency.clerics + (efficiency.clerics * upgrades.writing)) * (1 + (upgrades.secrets * (1 - 100/(graveyard.total + 100)))) * efficiency.happiness * (1 + (wonder.piety/10));
*/

	//Timers - routines that do not occur every second

	//Checks when mobs will attack
	if (population.current > 0) attackCounter += 1;
	if (population.current> 0 && attackCounter > (60 * 5)){ //Minimum 5 minutes
		var check = Math.random() * 600;
		if (check < 1){
			attackCounter = 0;
			//Chooses which kind of mob will attack
			if (age == 'Dawn Age'){
				if (Math.random() > 0.5){
					spawnMob('boar');
				} else {
					spawnMob('wolf');
				}
  		}
  	}
  }
/*
	//Decrements the pestTimer, and resets the bonus once it runs out
	if (pestTimer > 0){
		pestTimer -= 1;
	} else {
		efficiency.pestBonus = 0;
	}
*/

/*
	//Handles the Glory bonus
	if (gloryTimer > 0){
		document.getElementById('gloryTimer').innerHTML = gloryTimer;
		gloryTimer -= 1;
	} else {
		document.getElementById('gloryGroup').style.display = 'none';
	}
*/

/*
	//traders occasionally show up
	if (population.current + population.zombies > 0) tradeCounter += 1;
	if (population.current + population.zombies > 0 && tradeCounter > (60 * (3 - upgrades.currency - upgrades.commerce))){
		var check = Math.random() * (60 * (3 - upgrades.currency - upgrades.commerce));
		if (check < (1 + (0.2 * upgrades.comfort))){
			tradeCounter = 0;
			tradeTimer();
		}
	}
*/

	updateResourceTotals(); //This is the point where the page is updated with new resource totals

	//Population-related

	//Handling wolf attacks (this is complicated)
	if (population.wolves > 0){
		if (population.soldiers > 0 || population.cavalry > 0){ //FIGHT!
			//handles cavalry
			if (population.cavalry > 0){
				//Calculate each side's casualties inflicted and subtract them from an effective strength value (xCas)
				population.wolvesCas -= (population.cavalry * efficiency.cavalry);
				population.cavalryCas -= (population.wolves * (0.05 - (0.01 * upgrades.palisade)) * Math.max(1 - (fortification.total/100),0));
				//If this reduces effective strengths below 0, reset it to 0.
				if (population.wolvesCas < 0){
					population.wolvesCas = 0;
				}
				if (population.cavalryCas < 0){
					population.cavalryCas = 0;
				}
				//Calculates the casualties dealt based on difference between actual numbers and new effective strength
				var mobCasualties = population.wolves - population.wolvesCas,
					mobCasFloor = Math.floor(mobCasualties),
					casualties = population.cavalry - population.cavalryCas,
					casFloor = Math.floor(casualties);
				if (!(mobCasFloor > 0)) mobCasFloor = 0; //weirdness with floating point numbers. not sure why this is necessary
				if (!(casFloor > 0)) casFloor = 0;
				//Increments enemies slain, corpses, and piety
				population.enemiesSlain += mobCasFloor;
				if (upgrades.throne) throneCount += mobCasFloor;
				population.corpses += (casFloor + mobCasFloor);
				if (upgrades.book) {
					piety.total += (casFloor + mobCasFloor) * 10;
				};
				//Resets the actual numbers based on effective strength
				population.wolves = Math.ceil(population.wolvesCas);
				population.cavalry = Math.ceil(population.cavalryCas);
			}
			//handles soldiers
			if (population.soldiers > 0){
				//Calculate each side's casualties inflicted and subtract them from an effective strength value (xCas)
				population.wolvesCas -= (population.soldiers * efficiency.soldiers);
				population.soldiersCas -= (population.wolves * (0.05 - (0.01 * upgrades.palisade)) * Math.max(1 - (fortification.total/100),0));
				//If this reduces effective strengths below 0, reset it to 0.
				if (population.wolvesCas < 0){
					population.wolvesCas = 0;
				}
				if (population.soldiersCas < 0){
					population.soldiersCas = 0;
				}
				//Calculates the casualties dealt based on difference between actual numbers and new effective strength
				var mobCasualties = population.wolves - population.wolvesCas,
					mobCasFloor = Math.floor(mobCasualties),
					casualties = population.soldiers - population.soldiersCas,
					casFloor = Math.floor(casualties);
				if (!(mobCasFloor > 0)) mobCasFloor = 0; //weirdness with floating point numbers. not sure why this is necessary
				if (!(casFloor > 0)) casFloor = 0;
				//Increments enemies slain, corpses, and piety
				population.enemiesSlain += mobCasFloor;
				if (upgrades.throne) throneCount += mobCasFloor;
				population.corpses += (casFloor + mobCasFloor);
				if (upgrades.book) {
					piety.total += (casFloor + mobCasFloor) * 10;
				};
				//Resets the actual numbers based on effective strength
				population.wolves = Math.ceil(population.wolvesCas);
				population.soldiers = Math.ceil(population.soldiersCas);
			}
			//Updates population figures (including total population)
			updatePopulation();
		} else {
			//Check to see if there are workers that the wolves can eat
			if (population.healthy > 0){
				//Choose random worker
				var target = randomWorker();
				if (Math.random() > 0.5){ //Wolves will sometimes not disappear after eating someone
					population.wolves -= 1;
					population.wolvesCas -= 1;
				}
				if (population.wolvesCas < 0) population.wolvesCas = 0;
				console.log('Wolves ate a ' + target);
                gameLog('Wolves ate a ' + target);
				if (target == "unemployed"){
					population.current -= 1;
					population.unemployed -= 1;
				} else if (target == "farmer"){
					population.current -= 1;
					population.farmers -= 1;
				} else if (target == "woodcutter"){
					population.current -= 1;
					population.woodcutters -= 1;
				} else if (target == "miner"){
					population.current -= 1;
					population.miners -= 1;
				} else if (target == "tanner"){
					population.current -= 1;
					population.tanners -= 1;
				} else if (target == "blacksmith"){
					population.current -= 1;
					population.blacksmiths -= 1;
				} else if (target == "apothecary"){
					population.current -= 1;
					population.apothecaries -= 1;
				} else if (target == "cleric"){
					population.current -= 1;
					population.clerics -= 1;
				} else if (target == "labourer"){
					population.current -= 1;
					population.labourers -= 1;
				} else if (target == "soldier"){
					population.current -= 1;
					population.soldiers -= 1;
					population.soldiersCas -= 1;
					if (population.soldiersCas < 0){
						population.soldiers = 0;
						population.soldiersCas = 0;
					}
				} else if (target == "cavalry"){
					population.current -= 1;
					population.cavalry -= 1;
					population.cavalryCas -= 1;
					if (population.cavalryCas < 0){
						population.cavalry = 0;
						population.cavalryCas = 0;
					}
				}
				updatePopulation();
			} else {
				//wolves will leave
				var leaving = Math.ceil(population.wolves * Math.random());
				population.wolves -= leaving;
				population.wolvesCas -= leaving;
				updateMobs();
			};
		}
	}
	if (population.bandits > 0){
		if (population.soldiers > 0 || population.cavalry > 0){//FIGHT!
			//Handles cavalry
			if (population.cavalry > 0){
				//Calculate each side's casualties inflicted and subtract them from an effective strength value
				population.banditsCas -= (population.cavalry * efficiency.cavalry);
				population.cavalryCas -= (population.bandits * (0.07 - (0.01 * upgrades.palisade)) * Math.max(1 - (fortification.total/100),0)) * 1.5; //cavalry take 50% more casualties vs infantry
				//If this reduces effective strengths below 0, reset it to 0.
				if (population.banditsCas < 0){
					population.banditsCas = 0;
				}
				if (population.cavalryCas < 0){
					population.cavalryCas = 0;
				}
				//Calculates the casualties dealt based on difference between actual numbers and new effective strength
				var mobCasualties = population.bandits - population.banditsCas,
					mobCasFloor = Math.floor(mobCasualties),
					casualties = population.cavalry - population.cavalryCas,
					casFloor = Math.floor(casualties);
				if (!(mobCasFloor > 0)) mobCasFloor = 0;
				if (!(casFloor > 0)) casFloor = 0;
				//Increments enemies slain, corpses, and piety
				population.enemiesSlain += mobCasFloor;
				if (upgrades.throne) throneCount += mobCasFloor;
				population.corpses += (casFloor + mobCasFloor);
				if (upgrades.book) {
					piety.total += (casFloor + mobCasFloor) * 10;
				};
				//Resets the actual numbers based on effective strength
				population.bandits = Math.ceil(population.banditsCas);
				population.cavalry = Math.ceil(population.cavalryCas);
			}
			//Handles infantry
			if (population.soldiers > 0){
				//Calculate each side's casualties inflicted and subtract them from an effective strength value
				population.banditsCas -= (population.soldiers * efficiency.soldiers);
				population.soldiersCas -= (population.bandits * (0.07 - (0.01 * upgrades.palisade)) * Math.max(1 - (fortification.total/100),0));
				//If this reduces effective strengths below 0, reset it to 0.
				if (population.banditsCas < 0){
					population.banditsCas = 0;
				}
				if (population.soldiersCas < 0){
					population.soldiersCas = 0;
				}
				//Calculates the casualties dealt based on difference between actual numbers and new effective strength
				var mobCasualties = population.bandits - population.banditsCas,
					mobCasFloor = Math.floor(mobCasualties),
					casualties = population.soldiers - population.soldiersCas,
					casFloor = Math.floor(casualties);
				if (!(mobCasFloor > 0)) mobCasFloor = 0;
				if (!(casFloor > 0)) casFloor = 0;
				//Increments enemies slain, corpses, and piety
				population.enemiesSlain += mobCasFloor;
				if (upgrades.throne) throneCount += mobCasFloor;
				population.corpses += (casFloor + mobCasFloor);
				if (upgrades.book) {
					piety.total += (casFloor + mobCasFloor) * 10;
				};
				//Resets the actual numbers based on effective strength
				population.bandits = Math.ceil(population.banditsCas);
				population.soldiers = Math.ceil(population.soldiersCas);
			}
			//Updates population figures (including total population)
			updatePopulation();
		} else {
			//Bandits will steal resources. Select random resource, steal random amount of it.
			var num = Math.random();
			var stolen = Math.floor((Math.random() * 1000)); //Steal up to 1000.
			if (num < 1/8){
				if (food.total > 0) gameLog('Bandits stole food');
				if (food.total >= stolen){
					food.total -= stolen;
				} else {
					food.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else if (num < 2/8){
				if (wood.total > 0) gameLog('Bandits stole wood');
				if (wood.total >= stolen){
					wood.total -= stolen;
				} else {
					wood.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else if (num < 3/8){
				if (stone.total > 0) gameLog('Bandits stole stone');
				if (stone.total >= stolen){
					stone.total -= stolen;
				} else {
					stone.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else if (num < 4/8){
				if (skins.total > 0) gameLog('Bandits stole skins');
				if (skins.total >= stolen){
					skins.total -= stolen;
				} else {
					skins.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else if (num < 5/8){
				if (herbs.total > 0) gameLog('Bandits stole herbs');
				if (herbs.total >= stolen){
					herbs.total -= stolen;
				} else {
					herbs.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else if (num < 6/8){
				if (ore.total > 0) gameLog('Bandits stole ore');
				if (ore.total >= stolen){
					ore.total -= stolen;
				} else {
					ore.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else if (num < 7/8){
				if (leather.total > 0) gameLog('Bandits stole leather');
				if (leather.total >= stolen){
					leather.total -= stolen;
				} else {
					leather.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			} else {
				if (metal.total > 0) gameLog('Bandits stole metal');
				if (metal.total >= stolen){
					metal.total -= stolen;
				} else {
					metal.total = 0;
					//some will leave
					var leaving = Math.ceil(population.bandits * Math.random() * 1/8);
					population.bandits -= leaving;
					population.banditsCas -= leaving;
					updateMobs();
				}
			};
			population.bandits -= 1; //Bandits leave after stealing something.
			population.banditsCas -= 1;
			if (population.banditsCas < 0) population.banditsCas = 0;
			updateResourceTotals();
			updatePopulation();
		}
	}
	if (population.barbarians){
		if (population.soldiers > 0 || population.cavalry > 0){//FIGHT!
			//Handles cavalry
			if (population.cavalry > 0){
				//Calculate each side's casualties inflicted and subtract them from an effective strength value
				population.barbariansCas -= (population.cavalry * efficiency.cavalry);
				population.cavalryCas -= (population.barbarians * (0.09 - (0.01 * upgrades.palisade)) * Math.max(1 - (fortification.total/100),0)) * 1.5; //Cavalry take 50% more casualties vs. infantry
				//If this reduces effective strengths below 0, reset it to 0.
				if (population.barbariansCas < 0){
					population.barbariansCas = 0;
				}
				if (population.cavalryCas < 0){
					population.cavalryCas = 0;
				}
				//Calculates the casualties dealt based on difference between actual numbers and new effective strength
				var mobCasualties = population.barbarians - population.barbariansCas,
					mobCasFloor = Math.floor(mobCasualties),
					casualties = population.cavalry - population.cavalryCas,
					casFloor = Math.floor(casualties);
				if (!(mobCasFloor > 0)) mobCasFloor = 0;
				if (!(casFloor > 0)) casFloor = 0;
				//Increments enemies slain, corpses, and piety
				population.enemiesSlain += mobCasFloor;
				if (upgrades.throne) throneCount += mobCasFloor;
				population.corpses += (casFloor + mobCasFloor);
				if (upgrades.book) {
					piety.total += (casFloor + mobCasFloor) * 10;
				};
				//Resets the actual numbers based on effective strength
				population.barbarians = Math.ceil(population.barbariansCas);
				population.cavalry = Math.ceil(population.cavalryCas);
			}
			//Handles infantry
			if (population.soldiers > 0){
				//Calculate each side's casualties inflicted and subtract them from an effective strength value
				population.barbariansCas -= (population.soldiers * efficiency.soldiers);
				population.soldiersCas -= (population.barbarians * (0.09 - (0.01 * upgrades.palisade)) * Math.max(1 - (fortification.total/100),0));
				//If this reduces effective strengths below 0, reset it to 0.
				if (population.barbariansCas < 0){
					population.barbariansCas = 0;
				}
				if (population.soldiersCas < 0){
					population.soldiersCas = 0;
				}
				//Calculates the casualties dealt based on difference between actual numbers and new effective strength
				var mobCasualties = population.barbarians - population.barbariansCas,
					mobCasFloor = Math.floor(mobCasualties),
					casualties = population.soldiers - population.soldiersCas,
					casFloor = Math.floor(casualties);
				if (!(mobCasFloor > 0)) mobCasFloor = 0;
				if (!(casFloor > 0)) casFloor = 0;
				//Increments enemies slain, corpses, and piety
				population.enemiesSlain += mobCasFloor;
				if (upgrades.throne) throneCount += mobCasFloor;
				population.corpses += (casFloor + mobCasFloor);
				if (upgrades.book) {
					piety.total += (casFloor + mobCasFloor) * 10;
				};
				//Resets the actual numbers based on effective strength
				population.barbarians = Math.ceil(population.barbariansCas);
				population.soldiers = Math.ceil(population.soldiersCas);
			}
			//Updates population figures (including total population)
			updatePopulation();
		} else {
			var havoc = Math.random(); //barbarians do different things
			if (havoc < 0.3){
				//Kill people, see wolves
				if (population.healthy > 0){
					//No honor in killing the sick who will starve anyway
					var target = randomWorker(); //Choose random worker
					population.barbarians -= 1; //Barbarians always disappear after killing
					population.barbariansCas -= 1;
					if (population.barbariansCas < 0) population.barbariansCas = 0;
					console.log('Barbarians killed a ' + target);
					gameLog('Barbarians killed a ' + target);
					if (target == "unemployed"){
						population.current -= 1;
						population.unemployed -= 1;
					} else if (target == "farmer"){
						population.current -= 1;
						population.farmers -= 1;
					} else if (target == "woodcutter"){
						population.current -= 1;
						population.woodcutters -= 1;
					} else if (target == "miner"){
						population.current -= 1;
						population.miners -= 1;
					} else if (target == "tanner"){
						population.current -= 1;
						population.tanners -= 1;
					} else if (target == "blacksmith"){
						population.current -= 1;
						population.blacksmiths -= 1;
					} else if (target == "apothecary"){
						population.current -= 1;
						population.apothecaries -= 1;
					} else if (target == "cleric"){
						population.current -= 1;
						population.clerics -= 1;
					} else if (target == "labourer"){
						population.current -= 1;
						population.labourers -= 1;
					} else if (target == "soldier"){
						population.current -= 1;
						population.soldiers -= 1;
						population.soldiersCas -= 1;
						if (population.soldiersCas < 0){
							population.soldiers = 0;
							population.soldiersCas = 0;
						}
					} else if (target == "cavalry"){
						population.current -= 1;
						population.cavalry -= 1;
						population.cavalryCas -= 1;
						if (population.cavalryCas < 0){
							population.cavalry = 0;
							population.cavalryCas = 0;
						}
					}
					population.corpses += 1; //Unlike wolves, Barbarians leave corpses behind
					updatePopulation();
				} else {
					var leaving = Math.ceil(population.barbarians * Math.random() * 1/3);
					population.barbarians -= leaving;
					population.barbariansCas -= leaving;
					updateMobs();
				}
			} else if (havoc < 0.6){
				//Steal shit, see bandits
				var num = Math.random();
				var stolen = Math.floor((Math.random() * 1000)); //Steal up to 1000.
				if (num < 1/8){
					if (food.total > 0) gameLog('Barbarians stole food');
					if (food.total >= stolen){
						food.total -= stolen;
					} else {
						food.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 2/8){
					if (wood.total > 0) gameLog('Barbarians stole wood');
					if (wood.total >= stolen){
						wood.total -= stolen;
					} else {
						wood.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 3/8){
					if (stone.total > 0) gameLog('Barbarians stole stone');
					if (stone.total >= stolen){
						stone.total -= stolen;
					} else {
						stone.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 4/8){
					if (skins.total > 0) gameLog('Barbarians stole skins');
					if (skins.total >= stolen){
						skins.total -= stolen;
					} else {
						skins.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 5/8){
					if (herbs.total > 0) gameLog('Barbarians stole herbs');
					if (herbs.total >= stolen){
						herbs.total -= stolen;
					} else {
						herbs.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 6/8){
					if (ore.total > 0) gameLog('Barbarians stole ore');
					if (ore.total >= stolen){
						ore.total -= stolen;
					} else {
						ore.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 7/8){
					if (leather.total > 0) gameLog('Barbarians stole leather');
					if (leather.total >= stolen){
						leather.total -= stolen;
					} else {
						leather.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else {
					if (metal.total > 0) gameLog('Barbarians stole metal');
					if (metal.total >= stolen){
						metal.total -= stolen;
					} else {
						metal.total = 0;
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/24);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				};
				population.barbarians -= 1; //Barbarians leave after stealing something.
				population.barbariansCas -= 1;
				if (population.barbariansCas < 0) population.barbariansCas = 0;
				updateResourceTotals();
				updatePopulation();
			} else {
				//Destroy buildings
				var num = Math.random(); //Barbarians attempt to destroy random buildings (and leave if they do)
				if (num < 1/16){
					if (tent.total > 0){
						tent.total -= 1;
						gameLog('Barbarians destroyed a tent');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 2/16){
					if (whut.total > 0){
						whut.total -= 1;
						gameLog('Barbarians destroyed a wooden hut');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 3/16){
					if (cottage.total > 0){
						cottage.total -= 1;
						gameLog('Barbarians destroyed a cottage');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 4/16){
					if (house.total > 0){
						house.total -= 1;
						gameLog('Barbarians destroyed a house');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 5/16){
					if (mansion.total > 0){
						mansion.total -= 1;
						gameLog('Barbarians destroyed a mansion');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 6/16){
					if (barn.total > 0){
						barn.total -= 1;
						gameLog('Barbarians destroyed a barn');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 7/16){
					if (woodstock.total > 0){
						woodstock.total -= 1;
						gameLog('Barbarians destroyed a wood stockpile');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 8/16){
					if (stonestock.total > 0){
						stonestock.total -= 1;
						gameLog('Barbarians destroyed a stone stockpile');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 9/16){
					if (tannery.total > 0){
						tannery.total -= 1;
						gameLog('Barbarians destroyed a tannery');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 10/16){
					if (smithy.total > 0){
						smithy.total -= 1;
						gameLog('Barbarians destroyed a smithy');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 11/16){
					if (apothecary.total > 0){
						apothecary.total -= 1;
						gameLog('Barbarians destroyed an apothecary');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 12/16){
					if (temple.total > 0){
						temple.total -= 1;
						gameLog('Barbarians destroyed a temple');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 13/16){
					if (fortification.total > 0){
						fortification.total -= 1;
						gameLog('Barbarians damaged fortifications');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 14/16){
					if (stable.total > 0){
						stable.total -= 1;
						gameLog('Barbarians destroyed a stable');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else if (num < 15/16){
					if (mill.total > 0){
						mill.total -= 1;
						gameLog('Barbarians destroyed a mill');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				} else {
					if (barracks.total > 0){
						barracks.total -= 1;
						gameLog('Barbarians destroyed a barracks');
					} else {
						//some will leave
						var leaving = Math.ceil(population.barbarians * Math.random() * 1/112);
						population.barbarians -= leaving;
						population.barbariansCas -= leaving;
						updateMobs();
					}
				};
				population.barbarians -= 1;
				population.barbariansCas -= 1;
				if (population.barbarians < 0) population.barbarians = 0;
				if (population.barbariansCas < 0) population.barbariansCas = 0;
				updateBuildingTotals();
				updatePopulation();
			}
		}
	}
	if (population.shades > 0){
		if (population.wolves >= population.shades/4){
			population.wolves -= Math.floor(population.shades/4);
			population.wolvesCas -= population.shades/4;
			population.shades -= Math.floor(population.shades/4);
		} else if (population.wolves > 0){
			population.shades -= Math.floor(population.wolves);
			population.wolves = 0;
			population.wolvesCas = 0;
		}
		if (population.bandits >= population.shades/4){
			population.bandits -= Math.floor(population.shades/4);
			population.banditsCas -= population.shades/4;
			population.shades -= Math.floor(population.shades/4);
		} else if (population.bandits > 0){
			population.shades -= Math.floor(population.bandits);
			population.bandits = 0;
			population.banditsCas = 0;
		}
		if (population.barbarians >= population.shades/4){
			population.barbarians -= Math.floor(population.shades/4);
			population.barbariansCas -= population.shades/4;
			population.shades -= Math.floor(population.shades/4);
		} else if (population.bandits > 0){
			population.shades -= Math.floor(population.barbarians);
			population.barbarians = 0;
			population.barbariansCas = 0;
		}
		population.shades = Math.floor(population.shades * 0.95);
		if (population.shades < 0) population.shades = 0;
		updatePopulation();
	}
	if (population.esiege > 0){
		//First check there are enemies there defending them
		if (population.bandits > 0 || population.barbarians > 0){
			if (fortification.total > 0){ //needs to be something to fire at
				var firing = Math.ceil(Math.min(population.esiege/2,100)); //At most half or 100 can fire at a time
				for (var i = 0; i < firing; i++){
					if (fortification.total > 0){ //still needs to be something to fire at
						var hit = Math.random();
						if (hit < 0.1){ //each siege engine has 10% to hit
							fortification.total -= 1;
							gameLog('Enemy siege engine damaged our fortifications');
							updateRequirements(fortification);
						} else if (hit > 0.95){ //each siege engine has 5% to misfire and destroy itself
							population.esiege -= 1;
						}
					}
				}
				updateBuildingTotals();
			};
		} else if (population.soldiers > 0 || population.cavalry > 0) {
			//the siege engines are undefended
			if (upgrades.mathematics){ //Can we use them?
				gameLog('Captured ' + prettify(population.esiege) + ' enemy siege engines.');
				population.siege += population.esiege; //capture them
				updateParty(); //show them in conquest pane
			} else {
				//we can't use them, therefore simply destroy them
				gameLog('Destroyed ' + prettify(population.esiege) + ' enemy siege engines.');
			}
			population.esiege = 0;
		}
		updateMobs();
	}

	if (raiding.raiding){ //handles the raiding subroutine
		if (population.soldiersParty > 0 || population.cavalryParty || raiding.victory){ //technically you can win, then remove all your soldiers
			if (population.esoldiers > 0){
				/* FIGHT! */
				//Handles cavalry
				if (population.cavalryParty > 0){
					//Calculate each side's casualties inflicted and subtract them from an effective strength value (xCas)
					population.esoldiersCas -= (population.cavalryParty * efficiency.cavalry) * Math.max(1 - population.eforts/100,0);
					population.cavalryPartyCas -= (population.esoldiers * 0.05 * 1.5); //Cavalry takes 50% more casualties vs. infantry
					//If this reduces effective strengths below 0, reset it to 0.
					if (population.esoldiersCas < 0){
						population.esoldiersCas = 0;
					}
					if (population.cavalryPartyCas < 0){
						population.cavalryPartyCas = 0;
					}
					//Calculates the casualties dealt based on difference between actual numbers and new effective strength
					var mobCasualties = population.esoldiers - population.esoldiersCas,
						mobCasFloor = Math.floor(mobCasualties),
						casualties = population.cavalryParty - population.cavalryPartyCas,
						casFloor = Math.floor(casualties);
					if (!(mobCasFloor > 0)) mobCasFloor = 0; //weirdness with floating point numbers. not sure why this is necessary
					if (!(casFloor > 0)) casFloor = 0;
					//Increments enemies slain, corpses, and piety
					population.enemiesSlain += mobCasFloor;
					if (upgrades.throne) throneCount += mobCasFloor;
					population.corpses += (casFloor + mobCasFloor);
					updatePopulation();
					if (upgrades.book) {
						piety.total += (casFloor + mobCasFloor) * 10;
						updateResourceTotals();
					};
					//Resets the actual numbers based on effective strength
					population.esoldiers = Math.ceil(population.esoldiersCas);
					population.cavalryParty = Math.ceil(population.cavalryPartyCas);
				}
				//Handles infantry
				if (population.soldiersParty > 0){
					//Calculate each side's casualties inflicted and subtract them from an effective strength value (xCas)
					population.esoldiersCas -= (population.soldiersParty * efficiency.soldiers) * Math.max(1 - population.eforts/100,0);
					population.soldiersPartyCas -= (population.esoldiers * 0.05);
					//If this reduces effective strengths below 0, reset it to 0.
					if (population.esoldiersCas < 0){
						population.esoldiersCas = 0;
					}
					if (population.soldiersPartyCas < 0){
						population.soldiersPartyCas = 0;
					}
					//Calculates the casualties dealt based on difference between actual numbers and new effective strength
					var mobCasualties = population.esoldiers - population.esoldiersCas,
						mobCasFloor = Math.floor(mobCasualties),
						casualties = population.soldiersParty - population.soldiersPartyCas,
						casFloor = Math.floor(casualties);
					if (!(mobCasFloor > 0)) mobCasFloor = 0; //weirdness with floating point numbers. not sure why this is necessary
					if (!(casFloor > 0)) casFloor = 0;
					//Increments enemies slain, corpses, and piety
					population.enemiesSlain += mobCasFloor;
					if (upgrades.throne) throneCount += mobCasFloor;
					population.corpses += (casFloor + mobCasFloor);
					updatePopulation();
					if (upgrades.book) {
						piety.total += (casFloor + mobCasFloor) * 10;
						updateResourceTotals();
					};
					//Resets the actual numbers based on effective strength
					population.esoldiers = Math.ceil(population.esoldiersCas);
					population.soldiersParty = Math.ceil(population.soldiersPartyCas);
				}
				//Handles siege engines
				if (population.siege > 0 && population.eforts > 0){ //need to be siege weapons and something to fire at
					var firing = Math.ceil(Math.min(population.siege/2,population.eforts*2));
					if (firing > population.siege) firing = population.siege; //should never happen
					for (var i = 0; i < firing; i++){
						if (population.eforts > 0){ //still needs to be something to fire at
							var hit = Math.random();
							if (hit < 0.1){ //each siege engine has 10% to hit
								population.eforts -= 1;
							} else if (hit > 0.95){ //each siege engine has 5% to misfire and destroy itself
								population.siege -= 1;
							}
						}
					}
				}

				/* END FIGHT! */

				//checks victory conditions (needed here because of the order of tests)
				if (population.esoldiers <= 0){
					population.esoldiers = 0; //ensure esoldiers is 0
					population.esoldiersCas = 0; //ensure esoldiers is 0
					population.eforts = 0; //ensure eforts is 0
					gameLog('Raid victorious!'); //notify player
					raiding.victory = true; //set victory for future handling
					//conquest achievements
					if (!achievements.raider){
						achievements.raider = 1;
						updateAchievements();
					}
					if (raiding.last == 'empire' && !achievements.domination){
						achievements.domination = 1;
						updateAchievements();
					}
					//lamentation
					if (upgrades.lament){
						attackCounter -= Math.ceil(raiding.iterations/100);
					}
					//ups the targetMax and improves mood (reverse order to prevent it being immediate set to Empire)
					if (raiding.last == 'empire'){
						mood(0.12);
					}
					if (raiding.last == 'largeNation'){
						if (targetMax == 'largeNation') targetMax = 'empire';
						mood(0.11);
					}
					if (raiding.last == 'nation'){
						if (targetMax == 'nation') targetMax = 'largeNation';
						mood(0.10);
					}
					if (raiding.last == 'smallNation'){
						if (targetMax == 'smallNation') targetMax = 'nation';
						mood(0.09);
					}
					if (raiding.last == 'metropolis'){
						if (targetMax == 'metropolis') targetMax = 'smallNation';
						mood(0.08);
					}
					if (raiding.last == 'largeCity'){
						if (targetMax == 'largeCity') targetMax = 'metropolis';
						mood(0.07);
					}
					if (raiding.last == 'smallCity'){
						if (targetMax == 'smallCity') targetMax = 'largeCity';
						mood(0.06);
					}
					if (raiding.last == 'largeTown'){
						if (targetMax == 'largeTown') targetMax = 'smallCity';
						mood(0.05);
					}
					if (raiding.last == 'smallTown'){
						if (targetMax == 'smallTown') targetMax = 'largeTown';
						mood(0.04);
					}
					if (raiding.last == 'village'){
						if (targetMax == 'village') targetMax = 'smallTown';
						mood(0.03);
					}
					if (raiding.last == 'hamlet'){
						if (targetMax == 'hamlet') targetMax = 'village';
						mood(0.02);
					}
					if (raiding.last == 'thorp'){
						if (targetMax == 'thorp') targetMax = 'hamlet';
						mood(0.01);
					}
					updateTargets(); //update the new target
				};
				updateParty(); //display new totals for army soldiers and enemy soldiers
			} else if (raiding.victory){
				//handles the victory outcome
				document.getElementById('victoryGroup').style.display = 'block';
			} else {
				//victory outcome has been handled, end raid
				raiding.raiding = false;
				raiding.iterations = 0;
			}
		} else {
			gameLog('Raid defeated');
			population.esoldiers = 0;
			population.esoldiersCas = 0;
			population.eforts = 0;
			population.siege = 0;
			updateParty();
			raiding.raiding = false;
			raiding.iterations = 0;
		}
	} else {
		//document.getElementById('raidGroup').style.display = 'block'
	}

	if (population.corpses > 0 && population.graves > 0){
		//Clerics will bury corpses if there are graves to fill and corpses lying around
		for (var i=0;i<population.clerics;i++){
			if (population.corpses > 0 && population.graves > 0){
				population.corpses -= 1;
				population.graves -= 1;
			}
		}
		updatePopulation();
	}
	if (population.totalSick > 0 && population.apothecaries + (population.cats * upgrades.companion) > 0){
		//Apothecaries curing sick people
		for (var i=0;i<population.apothecaries + (population.cats * upgrades.companion);i++){
			if (herbs.total > 0){
				//Increment efficiency counter
				cureCounter += (efficiency.apothecaries * efficiency.happiness);
				while (cureCounter >= 1 && herbs.total >= 1){ //OH GOD WHY AM I USING THIS
					//Decrement counter
					//This is doubly important because of the While loop
					cureCounter -= 1;
					//Select a sick worker to cure, with certain priorities
					if (population.apothecariesIll > 0){ //Don't all get sick
						population.apothecariesIll -= 1;
						population.apothecaries += 1;
						herbs.total -= 1;
					} else if (population.farmersIll > 0){ //Don't starve
						population.farmersIll -= 1;
						population.farmers += 1;
						herbs.total -= 1;
					} else if (population.soldiersIll > 0){ //Don't get attacked
						population.soldiersIll -= 1;
						population.soldiers += 1;
						population.soldiersCas += 1;
						herbs.total -= 1;
					} else if (population.cavalryIll > 0){ //Don't get attacked
						population.cavalryIll -= 1;
						population.cavalry += 1;
						population.cavalryCas += 1;
						herbs.total -= 1;
					} else if (population.clericsIll > 0){ //Bury corpses to make this problem go away
						population.clericsIll -= 1;
						population.clerics += 1;
						herbs.total -= 1;
					} else if (population.labourersIll > 0){
						population.labourersIll -= 1;
						population.labourers += 1;
						herbs.total -= 1;
					} else if (population.woodcuttersIll > 0){
						population.woodcuttersIll -= 1;
						population.woodcutters += 1;
						herbs.total -= 1;
					} else if (population.minersIll > 0){
						population.minersIll -= 1;
						population.miners += 1;
						herbs.total -= 1;
					} else if (population.tannersIll > 0){
						population.tannersIll -= 1;
						population.tanners += 1;
						herbs.total -= 1;
					} else if (population.blacksmithsIll > 0){
						population.blacksmithsIll -= 1;
						population.blacksmiths += 1;
						herbs.total -= 1;
					} else if (population.unemployedIll > 0){
						population.unemployedIll -= 1;
						population.unemployed += 1;
						herbs.total -= 1;
					}
				}
			}
		}
		updatePopulation();
	}
	if (population.corpses > 0){
		//Corpses lying around will occasionally make people sick.
		var sickChance = Math.random() * (50 + (upgrades.feast * 50));
		if (sickChance < 1){
			var sickNum = Math.floor(population.current/100 * Math.random());
			if (sickNum > 0) plague(sickNum);
		}
	}

	if (throneCount >= 100){
		//If sufficient enemies have been slain, build new temples for free
		temple.total += Math.floor(throneCount/100);
		throneCount = 0;
		updateBuildingTotals();
	}

	if (graceCost > 1000) {
		graceCost -= 1;
		graceCost = Math.floor(graceCost);
		document.getElementById('graceCost').innerHTML = prettify(graceCost);
	}

	if (walkTotal > 0){
		if (population.healthy > 0){
			for (var i=0;i<walkTotal;i++){
				var target = randomWorker();
				if (target == "unemployed"){
					population.current -= 1;
					population.unemployed -= 1;
				} else if (target == "farmer"){
					population.current -= 1;
					population.farmers -= 1;
				} else if (target == "woodcutter"){
					population.current -= 1;
					population.woodcutters -= 1;
				} else if (target == "miner"){
					population.current -= 1;
					population.miners -= 1;
				} else if (target == "tanner"){
					population.current -= 1;
					population.tanners -= 1;
				} else if (target == "blacksmith"){
					population.current -= 1;
					population.blacksmiths -= 1;
				} else if (target == "apothecary"){
					population.current -= 1;
					population.apothecaries -= 1;
				} else if (target == "cleric"){
					population.current -= 1;
					population.clerics -= 1;
				} else if (target == "labourer"){
					population.current -= 1;
					population.labourers -= 1;
				} else if (target == "soldier"){
					population.current -= 1;
					population.soldiers -= 1;
					population.soldiersCas -= 1;
					if (population.soldiersCas < 0){
						population.soldiers = 0;
						population.soldiersCas = 0;
					}
				} else if (target == "cavalry"){
					population.current -= 1;
					population.cavalry -= 1;
					population.cavalryCas -= 1;
					if (population.cavalryCas < 0){
						population.cavalry = 0;
						population.cavalryCas = 0;
					}
				}
			}
			updatePopulation();
		} else {
			walkTotal = 0;
			document.getElementById('ceaseWalk').disabled = true;
		}
	}
/*
	if (wonder.building){
		if (wonder.progress >= 100){
			//Wonder is finished! First, send workers home
			population.unemployed += population.labourers;
			population.unemployedIll += population.labourersIll;
			population.labourers = 0;
			population.labourersIll = 0;
			updatePopulation();
			//hide limited notice
			document.getElementById('lowResources').style.display = 'none';
			//then set wonder.completed so things will be updated appropriately
			wonder.completed = true;
			//check to see if neverclick was achieved
			if (!achievements.neverclick && resourceClicks <= 22){
				achievements.neverclick = 1;
				gameLog('Achievement Unlocked: Neverclick!');
				updateAchievements();
			}
		} else {
			//we're still building
			//first, check for labourers
			if (population.labourers > 0){
				//then check we have enough resources
				if (food.total >= population.labourers && stone.total >= population.labourers && wood.total >= population.labourers && skins.total >= population.labourers && herbs.total >= population.labourers && ore.total >= population.labourers && metal.total >= population.labourers && leather.total >= population.labourers && piety.total >= population.labourers){
					//remove resources
					food.total -= population.labourers;
					wood.total -= population.labourers;
					stone.total -= population.labourers;
					skins.total -= population.labourers;
					herbs.total -= population.labourers;
					ore.total -= population.labourers;
					leather.total -= population.labourers;
					metal.total -= population.labourers;
					piety.total -= population.labourers;
					//increase progress
					wonder.progress += population.labourers / (1000000 * Math.pow(1.5,wonder.total));
					//hide limited notice
					document.getElementById('lowResources').style.display = 'none';
				} else if (food.total >= 1 && stone.total >= 1 && wood.total >= 1 && skins.total >= 1 && herbs.total >= 1 && ore.total >= 1 && metal.total >= 1 && leather.total >= 1 && piety.total >= 1){
					//or at least some resources
					var number = Math.min(food.total,wood.total,stone.total,skins.total,herbs.total,ore.total,leather.total,metal.total,piety.total);
					//remove resources
					food.total -= number;
					wood.total -= number;
					stone.total -= number;
					skins.total -= number;
					herbs.total -= number;
					ore.total -= number;
					leather.total -= number;
					metal.total -= number;
					piety.total -= number;
					//increase progress
					wonder.progress += number / (1000000 * Math.pow(1.5,wonder.total));
					//show limited notice
					document.getElementById('lowResources').style.display = 'block';
					updateWonderLimited();
				} else {
					//we don't have enough resources to do any work
					//show limited notice
					document.getElementById('lowResources').style.display = 'block';
					updateWonderLimited();
				}
			} else {
				//we're not working on the wonder, so hide limited notice
				document.getElementById('lowResources').style.display = 'none';
			}
		}
		updateWonder();
	}
*/
	//Trader stuff
/*
	if (trader.timer > 0){
		if (trader.timer > 1){
			trader.timer -= 1;
		} else {
			document.getElementById('tradeContainer').style.display = 'none';
			trader.timer -= 1;
		}
	}
*/
	updateUpgrades();
	updateBuildingButtons();
	updateJobs();
	updatePartyButtons();
	updateSpawnButtons();
	updateReset();

	//Debugging - mark end of main loop and calculate delta in milliseconds
	//var end = new Date().getTime();
	//var time = end - start;
	//console.log('Main loop execution time: ' + time + 'ms');

}, 1000); //updates once per second (1000 milliseconds)

/* UI functions */

function text(scale){
	if (scale > 0){
		size += 0.1 * scale;
		document.getElementById('smallerText').disabled = false;
	} else {
		if (size > 0.7){
			size += 0.1 * scale;
			if (size <= 0.7) document.getElementById('smallerText').disabled = true;
		}
	}
	body.style.fontSize = size + "em";
}

function textShadow(){
	if (body.style.textShadow != "none"){
		body.style.textShadow = "none";
		document.getElementById('textShadow').innerHTML = 'Enable Text Shadow';
	} else {
		body.style.textShadow = "3px 0 0 #fff, -3px 0 0 #fff, 0 3px 0 #fff, 0 -3px 0 #fff, 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff"
		document.getElementById('textShadow').innerHTML = 'Disable Text Shadow';
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
