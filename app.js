(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.listOfTheDishes = "";
  $scope.messageIsItEnoughFood;


  $scope.checkIfTooMuch = function () {
if ($scope.listOfTheDishes) {
    var countDishes = countSplitByComma ($scope.listOfTheDishes);
     if (countDishes <= 3){
       return $scope.messageIsItEnoughFood = "Enjoy!";

    } else {
       return $scope.messageIsItEnoughFood = "Too much!";
    }
} else {
  return $scope.messageIsItEnoughFood = "Please enter data first!";
}
  }




   function countSplitByComma (inputLineOfDishes) {
    var dishArrayAfterSplit = inputLineOfDishes.split(',');
    var numberOfTheDishes = dishArrayAfterSplit.length;
    //console.log (numberOfTheDishes)
    return numberOfTheDishes

};




}
})();
