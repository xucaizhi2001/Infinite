var now = 0;
var searchIco = document.querySelector('#search-ico');
var searchText = document.querySelector('#search-text');



var control = false;
var timer;

searchIco.addEventListener('mouseover', function(e) {
	searchText.style.visibility = 'visible';
	searchText.style.opacity = '1';
	// console.log('over');
	searchText.focus();
});

searchIco.addEventListener('click', function(e) {
	searchText.style.visibility = 'visible';
	searchText.style.opacity = '1';
	searchText.focus();
	// console.log('click');
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
		// console.log('out');
		// clearTimeout(timer);
	}, 2000);
})

// 滚动时调用
window.onscroll = function(e) {
	//获取scrollTop
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var status = document.querySelector('.status');
	var collectbox = document.querySelector('.collect-box');




	// 新增加启动页后
	if (scrollTop > 0 && now == 0) {
		let target = document.querySelector('#target-home').scrollIntoView({
			behavior: "smooth", // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
		});
		// window.location.href = '#home';
		//跳转过后将status 顶部栏的背景色还原
		status.style.backgroundColor = 'rgba(255, 255, 255, 1)';
		control = false;
		now = scrollTop;
	}

	//滚动条小于启动页图片的高度时，设置其他的组件的属性
	if (scrollTop + 10 < document.querySelector('#start-page').offsetHeight) {
		// scrollTop += 10;   顶部栏透明
		status.style.backgroundColor = 'rgba(255, 255, 255, 0)';
		// nav 导航栏隐藏
		document.querySelector('.nav').style.left = '-150px';
		// collect 收藏夹收起
		document.querySelector('.collect-box').style.right = '-15vw';
		document.querySelector('.collect-box').style.visibility = 'hidden';
		document.querySelector('#collect-spread-btn').style.visibility = 'hidden';
		// status 的right 隐藏
		document.querySelector('.status-right').style.visibility = 'hidden';
		suitContent(false);

	} else {
		status.style.backgroundColor = 'rgba(255, 255, 255, 1)';
		document.querySelector('.nav').style.left = '10px';
		document.querySelector('.status-right').style.visibility = 'visible';
		document.querySelector('.collect-box').style.visibility = 'visible';
		document.querySelector('#collect-spread-btn').style.visibility = 'visible';

	}
	// console.log('parent' + document.querySelector('#start-page').offsetHeight);
	if (now > scrollTop) {
		status.style.height = '100px';
		collectbox.style.height = 'calc(100vh - 100px)';
		collectbox.style.top = '100px';

	} else if (now < scrollTop) { //收起
		status.style.height = '50px';
		collectbox.style.height = 'calc(100vh - 50px)';
		collectbox.style.top = '50px';

	}

	now = scrollTop;
}


//设置content的宽度
function suitContent(bool) {
	if (bool) {
		document.querySelector('.content-box').style.width = '80vw';
	} else {
		document.querySelector('.content-box').style.width = '90vw';
	}
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
