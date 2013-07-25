// Refactor your code with underscore
// xx Prompt the user
// xx Please choose a startLine
// xx Please choose a startStation
// xx Please choose an endLine
// xx Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
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
    for (var i = 0; i< trains.length; i++) {
        trainNames += trains[i].name + "\n";
    }
    return trainNames.trim();
}

//sets users choice as an index number
var trainMsg = "Which train would you like to get on?\n" + displayLines();
firstTrain = parseFloat(prompt(trainMsg));

//function to display stops for the first line
function displayStops() {
    var trainStops = "";
    for (var i = 0; i < trains[firstTrain].stations.length; i++ ){
        trainStops += trains[firstTrain].stations[i] + "\n";
    }
    return trainStops;
}

//prompt to choose first trains stop
var firstStopMsg = "Which stop would you like to get on?\n";
firstStop = prompt(firstStopMsg + displayStops());    //this returns a station name ex "8th"

//prompt to choose second train line
var trainMsg2 = "Which train would you like to get off?\n" + displayLines();
lastTrain = parseFloat(prompt(trainMsg2));

//displays second prompt with list of stations of the second line they choose
function displaySecondStops() {
    var trainStops = "";
    for (var i = 0; i < trains[lastTrain].stations.length; i++) {
        trainStops += trains[lastTrain].stations[i] + "\n";
    }
    return trainStops;
}

//prompts user to choose their second lines station to get off.
var secondStopMsg = "Which stop would you like to get off?\n";
secondStop = prompt(secondStopMsg + displaySecondStops()); //returns a string station name

//Doesn't work for G train because I hard coded in Union Square
if (firstTrain === lastTrain){
    alert(trains[firstTrain].distance(firstStop,secondStop) + " stops.");
} else {
    var first = Math.abs(trains[firstTrain].distance(firstStop, "Union Square"));
    var second = Math.abs(trains[lastTrain].distance(secondStop, "Union Square"));
    var totalDistance = Math.abs(first + second);

    totalDistance = Math.abs(first + second)
    alert(totalDistance + " stops.")
}