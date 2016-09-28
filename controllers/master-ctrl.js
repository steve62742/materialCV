/**
 * Master Controller
 */

angular.module('MyCV')
    .controller('MasterCtrl', ['$scope' , '$state'   ,MasterCtrl]);

function MasterCtrl($scope , $state) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;
    $scope.mobileView = 992;

    $scope.labels = ['JAVA', 'PHP', 'NodeJS', 'Javascript', 'HTML', 'CSS', 'Android Development', 'Ruby'];
    $scope.series = ['Series A'];

    $scope.data =
      [70, 50, 65, 80, 80, 70, 60, 50]
    ;

    $scope.programmingLabels = ['JAVA', 'PHP', 'NodeJS', 'Javascript', 'HTML', 'CSS', 'Android Development', 'Ruby'];
    $scope.programmingSeries = ['Series A'];

    $scope.programmingData =
      [70, 50, 65, 80, 80, 70, 60, 50]
    ;

    $scope.stackData = [40,40,20];
    $scope.stackLabels = ["Front-End Development" , "Back-End Development" , "Database Design"]


    $scope.frameworkData = [60,50,60,60,70,40];
    $scope.frameworkLabels = ["AngularJS" , "ExpressJS" , "DHTMLX" , "Ionic" , "Twitter Bootstrap" , "Rails"]

    $scope.otherSkills =["MySQL","SQLite","PostgreSQL","MongoDB",
    "Apache Web Server", "JBoss" , "Linux" ,"Windows", "Mac OS",
    "SublimeText" , "Joomla" , "Android Studio", "Eclipse", "Git"];

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.colorClass = function() {
        if ($scope.clickedState == 0){
            return 'mdc-bg-blue-800'
        }else if ($scope.clickedState == 1){
            return 'mdc-bg-teal-800'
        }else if ($scope.clickedState == 2){
            return 'mdc-bg-deep-purple-400'
        }else if ($scope.clickedState == 3){
            return 'mdc-bg-pink-500'
        }else if ($scope.clickedState == 4){
            return 'mdc-bg-orange-600'
        }else if ($scope.clickedState == 5){
            return 'mdc-bg-red-500'
        }
    };

    $scope.clickedState = 0;

    $scope.changeState = function(a){
        $scope.clickedState = a;
        $scope.apply;
    }



    $scope.test = function(){
        return "tasdasd";
    }


    window.onresize = function() {
        $scope.$apply();
    };
}


// angular.module('MyCV').animation('.slide', [function() {
//   return {
//     enter: function(element, done) {
//       element.css('display', 'none');
//       $(element).fadeIn(1000, function() {
//         done();
//       });
//     },
//     leave: function(element, done) {
//       $(element).fadeOut(1000, function() {
//         done();
//       });
//     },
//     move: function(element, done) {
//       element.css('display', 'none');
//       $(element).slideDown(500, function() {
//         done();
//       });
//     }
//   }
// }]);