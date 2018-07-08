# launch html files via server : http://localhost/Questions test app/app.html
# the framework used - angular v.1.3.7
# the radio buttons - may be replaced with <button ng-click="getAnswer(answer1)">
#    Ctrl: $scope.answer;
					$scope.getAnswer = function(answerValue) {
								return $scope.answer=answerValue;
						}
						....
						if ($scope.answer==$scope.test[ind].right_answer1) {			
							$scope.score++;
						}

Quiz database : https://serge-ng-app.github.io/app-data/tests.json