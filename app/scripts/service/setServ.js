'use strict'
angular
	.module('testZadApp')
		.service('setServ', function($localStorage, $q) {
			this.stateSave = function(vm) {
				$localStorage.l_tr = vm.l_tr;
				$localStorage.l_st = vm.l_st;
			};
			
			this.getState = function() {
				var def = $q.defer();
				var curVm = {};
				curVm.l_tr = $localStorage.l_tr;
				curVm.l_st = $localStorage.l_st;
				def.resolve(curVm);
					def.reject('Что-то не так');
				return def.promise;
			};
			
			this.stateReset = function() {
				$localStorage.$reset();
				console.log($localStorage.l_tr);
			}
		});