
	//����(Static) Ŭ����

	// Hello world ���

	var helloStatic = {
			hello: function() {
				console.log("Hello world");
			}
	}
	
	helloStatic.hello();



	// 1���� 100���� ���	

	var guguStatic = {
		gugu: function () {
			for(var i=1; i<100; i++) {
			console.log(i);
			}
		}
	};
	
	guguStatic.gugu();


	
	
	// 1���� 100���� ¦�� ���	
	var evenStatic = {
		even: function() {
			for(var i=1; i<100; i++) {
				if(i%2==0) {
					console.log(i);
				}
			}
		};

	evenStatic.even();


	//1*1, 2*2 .. �� ����۾�
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


   // prompt()�� �̿��Ͽ� ���ڸ� �Է¹޾� �� ������ ���� ����
	
	var promptStatic = {
			prom: function() {
		
	var num1 = 0;
	var sum = 0;
	
	while(true) {
		num1 = prompt("���ڸ� �Է��ϼ���", "");	

		if(num1!=null)
		sum+=parseInt(num1);
		
		if(num1==null)
		break;
	}
		
		document.write(num1);
		alert("�� : "+sum);

			}
	};
	
	promStatic.prom();