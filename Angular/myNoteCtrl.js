app.controller("myNoteCtrl", function($scope) {
	$scope.message = ""; //blank textarea to start
	$scope.left = function() { return 100 - $scope.message.length; }; //from 100 then subtracts the input message - displaing in length.
	$scope.clear = function() { $scope.message = ""; }; //clear button clears/sets message back to 'blank'
	$scope.save = function() { alert("Note Saved"); }; //after save, alert notification displays
});