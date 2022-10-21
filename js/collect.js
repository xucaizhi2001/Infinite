var colse = document.querySelector('#collect-close');
var spread = document.querySelector('#collect-spread-btn');


colse.addEventListener('click', function() {
	document.querySelector('.collect-box').style.right = '-15vw';
	//将展开按钮设为不透明
	// spread.style.opacity = '1';
	spread.style.visibility = 'visible';
	suitContent(false);
})

spread.addEventListener('mouseenter', function() {
	document.querySelector('.collect-box').style.right = '0';
	// 将按钮设为透明
	// spread.style.opacity = '0';
	spread.style.visibility = 'hidden';
	suitContent(true);
});


function suitContent(bool) {
	if (bool) {
		document.querySelector('.content-box').style.width = '80vw';
	} else {
		document.querySelector('.content-box').style.width = '90vw';
	}
}
