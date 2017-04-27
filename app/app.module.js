(function(){
    angular.module('todo',['ui.router']).config(routesConfiguration);

	routesConfiguration.$inject=['$urlRouterProvider','$stateProvider','$locationProvider']

	function routesConfiguration($urlRouterProvider,$stateProvider,$locationProvider){
		$urlRouterProvider.otherwise('/list');
		$stateProvider
			.state('list',{
				url:'/list',
				templateUrl: 'app/list.html',
			    controller: 'ListController',
				controllerAs: 'list'
			})
	}
})();