'use strict'
angular
	.module('testZadApp')
		.directive('ngChbox', function(){
			return {
				restrict: 'AE',
				template:   '<div class="inp-wrap">'  
							+ '<label for={{chId}} class="text">{{chLabel}}</label>'
							+ '<input type="checkbox" class="checkbox" id={{chId}} ng-click="usClick()" ng-model="ngModel" ngTrueValue="true" ngFalseValue="false"></input>'
							+ '<label for={{chId}}></label>'
							+ '</div>',
				scope: {
					ngModel: '=',
					chLabel: '@',
					chId: '@',
					usClick: '&'
				}
			}
		});