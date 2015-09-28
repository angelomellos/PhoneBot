var app = angular.module('PhoneBot', []);

app.controller('MainCtrl', function($scope){
  $scope.job = {};
  $scope.test = true;
  $scope.saveJob = function() {
    console.log('save job run');
    var file = document.querySelector('input[type=file]').files[0];
    var loadedFile = '';
    var reader = new FileReader();
    reader.onloadend = function () {
      loadedFile = reader.result;
      splitCSV(atob(loadedFile.split(',')[1]));
    }
    reader.readAsDataURL(file);
  }

  function splitCSV(csv) {
    var lines = csv.split(/\r\n|\n/);
    lines = lines.map(function (line) {return line.split(',')});
    console.log(lines);
  }

});
