'use strict'
angular
	.module('testZadApp')
		.directive('ngChbox', function(){
			return {
				restrict: 'AE',
				template:   '<div class="inp-wrap">'  
							+ '<label for="ch1" class="text">Launch on PC start</label>'
							+ '<input type="checkbox" class="checkbox" id="ch1" ng-click="vm.modelReset()" ng-model="vm.l_st" ngTrueValue="true" ngFalseValue="false"></input>'
							+ '<label for="ch1"></label>'
							+ '</div>'
			}
		})