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

function displayLines(){
    var trainNames = "";
    _.each(trains, function(train){ trainNames += (train.name) + "\n"});
    return trainNames.trim();
}

function displayFirstStops() {
    var trainStops = "";
    _.each(trains[firstTrain].stations, function(station) { trainStops += station + "\n"});
    return trainStops;
}

function displaySecondStops() {
    var trainStops = "";
    _.each(trains[lastTrain].stations, function(station) {
        trainStops += station + "\n"
    });
    return trainStops;
}

function displayDistanceAndFare() {
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
}

var ridingTheTrain = true;
var journeys = 0;

while (ridingTheTrain){
    var trainMsg = "Which train would you like to get on?\n" + displayLines();
    var firstTrain = parseFloat(prompt(trainMsg));

    var firstStopMsg = "Which stop would you like to get on?\n";
    var firstStop = prompt(firstStopMsg + displayFirstStops());

    var trainMsg2 = "Which train would you like to get off?\n" + displayLines();
    var lastTrain = parseFloat(prompt(trainMsg2));

    var secondStopMsg = "Which stop would you like to get off?\n";
    var secondStop = prompt(secondStopMsg + displaySecondStops());

    displayDistanceAndFare();

    ridingTheTrain = confirm("Do you want to go on another fun subway ride?");
}