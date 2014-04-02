(function(){

	var number = '';
	var type = '';

	function smartPhone( options ){

		if(!options){
			options = {
				color : "blue", 
				price : "10000",
				model : "Galaxy mega",
				inch : "6.3"
			};
		}
		
		this.color = options.color;
		this.price = options.price;
		this.model = options.model;
		this.inch = options.inch;
	}
	
	smartPhone.prototype.call = function(){

		if(number === " "){
			console.log("개통하세요!");
		}
		else {
			console.log("전화를 겁니다!");
		}
	};
	
	
	
	smartPhone.prototype.setType = function(t){
		type=t;
	}
	
	smartPhone.prototype.type = function(){
		
		if(type === "") {
			console.log("갤럭시 메가, 색상은 파란색, 6.3인치");
		}
		else {
			console.log("아이폰, 색상은 하얀색");
		}
	};
	
	
	
	smartPhone.prototype.send = function(message){
		console.log(message);
	};
	
	smartPhone.prototype.setNumber = function(userNumber){
		number = userNumber;
	};
	
	window.smartPhone = smartPhone;

})();
