window.onload = function() {
	var imgs = [
		'img/wrapper/1080P/0001.jpg',
		'img/wrapper/1080P/0002.jpg',
		'img/wrapper/1080P/0003.jpg',
		'img/wrapper/1080P/0004.jpg',
		'img/wrapper/1080P/0005.jpg',
		'img/wrapper/1080P/0006.jpg',
		'img/wrapper/1080P/0007.jpg',
		'img/wrapper/1080P/0008.jpg'
	];
	var prevbtn = document.getElementById('prev-btn');
	var nextbtn = document.getElementById('next-btn');
	var prev = document.getElementById('prev-img');
	var curr = document.getElementById('curr-img');
	var next = document.getElementById('next-img');

	var dotbox = document.querySelector('#dot-box');
	createDot();
	var dots = dotbox.children;

	//console.log(dots);

	var imgBox = [prev, curr, next];
	var imgSize = [1000, 500];
	var timer; //定时器
	var index = 1; //图片的索引
	var len = imgs.length;
	timer = setInterval(leftMove, 3000);

	// createDot(imgs.length);

	nextbtn.onclick = function() {
		leftMove();
		clearInterval(timer);
		timer = setInterval(leftMove, 3000);
	}

	prevbtn.onclick = function() {
		rightMove();
		clearInterval(timer);
		timer = setInterval(leftMove, 3000);
	}
	//向左移动图片/下一张
	function leftMove() {
		setIndex('1', '2', '3');
		imgBox[1].style.left = '0px';
		imgBox[2].style.left = imgSize[0] + 'px';
		leftChange(imgBox[1]);
	}

	function leftChange() {
		imgBox[2] = imgBox.shift();
		changeImg(1);
		setLeft(imgBox[2], imgSize[0] * 2);
		//console.log(imgBox);
	}


	//向右移动图片/上一张
	function rightMove() {
		setIndex('3', '2', '1');
		imgBox[0].style.left = imgSize[0] + 'px';
		imgBox[1].style.left = imgSize[0] * 2 + 'px';
		rightChange(imgBox[1]);
	}

	function rightChange(img) {
		imgBox[1] = imgBox[0];
		imgBox[0] = imgBox.pop();
		imgBox[2] = img;

		changeImg(-1);
		setLeft(imgBox[0], 0);
		//console.log(imgBox);
	}

	//核心置换图片的方法
	function changeImg(i) {
		index = (index + len + i) % (len);
		if (index == 0) {
			setimgs(len - 1, index, index + 1);
			setDotStyle(len - 1, index, index + 1);
		} else if (index == len - 1) {
			setimgs(index - 1, index, 0);
			setDotStyle(index - 1, index, 0);
		} else {
			setimgs(index - 1, index, index + 1);
			setDotStyle(index - 1, index, index + 1);

		}
	}
	// 封装设置img图片src的方法
	function setimgs(a, b, c) {
		//console.log(a + ' ' + b + ' ' + c);
		setImg(imgBox[0], imgs[a]);
		setImg(imgBox[1], imgs[b]);
		setImg(imgBox[2], imgs[c]);
	}

	function setImg(img, src) {
		img.src = src;
	}

	//设置被挤掉的img的left值
	function setLeft(img, value) {
		img.style.transition = 'left 0s';
		img.style.left = value + 'px';
		img.style.transition = 'left .5s';
	}

	function setIndex(a, b, c) {
		imgBox[0].style.zIndex = a;
		imgBox[1].style.zIndex = b;
		imgBox[2].style.zIndex = c;

	}

	function setDotStyle(a, b, c) {
		reStyle(a);
		dots[b].style.opacity = '1';
		dots[b].style.bacgrounColor = 'red';
		reStyle(c);
	}

	function reStyle(a) {
		dots[a].style.opacity = '0.5';
		dots[a].style.bacgrounColor = 'white';
	}

	function createDot(n) {
		n = 9;
		for (let i = 0; i < n; i++) {
			let dot = document.createElement('div');
			dot.setAttribute('href', '#');
			dotbox.appendChild(dot);
		}
	}

}
