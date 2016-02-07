angular.module('starter.controllers', [])

.controller('OverviewCtrl', function ($scope) {

        $scope.order = {
            field1: 'startTime',
            reverse1: false,
            field2: 'startTime',
            reverse2: false,
            field3: 'startTime',
            reverse3: false,
            level: 1,

        };
        $scope.field1Order = function (data) {
            order = data[$scope.order.field1];
            return order;
        }

        $scope.activities = [{'user_id': 1,'id': 1,'startTime': '','endTime': '','importance': 'very important','energy': 50,'motive': 'duty'}, {'user_id': 1,'id': 2,'startTime': '','endTime': '','importance': 'very important','energy': 80,'motive': 'pleasure'}, {'user_id': 1,'id': 3,'startTime': '','endTime': '','importance': 'mild important','energy': 20,'motive': 'duty'}, {'user_id': 1,'id': 4,'startTime': '','endTime': '','importance': 'not important','energy': 75,'motive': 'duty'}, {'user_id': 1,'id': 5,'startTime': '','endTime': '','importance': 'very important','energy': 100,'motive': 'pleasure'}, {'user_id': 1,'id': 6,'startTime': '','endTime': '','importance': 'very important','energy': 87,'motive': 'duty'}, {'user_id': 1,'id': 7,'startTime': '','endTime': '','importance': 'very important','energy': 28,'motive': 'pleasure'}, {'user_id': 1,'id': 8,'startTime': '','endTime': '','importance': 'mild important','energy': 17,'motive': 'duty'}, {'user_id': 1,'id': 9,'startTime': '','endTime': '','importance': 'not important','energy': 65,'motive': 'duty'}, {'user_id': 1,'id': 10,'startTime': '','endTime': '','importance': 'very important','energy': 90,'motive': 'pleasure'}];

        $scope.energyOption = "Energy";
        $scope.motiveOption = "Motive";
        $scope.impOption = "Importance";
        //This is for changing the overview when the top part is clicked!
        $scope.changeOrder = function (which, value) {
            console.log("which:" + which);
            switch (which) {
                case 1: //importance...

                    break;
                case 2: //energy
                    $scope.order.field1 = "energy";
                    if (value == 'hi2lo')
                        $scope.order.reverse1 = true;
                    if (value == 'lo2hi')
                        $scope.order.reverse1 = false;
                    break;
                case 3: //motive
                    break;
            }
        }




    }).controller('SettingsCtrl', function ($scope, $state) {

        //this is to forward to moresettings tabs....
        $scope.moreSettings = function (settingsId) {
            $state.go("tab.moreSettings",{'settingsId':settingsId});
        }
    }).controller('MoreSettingsCtrl', function ($scope, $stateParams) {

    $scope.settings = {'activityColor':"#ff0022",
                       'BgColor':"#00ff00",
                       'iconColor':"#0000ff"};
    
    
    $scope.titles = ["Color/Contrast","Text Settings","Voice Input","Tactile Keyboard"];

    $scope.templates = [{name: 'colorSettings.html',url: 'colorSettings.html'},{name: 'textSettings.html',url: 'textSettings.html'},{name: 'voiceSettings.html',url: 'voiceSettings.html'},{name: 'tactileSettings.html',url: 'tactileSettings.html'}];

    $scope.template = $scope.templates[$stateParams.settingsId];
    $scope.viewTitle = $scope.titles[$stateParams.settingsId];

});