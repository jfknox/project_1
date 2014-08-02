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
				charName:$scope.newCharName,
				removed: false
			});
			//reset the profile variables
		$scope.newPic = "";
		$scope.newGname = "";
		$scope.newYear = "";
		$scope.newConsole = "";	
		$scope.newCharName = "";	

		$('#myModal').modal('hide')
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

	$scope.droplike = function(profile) {
		isdeleted = false
	    	if (profile.removed == true) {
	    		$(bowser).css("bottom", 1000).animate({ bottom: 0 }, 2250);
	    		// $(bowser).animate({ bottom: 50 }, 1250);
	    	}
	    	else {
	    		$(mario).animate({ bottom: 200 }, 1250);
	    		$(mario).animate({ bottom: 50 }, 1250);
	    	}
}

	$scope.imageDrop = function(profile) {
		var itemRef = new Firebase("https://retro-est.firebaseio.com/" + profile.$id);
		var toggleLike = $firebase(itemRef);
		if (isdeleted) {			
			itemRef.remove();
		}
			//toggles the removed boolean value
		else{
			toggleLike.$update({removed: !profile.removed})
		}
}




//////////////////////////////////////
//function that displays the modal of favorites
/////////////////////////////////////




///////////////////////////////////
//function to make picture modal
///////////////////////////////////

$scope.setModalPicture = function(picture) {
			$scope.modalPicture = picture;

	}

//////////////////////////////////////
///MODAL PICTURE FUNCTION
/////////////////////////////////////

$scope.setModalPicture = function(picture) {
	$scope.modalPicture = picture;
}


 


});
