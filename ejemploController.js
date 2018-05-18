// Code goes here

angular.module('todoApp', [])
.controller('ejemploController', ['$scope', '$http', 
  function($scope, $http) {


    $scope.desactivated = true;
    $scope.desactivated2 = true;
    
    
    
    
    $scope.consulta = function(x)  {
      $http({
        method: 'GET',
        url: 'http://138.197.73.144/api/app/viewsets/animales/?format=json'
      }).then(function successCallback(response) {
        $scope.response = response.data.items;
        $scope.a = 0;
        console.log($scope.response);
        for (var i = 0; i < $scope.response.length; i++) {
          if (x==$scope.response[i].id) {
            $scope.correo = $scope.response[i].nombre;
            $scope.user = $scope.response[i].descripcion;
            $scope.desactivated = false;
            $scope.desactivated2 = true;
          }else{
            $scope.a = $scope.a+1;

          }
        }
        if ($scope.a == $scope.response.length) {
          alert("No se encontro info para la id");
          $scope.desactivated= true;
          $scope.desactivated2= true;
        }
        return $scope.response.data;
      }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
    }


    $scope.listar = function()  {
      $http({
        method: 'GET',
        url: 'http://138.197.73.144/api/app/viewsets/animales/?format=json'
      }).then(function successCallback(response) {
        $scope.response = response.data.items;
        $scope.desactivated = true;
        $scope.desactivated2 = false;
        return $scope.response.data;
      }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
    }

    $scope.enviarid = function(x) {
      
      $scope.consulta(x);
    };

 
    
    
  }]);
