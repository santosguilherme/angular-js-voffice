app.directive("alert", ["$timeout", function ($timeout) {
        return {
            templateUrl: "alert.html",
            restrict: "AE",
            scope: {
                topic: "@"
            },
            transclude: true,
            link: function (scope, element, attrs) {
                scope.exibir = true;
                scope.topic = "XYZ";
                
                scope.fecharAlert = function () {
                    scope.exibir = false;
                };
            }
        };
      }]);