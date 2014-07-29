/////////////////////////////////
//Vanila JS
/////////////////////////////////


//////////////////////////////
//Functions for the HTML DRAG AND DROP
/////////////////////////////
    var draggedElement;
		function allowDrop(ev) {
    	ev.preventDefault();
}

	function drag(ev) {
    	draggedElement = ev.target;
}

 //////////////////////////////////
 //Functions for the animation of the piranha plant
 //////////////////////////////////   

	function drop(ev) {
	    ev.preventDefault();
	    $(draggedElement).hide("slow", draggedElement.remove)
	    $(plant).animate({ height: 150 }, 1250);
	    $(plant).animate({ height: 100 }, 1250);
}
/////////////////////////////////////////
//Angular framework
/////////////////////////////////////////


	

var app = angular.module("retro-estApp", ["firebase"]); 
app.controller('profilesCtrl', function($scope, $firebase) {
	//make Firebase usable and store it in a var
	var profileRef =new Firebase("https://retro-est.firebaseio.com/")
    $scope.profiles = $firebase(profileRef);
	

	//create variables to store info
	$scope.newPic = "";
	$scope.newGname = "";
	$scope.newYear = ""; 
	$scope.newConsole = "";
	$scope.newCharName = "";
/////////////////////////////////
// new function that adds items
///////////////////////////////
	$scope.addNewProfile = function() {
		if ($scope.newPic != "") {
			
		
			$scope.profiles.$add({
				pic:$scope.newPic, 
				gName:$scope.newGname, 
				year:$scope.newYear, 
				console:$scope.newConsole, 	
				charName:$scope.newCharName
			});

		}
		else{
			alert("Please add a valid picture!")
		}
			//reset the profile variables
				$scope.newPic = "";
				$scope.newGname = "";
				$scope.newYear = "";
				$scope.newConsole = "";	
				$scope.newCharName = "";	
	};
///////////////////////////////////////
//create a function that returns the total amount
//////////////////////////////////////
	$scope.totalProfiles = function() {
		var remaining = $scope.profiles.length;
	return remaining
}
});
////////////////////////////////
//Jquery framework
///////////////////////////////
$(document).ready(function() {
     

////////////////////////////////////////
//Function to get the New character form to drop down
////////////////////////////////////////
	$("#button").click(function() {
		$(".new").toggle("slow");
	});

	$("#submit").click(function() {
		$(".new").hide("slow")
	});

});







































