for (var count = 0; count <= 100; count++) {
  console.log("YE I CAN COUNT TO " + count)
}

for (var animalCount = 0; animalCount <= 5 ; animalCount++) {
  console.log("There are " + animalCount + " animals in Noah's Arc")
}


var partyAnimals = ["Elefante", "Doge", "Wolfe", "Kiwi", "Geeraffe"]
var adj = ["cool", "awesome", "purple", "green", "long nek"]


for (var i = 0; i < partyAnimals.length; i++) {
  for (var a = 0; a < 1; a++){
    console.log(adj[i] + " " + partyAnimals[i] + " is in da house!")
  }
}


var weaponChest = ["Mace", "Sorceror's Stone", "Excalibur"];
var hero = {
  wizard : "Merlin",
  weapon : weaponChest[0],
  power : 30
};

function Battle(weapon) {
  if (weapon == weaponChest[1]) {
    console.log(hero.wizard + " shall slay the dragon with the " + weapon);
  } else {
    weapon = weaponChest[1];
    console.log(hero.wizard + " is ready for war with the " + weapon);
  }
}

Battle(hero.weapon);
