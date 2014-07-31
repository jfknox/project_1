/////////////////////////////////////////
//Angular framework
/////////////////////////////////////////	

var app = angular.module("retro-estApp", ["firebase", "ngDragDrop"])
app.controller('profilesCtrl', function($scope, $firebase) {
	//make Firebase usable and store it in a var
	var profileRef = new Firebase("https://retro-est.firebaseio.com/")
    $scope.profiles = $firebase(profileRef).$asArray();
    

	//create variables to store info
	$scope.newPic = "";
	$scope.newGname = "";
	$scope.newYear = ""; 
	$scope.newConsole = "";
	$scope.newCharName = "";

/////////////////////////////////
//adds all of my API
///////////////////////////////
	$scope.addToFirebase = function() {
		var myArray = retroGameCharacters.profiles;
		for (var i = 0; i < myArray.length; i++) {
			$scope.profiles.$add(myArray[i]);
		}
	};

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
			//reset the profile variables
			$scope.newPic = "";
			$scope.newGname = "";
			$scope.newYear = "";
			$scope.newConsole = "";	
			$scope.newCharName = "";	
	
		}
		else{
			alert("Please add a valid picture!")
		}

	};



 //////////////////////////////////
 //Functions for the animation of the piranha plant and mario and remove function as well as drag and drop
 //////////////////////////////////   

	$scope.dropdelete = function(profile) {
	    isdeleted = true
	    $(plant).animate({ height: 150 }, 1250);
	    $(plant).animate({ height: 100 }, 1250);
}

	$scope.dropheart = function(profile) {
		isdeleted = false
	    $(mario).animate({ bottom: 200 }, 1250);
	    $(mario).animate({ bottom: 50 }, 1250);
}

	$scope.imageDrop = function(profile) {
		if (isdeleted) {
			var itemRef = new Firebase("https://retro-est.firebaseio.com/" + profile.$id);
			itemRef.remove();
		}
		else{
			//favorite page
		}
}


});
