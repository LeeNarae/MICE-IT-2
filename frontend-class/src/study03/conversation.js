function Person(name, number) {
	
}
	Person.prototype.sendSMS = function(){
		
	}
	
	Person.prototype.getSMS = function() {
		
	}

function Phone(option) {
	
	var phoneNumber = '';
	
	if(!options){
		options = {
			color : "white", 
			price : "1",
			model : "Galaxy Note",
		};
	}
	
	this.color = options.color;
	this.price = options.price;
	this.model = options.model;
	
	phoneNumber = options.phoneNumber;
	
}
	Phone.prototype.getNumber = function() {
		return phoneNumber;
	}

function IPhone(){
	this.model = "IPhone",
	this.color = "White",
	this.price = "1"
}

function Android(){
	this.model = "Galaxy",
	this.color = "White",
	this.price = "1"
	
}


IPhone.prototype = new Phone(); 
IPhone.prototype.constructor = IPhone;

Android.prototype = new Phone(); 
Android.prototype.constructor = Android;

