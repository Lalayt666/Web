(function() {

    var moduleId = "faceCtrl";
    angular.module('FaceApp').controller(moduleId, [faceCtrl]);

    function faceCtrl() {
        var vm = this;
        vm.faces = [];
        activate();

        function activate() {
            vm.faces = [{
            	id:1,
            	fruit:'Apple', 
            	kkal:10,
            	date: new Date(2015, 10, 16)
            },
            {
            	id:2,
            	fruit:'Strawsberry',
            	kkal:20,
            	date: new Date(2015, 10, 16)
            }

            ];
        }
    }

})();
