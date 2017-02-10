(function() {
  'use strict';
  angular.module ('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject =["$scope"];
  function LunchCheckController($scope) {
    $scope.listOfItem = "";
    $scope.checkItems = function() {
      if ($scope.listOfItem.length >0) {
        var strArray = $scope.listOfItem.split(",");
        if(strArray.length <=3) {
          $scope.result="Enjoy!";
        }
        else {
          $scope.result="Too Much!";
        }
      }
      else{
        $scope.result="Please enter data first";
      }
    }
  };
})();
