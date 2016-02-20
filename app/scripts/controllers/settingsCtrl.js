'use strict'
angular
	.module('testZadApp')
		.controller('settingsCtrl', function(setServ, curentSet) {
			var vm = this;
			//----------инициализациия модели из localStorage-----------
			vm.initModel = function() {
				vm.l_tr = curentSet.l_tr || false;
				vm.l_st = curentSet.l_st || false;
				vm.stateSave = (curentSet.l_tr || curentSet.l_st) ? true : false;;
				vm.btnSavCapt = (curentSet.l_tr || curentSet.l_st) ? 'S A V E D' : 'S A V E';
			};
			
			vm.initModel();
			
			//-----обнуление localStorage при повторном клике в чекбокс--------
			vm.modelReset = function() {
				setServ.stateReset();
				vm.btnSavCapt = 'S A V E';
				vm.stateSave = false;
				
			}
			//-----стилизация кнопок--------
			vm.isSelect = function() {
				return vm.l_tr || vm.l_st; 
			}
			
			vm.isStateSave = function() {
				return false || vm.stateSave;
			}
			//-----действия кнопок--------
			vm.cancel = function() {
				vm.modelReset();
				vm.l_tr = false;
				vm.l_st = false;
				
			}
			
			vm.save = function() {
				vm.stateSave = true;
				vm.btnSavCapt = 'S A V E D';
				setServ.stateSave(vm);
			}
		});