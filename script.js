var app = angular.module("retro-estApp", []); 

app.controller('profilesCtrl', function($scope) {
	$scope.profiles = retroGameCharacters.profiles;
	//create variables to store info
	$scope.newPic = "";
	$scope.newGname = "";
	$scope.newYear = ""; 
	$scope.newConsole = "";
	$scope.newCharName = "";


	// new function that adds items
	$scope.addNewProfile = function() {
		//check promts to see if blank 
			$scope.profiles.push({
				pic: $scope.newPic, 
				gName: $scope.newGname,
				year: $scope.newYear,
				console: $scope.newConsole, 
				charName: $scope.newCharName,
				removed: false
			});	
			//reset the profile variables
				$scope.newPic = "";
				$scope.newGname = "";
				$scope.newYear = "";
				$scope.newConsole = "";	
				$scope.newCharName = "";	
	};
	
	//make function that removes items
	$scope.removeProfile = function () {
		//store all of the collected items to return later
		var deletedProfiles = $scope.profiles;
		//remove all items from the original variable
		$scope.profiles = [];
		//loop through with the forEach operator
		angular.forEach(deletedProfiles, function(profile) {
			if(!profile.removed) {
			//if the profile is not removed already, put it into the original variable
				$scope.profiles.push(profile);
			}
		});
	};

	//create a function that returns the total amount


	$scope.totalProfiles = function() {
	//total number of items
		var remaining = $scope.profiles.length;
		//angualr for each loop 
		angular.forEach($scope.profiles, function(profile){ 
			if (profile.removed) {
				remaining--;
			}
	});
	return remaining
}

});

//////////////////////////////
//Functions for the HTML DRAG AND DROP
/////////////////////////////
  var draggedElement;
		function allowDrop(ev) {
    	ev.preventDefault();
}

	function drag(ev) {
    	//ev.dataTransfer.setData("Text", ev.target.id);
    	draggedElement = ev.target;
}

	function drop(ev) {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("Text");
	    ev.target.appendChild(draggedElement);
}

 //////////////////////////////////
 //Functions for the animation of the piranha plant
 //////////////////////////////////    
$(document).ready(function() {
		var $Delete = $("#delete");
		var $plant = $("#plant");
//create a $pics and $content variable to reduce the amount of times I access the DOM

//when the mouse enters make the object bigger.
    $Delete.mouseenter(function() {
   		$(plant).css('height', '80px').animate({ height: 150 }, 1750);
    }); 
//return to normal size when mouse leaves
    $Delete.mouseleave(function() {
		$(plant).css('height', '150px').animate({ height: 80 }, 1750);
		
	});
});








