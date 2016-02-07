angular.module('starter.controllers', [])

.controller('OverviewCtrl', function($scope) {
    
    $scope.order = {
        field: 'startTime',
        reverse: false
    };
   $scope.dynamicOrder = function(data) {
        order = data[$scope.order.field];
        return order;
    }
   
    $scope.activities = [{'user_id':1,'id':1,'startTime':'','endTime':'','importance':'very important','energy':50,'motive':'duty'},{'user_id':1,'id':2,'startTime':'','endTime':'','importance':'very important','energy':80,'motive':'pleasure'},{'user_id':1,'id':3,'startTime':'','endTime':'','importance':'mild important','energy':20,'motive':'duty'},{'user_id':1,'id':4,'startTime':'','endTime':'','importance':'not important','energy':75,'motive':'duty'},{'user_id':1,'id':5,'startTime':'','endTime':'','importance':'very important','energy':100,'motive':'pleasure'},{'user_id':1,'id':6,'startTime':'','endTime':'','importance':'very important','energy':87,'motive':'duty'},{'user_id':1,'id':7,'startTime':'','endTime':'','importance':'very important','energy':28,'motive':'pleasure'},{'user_id':1,'id':8,'startTime':'','endTime':'','importance':'mild important','energy':17,'motive':'duty'},{'user_id':1,'id':9,'startTime':'','endTime':'','importance':'not important','energy':65,'motive':'duty'},{'user_id':1,'id':10,'startTime':'','endTime':'','importance':'very important','energy':90,'motive':'pleasure'}
                        ];
    
    $scope.energyOption="Energy";
    $scope.motiveOption="Motive";
    $scope.impOption="Importance";
    //This is for changing the overview when the top part is clicked!
    $scope.changeOrder = function(which,value){
        switch(which){
            case 1://importance...
                break;
        }
    }
    

    
    
})
.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
