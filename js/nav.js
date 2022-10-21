var nav = document.querySelector('.nav');
var items = document.querySelectorAll('.item'); //获取所有item按钮


var navbtnName = ['主页', '爱好', '标签', '音乐', '运动'];
var icoStyle = 'nav2';
var ico = [
	'img/ico/' + icoStyle + '/home.png',
	'img/ico/' + icoStyle + '/hobby.png',
	'img/ico/' + icoStyle + '/study.png',
	'img/ico/' + icoStyle + '/music.png',
	'img/ico/' + icoStyle + '/sport.png',
	'img/ico/' + icoStyle + '/movice.png',
	'img/ico/' + icoStyle + '/collect.png'
];
// 获取所有的items  用for循环设置src
var items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; i++) {
	items[i].getElementsByTagName('img').src = ico[i];
}

console.log(items[4]);
items[4].addEventListener('click', function() {
	window.location.href = 'sport.html';
});


items[6].addEventListener('click', function() {
	document.querySelector('.collect-box').style.right = '0';
});
