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
	'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
		.state('settings', {
				url:'/settings',
				views: {
					'contentView@' : {
						templateUrl:'views/settings.tpl.html',
					},
				},
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
  });
