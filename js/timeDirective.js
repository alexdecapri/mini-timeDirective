var app = angular.module("miniTimeDir");

app.directive("showTime", function() {
  return {
    restrict: "E",
    template: "<div> The current time is {{ time }}. </div>",
    // scope: {
    //   time: "="
    // },    can put this here but not needed
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
});
