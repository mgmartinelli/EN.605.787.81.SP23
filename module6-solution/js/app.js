(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.validationMessage = "";

    $scope.checkMenu = function () {
      const input = $scope.menu;

      if (input !== undefined) {
        const inputSplit = input
          .split(",")
          .map((i) => i.trim())
          .filter((s) => !!s);

        if (input === "" || inputSplit.length < 1) {
          $scope.validationMessage = "Please enter data first";
        } else if (inputSplit.length <= 3) {
          $scope.validationMessage = "Enjoy!";
        } else {
          $scope.validationMessage = "Too much!";
        }
      } else {
        $scope.validationMessage = "Please enter data first";
      }
    };
  }
})();
