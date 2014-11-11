function personController($scope) {
	$scope.firstName = "",
	$scope.lastName = "",
	$scope.fullName = function() {
      return $scope.firstName + " " + $scope.lastName;
	}
}
