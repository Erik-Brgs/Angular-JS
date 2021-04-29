angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/info",{
		templateUrl:"templates/info.html",
		controller:"infoController"
	});

	$routeProvider.otherwise({redirectTo:"/home"});

})