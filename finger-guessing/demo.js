// function addEvent( obj, type, fn ) { 
// if ( obj.attachEvent ) { 
// obj['e'+type+fn] = fn; 
// obj[type+fn] = function(){obj['e'+type+fn]( window.event );} 
// obj.attachEvent( 'on'+type, obj[type+fn] ); 
// } else 
// obj.addEventListener( type, fn, false ); 
// } 
// function removeEvent( obj, type, fn ) { 
// if ( obj.detachEvent ) { 
// obj.detachEvent( 'on'+type, obj[type+fn] ); 
// obj[type+fn] = null; 
// } else 
// obj.removeEventListener( type, fn, false ); 
// }


// addEvent(document,'click',function(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('get','demo.php',false);
// 	xhr.send(null);
// 	alert(xhr.responseText);
// });





// function createXHR(){
// 	if(typeof XMLHttpRequest() != 'undefined'){
// 		return new XMLHttpRequest();
// 	}
// 	else if(typeof ActiveXObject() != 'undefined'){
// 		var version = [
// 			'MSXML2.XMLHttp.6.0',
// 			'MSXML2.XMLHttp.3.0',
// 			'MSXML2.XMLHttp'
// 		];
// 		for(var i=0; i<version.length; i++) {
// 			try{
// 				return new ActiveXObject(version[i]);
// 			}
// 			catch(e){
// 				//break
// 			}
// 		}
// 	}
// 	else {
// 		throw new Error("Do not work!");
// 	}
// }



// addEvent(document,'click',function(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function(){
// 	if(xhr.readyState == 4) {
// 		alert(xhr.responseText);
// 	}
// 	}
// 	xhr.open('get','demo.php',true);
// 	xhr.send(null);
// });



// window.onload = function(){
// 	alert(base.$("box").innerHTML);
// 	alert(document.getElementsByName("sex")[0].value);
// 	alert(document.getElementsByTagName("p")[0].innerHTML);
// }




$(function(){
	$(document).ready(function(){
		var user_name=[{name:'a',value:1}];
		var i =0;
		$('.sign-in input[name="submit"]').click(function(){
			var exp = /^([^\.@#\$\/%\*\[\]\{\}\^&\(\)\+=\\''"",;:<>\?]+)$/g;
			var str = $('.sign-in input[name="name"]').val();
			if(exp.test(str) == true){
				// var user_info = {
				// 	name: str,
				// 	score: 0
				// };
				// var json = JSON.stringify(user_info);
				sessionStorage.setItem('name',str);
				user_name[i].name = sessionStorage.getItem('name');
			}else{
				alert("名字格式不正确！");
			}
			// alert(sessionStorage.getItem('name'));
			// sessionStorage.setItem('num',i);
			$(this).parent().hide();
		});

		$('.choose .item').click(function(){
			
			// var item_value = $(this).find("p").html();
			// var item_obj = {
				
			// };
			$('.choose .item').removeClass("active");
			$(this).addClass("active");
		});

		$('.item_submit input').click(function(){
			var choose_item_value = parseInt($('.choose .item.active p').html());
			sessionStorage.setItem(user_name[i].value,choose_item_value);
			if(choose_item_value) {
				if(sessionStorage.getItem("value")){
					if(choose_item_value < sessionStorage.getItem("value")){
						alert(sessionStorage.getItem("value")+"Win");
					}else{
						alert(choose_item_value+":Win");
					}
				}else{
					alert("No sessionStorage");
				}
				// sessionStorage.setItem("value",choose_item_value);
				
			}else{
				alert("不能为空");
			}
			// alert(sessionStorage.getItem(user_name));
		});




		var xhr = new XMLHttpRequest();
		xhr.open('get','demo.php',false);
		xhr.send(null);
		// alert(xhr.responseText);
	});
});
