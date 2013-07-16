(function() {
	angular.module('regexer', [])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/', { templateUrl: 'form.html', controller: 'RegexerCtrl' })
				.otherwise({ redirectTo: '/' });
		}])
		.controller('RegexerCtrl', ['$scope', function($scope) {
			$scope.txt = 'abc123';
			$scope.pattern = '[a-z][0-9]';

			$scope.validate = function() {
				var ptn = new RegExp($scope.pattern,"i");
				if(ptn.exec($scope.txt)) {
					$scope.txtFound = true;
				} else {
					$scope.txtFound = false;
				}
			};

			$scope.validate();

		}]);
})();