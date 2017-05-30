var app = angular.module("app", []);

app.controller("ValidarFrm", function($scope, $log){
    $scope.campo = false;
    $scope.campoApp = false;
    $scope.campoGenero = false;
    $scope.campoFecha = false;
    
    
    $scope.verificar = function(){
        if(angular.equals($scope.name, "")){
            $scope.campo = true;
        }else{
            $scope.campo = false;
        }
        
        if(angular.equals($scope.lastname, "")){
            $scope.campoApp = true;
        }else{
            $scope.campoApp = false;
        }
        
        if(angular.equals($scope.genero, "0")){
            $scope.campoGenero = true;
        }else{
            $scope.campoGenero = false;
        }
        
        if(angular.equals($scope.fecha, "")){
            $scope.campoFecha = true;
        }else{
            $scope.campoFecha = false;
        }
        $log.log("Fecha: "+$scope.fecha);
        
        
        if($scope.campo==false && $scope.campoApp==false && $scope.campoGenero==false && $scope.campoFecha==false){
            $log.log("**************************************** ");
            $log.log("nombre: "+$scope.campo);
            $log.log("Apellido: "+$scope.campoApp);
            $log.log("Genero: "+$scope.campoGenero);
            $log.log("Fecha: "+$scope.campoFecha);
            $log.log("ESTADO: "+true);
            return true;
        }else{
            $log.log("**************************************** ");
            $log.log("nombre: "+$scope.campo);
            $log.log("Apellido: "+$scope.campoApp);
            $log.log("Genero: "+$scope.campoGenero);
            $log.log("Fecha: "+$scope.campoFecha);
            $log.log("ESTADO: "+false);
            return false;
        }
        
    }
    
    $scope.redirect = function(){
        var form = document.getElementById("frmAlumno");
        form.submit();
    } 
    
    $scope.validarCampo = function(){
        if($scope.verificar()){
            $scope.redirect();
        }
    }
    
});