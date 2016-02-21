'use strict';

/**
 * @ngdoc overview
 * @name testZadApp
 * @description
 * # testZadApp
 *
 * Main module of the application.
 */
angular
  .module('testZadApp', [
    'ngAnimate',
    'ngTouch',
	'ui.router',
	'ngStorage'
  ])
  .config(function ($stateProvider) {
    $stateProvider
		.state('settings', {
				url:'/settings',
				views: {
					'contentView@' : {
						templateUrl: 'views/settings.tpl.html',
						controller: 'settingsCtrl',
						controllerAs: 'vm'
						
					},
				},
				resolve: {
					curentSet: function(setServ) {
						return setServ.getState().then(function(res){
							return res;
						});
					}
				}
			})
			.state('acc', {
				url:'/acc',
				views: {
					'contentView@' : {
						templateUrl: 'views/dummy.tpl.html',
					}
				}
			})
			.state('prof', {
				url:'/prof',
				views: {
					'contentView@' : {
						templateUrl: 'views/dummy.tpl.html',
					}
				}
			})
			.state('logout', {
				url:'/logout',
				views: {
					'contentView@' : {
						templateUrl: 'views/dummy.tpl.html',
					}
				}
			})
  })
  .config(function($urlRouterProvider){
	  $urlRouterProvider.when('', '/settings');
  });
