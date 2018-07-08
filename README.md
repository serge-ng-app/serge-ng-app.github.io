# launch html files via server : https://serge-ng-app.github.io/app.html
# the framework used - angular v.1.3.7
# 1) main ctrl, main-controller.js - gets model, test data( array JSON) from 				backend via $http.get method, assign it to $scope then, the array will				 provide: test name, questions, answer options, right answer.
# 2) main ctrl - switch the partial views, the actual test question pages
# 3) Directive ng-show and ng-if - binded to a variable existence, shall show/hide greeting-view also keep the guest name data; shall display/remove(ng-if) the tests view so upon re-appear there are no previous test data save in the scope model - the guest may b able to redo the test again. Directive ng-switch - switch the views between the tests A, B, C.
# 4) secondary child Ctrl, check-answer.js - supply logic to test pages: 					questions answer check + score count + next page flip, progress bar					 	percentage advancement.


# Some thoughts: the radio buttons - may be replaced with <button ng-click="getAnswer(answer1)">
#    Ctrl: $scope.answer;
#					$scope.getAnswer = function(answerValue) {
#								return $scope.answer=answerValue;
#						}
#						....
#						if ($scope.answer==$scope.test[ind].right_answer1) {			
#							$scope.score++;
#						}

# Quiz database : https://serge-ng-app.github.io/app-data/tests.json


# another app example: https://serge-resume-web-dev.github.io/
(click the angularJS button)