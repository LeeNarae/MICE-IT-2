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
			console.log("�����ϼ���!");
		}
		else {
			console.log("��ȭ�� �̴ϴ�!");
		}
	};
	
	
	
	smartPhone.prototype.setType = function(t){
		type=t;
	}
	
	smartPhone.prototype.type = function(){
		
		if(type === "") {
			console.log("������ �ް�, ������ �Ķ���, 6.3��ġ");
		}
		else {
			console.log("������, ������ �Ͼ��");
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
