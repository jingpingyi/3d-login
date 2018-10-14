function $(selector) {
	return document.querySelector(selector);
}
function $$(selector) {
	return document.querySelectorAll(selector);
}
$('.flip-modal').addEventListener('click', function(e){
	if(e.target.classList.contains('login')){
		$('.flip-modal').classList.remove('register')
		$('.flip-modal').classList.add('login')
	}
	if(e.target.classList.contains('register')){
		$('.flip-modal').classList.add('register')
		$('.flip-modal').classList.remove('login')
	}
})
$('header .login').onclick = function(){
	$('.flip-modal').style.display = 'block';
}