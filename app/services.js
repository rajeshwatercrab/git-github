angular.module("app.services", [])
.factory("mathServices", function(){
	var calculation = {};
	calculation.add= function(a, b){
		return a + b;
	}
	calculation.sub= function(a, b){
		return a - b;
	}
	calculation.multiply= function(a, b){
		return a * b;
	}
	calculation.divide= function(a, b){
		return a / b;
	}
	return calculation;
});
