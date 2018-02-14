// Your jQuery goes here

var userData = {
	name: '',
	email: '',
	html: {likes:[],dislikes:[]},
	css: {likes:[],dislikes:[]},
	js: {likes:[],dislikes:[]},
	strength : {css:'',js:'',html: ''},
	currentQuestion : '#welcome'
};

console.log(localStorage.getItem(userData));
if (localStorage.getItem(userData)) {
	userData=JSON.parse(localStorage.getItem(userData));
	$(userData.currentQuestion).show();
	$('#welcome').hide();
	$('#name').val(userData.name);
	$('#email').val(userData.email);

}
else{
	localStorage.setItem('userData',JSON.stringify(userData))
}

$('#start').click(function(){
	console.log("start");
	$('#welcome').hide();
	$('#q1').show(); 
	userData.currentQuestion = "#q1";
	localStorage.setItem('userData',JSON.stringify(userData));
});


$('#name').change(function(event){
	//console.log(event);
	console.log($('#name').val());
});

$('#q1next').click(function(){
	if($('#name').val() && $('#email').val()){
		userData.name = $('#name').val();
		userData.email = $('#email').val();
		localStorage.setItem('userData',JSON.stringify(userData));
	console.log("q1next");
	$('#q1').hide();
	$('#q2').show(); 
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData',JSON.stringify(userData));

}else{
	alert('Abort Mission');
}

});

$('#q2next').click(function(){
	
	userData.like = $('#likes').value();
	localStorage.setItem('userData',JSON.stringify(userData));
	console.log("q1next");
	$('#q2').hide();
	$('#q3').show(); 
	userData.currentQuestion = "#q3";
	localStorage.setItem('userData',JSON.stringify(userData));

});
