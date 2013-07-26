// xx Refactor your code with underscore
// xx Prompt the user
// xx Please choose a startLine
// xx Please choose a startStation
// xx Please choose an endLine
// xx Please choose an endStation
// xx Find the intersection
// xx Display the number of stops
// xx Track the total journeys taken
// xx Calculate total cost of journeys taken at $2.50 per ride.

var lStations = [ "8th ave", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th st" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

function Train(name, stations) {
    this.name = name;
    this.stations = stations;
}

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

Train.prototype.distance = function(board, exit) {
    board = this.stations.indexOf(board);
    exit = this.stations.indexOf(exit);
    return Math.abs(board - exit);
};

trains = [lTrain, nTrain, sixTrain, gTrain];

//Displays Lines on the first user prompt
function displayLines(){
    var trainNames = "";
    _.each(trains, function(train){ trainNames += (train.name) + "\n"});
    return trainNames.trim();
}

//function to display stops for the first line
function displayStops() {
    var trainStops = "";
    _.each(trains[firstTrain].stations, function(station) { trainStops += station + "\n"});
    return trainStops;
}

//displays second prompt with list of stations of the second line they choose
function displaySecondStops() {
    var trainStops = "";
    _.each(trains[lastTrain].stations, function(station) {
        trainStops += station + "\n"
    });
    return trainStops;
}

var ridingTheTrain = true;
var journeys = 0;

while (ridingTheTrain){
    //sets users choice as an index number
    var trainMsg = "Which train would you like to get on?\n" + displayLines();
    firstTrain = parseFloat(prompt(trainMsg));

    //prompt to choose first trains stop
    var firstStopMsg = "Which stop would you like to get on?\n";
    firstStop = prompt(firstStopMsg + displayStops());    //this returns a station name ex "8th"

    //prompt to choose second train line
    var trainMsg2 = "Which train would you like to get off?\n" + displayLines();
    lastTrain = parseFloat(prompt(trainMsg2));

    //prompts user to choose their second lines station to get off.
    var secondStopMsg = "Which stop would you like to get off?\n";
    secondStop = prompt(secondStopMsg + displaySecondStops()); //returns a string station name

    if (firstTrain === lastTrain){
        alert(trains[firstTrain].distance(firstStop,secondStop) + " stops.");
        journeys++;

    } else {
        var intersection = _.intersection(trains[firstTrain].stations,trains[lastTrain].stations);
        var first = Math.abs(trains[firstTrain].distance(firstStop, intersection));
        var second = Math.abs(trains[lastTrain].distance(secondStop, intersection));
        var totalDistance = Math.abs(first + second);
        alert(totalDistance + " stops.");
        journeys++
    }
    alert("You now owe $" + parseFloat(journeys * 2.50));

    var anotherTrain = confirm("Do you want to go on another fun subway ride?");
    if (anotherTrain == false){
        ridingTheTrain = false;
    }
}