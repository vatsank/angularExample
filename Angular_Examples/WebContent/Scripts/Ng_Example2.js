/**
 * 
 */
var inr_to_usd={
		inr:0.0,
		convRate:65.0,
        usd:0.0
};
function conversionController($scope)
{
   $scope.viewModel=inr_to_usd;
   $scope.convert=function(){
	   
	   $scope.viewModel.usd=
		      $scope.viewModel.inr*$scope.viewModel.convRate;
   };
}
var app=angular.module("currencyConverter",[]);

app.controller("ConverterController",conversionController);

