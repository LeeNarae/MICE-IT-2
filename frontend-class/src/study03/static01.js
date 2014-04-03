
	//정적(Static) 클래스

	// Hello world 출력

	var helloStatic = {
			hello: function() {
				console.log("Hello world");
			}
	}
	
	helloStatic.hello();



	// 1부터 100까지 출력	

	var guguStatic = {
		gugu: function () {
			for(var i=1; i<100; i++) {
			console.log(i);
			}
		}
	};
	
	guguStatic.gugu();


	
	
	// 1부터 100까지 짝수 출력	
	var evenStatic = {
		even: function() {
			for(var i=1; i<100; i++) {
				if(i%2==0) {
					console.log(i);
				}
			}
		};

	evenStatic.even();


	//1*1, 2*2 .. 등 계산작업
	var calStatic = {
			cal: function() {

				for(var i=1; i<100; i++) {
			var sum = i*i
			console.log(i+" * "+i+" = "+sum);
			document.write(i+" * "+i+" = "+sum);
			}
		}
	};
		calStatic.cal();


   // prompt()를 이용하여 숫자를 입력받아 그 숫자의 합을 구함
	
	var promptStatic = {
			prom: function() {
		
	var num1 = 0;
	var sum = 0;
	
	while(true) {
		num1 = prompt("숫자를 입력하세요", "");	

		if(num1!=null)
		sum+=parseInt(num1);
		
		if(num1==null)
		break;
	}
		
		document.write(num1);
		alert("합 : "+sum);

			}
	};
	
	promStatic.prom();