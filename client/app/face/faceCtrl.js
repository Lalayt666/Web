(function() {

    var moduleId = "faceCtrl";
    angular.module('FaceApp').controller(moduleId, [faceCtrl]);

    function faceCtrl() {
        var vm = this;
        vm.items = [];
        vm.calcK = calcK;
        activate();

        function activate() {
            vm.items = [{
                date: new Date(2015, 10, 16),
                comeMeals: [{
                        fruit: 'Strawsberry',
                        kkal: 20,
                        time: '18:00',
                        junkFood:true
                    }, {
                        fruit: 'Apple',
                        kkal: 10,
                        time: '20:00',
                        junkFood:false
                    }
                ]
            }, {
                date: new Date(2016, 11, 20),
                comeMeals: [{
                        fruit: 'Pineapple',
                        kkal: 20,
                        time: '07:00',
                        junkFood:false
                    }, {
                        fruit: 'Fish',
                        kkal: 10,
                        time: '10:00',
                        junkFood:true
                    }
                ]
            }];
        }

        function calcK(item, flag) {
            var sum = 0;
            for (var i = 0, l = item.comeMeals.length; i < l; i += 1) {
                var cm = item.comeMeals[i];
                if (cm.junkFood) {
                    sum += cm.kkal;
                }
            }
            return sum;
        }
    }

})();
