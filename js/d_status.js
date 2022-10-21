var now = 0;
var searchIco = document.querySelector('#search-ico');
var searchText = document.querySelector('#search-text');

var control = false;
var timer;

console.log(searchIco);
console.log(searchText);


searchIco.addEventListener('mouseover', function(e) {
	searchText.style.visibility = 'visible';
	searchText.style.opacity = '1';
	console.log('over');
	searchText.focus();
});

searchIco.addEventListener('click', function(e) {
	searchText.style.visibility = 'visible';
	searchText.style.opacity = '1';
	searchText.focus();
	console.log('click');
});
// searchIco.addEventListener('mouseout', function(e) {
// 	timer = setTimeout(() => {
// 		searchText.style.visibility = 'hidden';
// 		searchText.style.opacity = '0';
// 		console.log('out');
// 		// clearTimeout(timer);
// 	}, 2000);
// });

searchText.addEventListener('focus', function() {
	clearTimeout(timer);
	searchText.style.visibility = 'visible';
	searchText.style.opacity = '1';

})

searchText.addEventListener('focusout', function() {
	timer = setTimeout(() => {
		searchText.style.visibility = 'hidden';
		searchText.style.opacity = '0';
		console.log('out');
		// clearTimeout(timer);
	}, 2000);
})


window.onscroll = function() {
	console.log('');

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var status = document.querySelector('.status');
	var collectbox = document.querySelector('.collect-box');


	if (now > scrollTop) {
		// 向上滚  展开
		// before = now;
		// now = scrollTop;

		status.style.height = '100px';


	} else if (now < scrollTop) {
		//向下滚   收起
		// before = now;
		// now = scrollTop;
		status.style.height = '50px';


		// CreateItem(imgs.length);

	}
	console.log(now + ' ' + scrollTop);
	now = scrollTop;


}

// function run() {
// 	var contentbox = document.querySelector('.content-box');

// 	addEvent(contentbox, 'mousewheel', onMouseWheel);
// 	addEvent(contentbox, 'DOMMouseScroll', onMouseWheel); //火狐

// 	function onMouseWheel(ev) {
// 		console.log(ev.wheelDelta);
// 	}
// }

// IE / Chrome: event.wheelDelta + 上 - 下
// FF: evet.detail + 下 - 上





// 封装一个事件绑定方法
// function addEvent(obj, e, f) {
// 	if (obj.attachEvent) {
// 		obj.attachEvent('on' + e, f); // ie内核
// 	} else {
// 		obj.addEventListener(e, f, false); //谷歌、火狐
// 	}
// }
