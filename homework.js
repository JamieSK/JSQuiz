// 1
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
// prints 'My name is Keith'
// because name is global.

// 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// prints 3, because global variable is overidden in function scope.

// 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// prints '0: Ducks\n1: Ducks\n2: Lions'
// looped through myAnimals.

// 4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// prints 'Suspect three is:Keith' because 'Harvey' is assigned to a new local variable

// 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// prints 'Poirot' because the name is changed before it's printed in the global scope

// 6
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// prints 'the murderer is rick' because it's only changed in the scope of outerFunction

// 7 - Make up your own episode/s!
//
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
