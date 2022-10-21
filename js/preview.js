'use strick'
var previewbox = document.querySelector('.preview-box');
var loadmore = document.querySelector('.preview-loadmore');
console.log(previewbox);
var isload = false;
var imgs = [
	'./img/preview/001.webp',
	'./img/preview/002.webp',
	'./img/preview/003.webp',
	'./img/preview/004.webp',
	'./img/preview/005.webp',
	'./img/preview/006.webp',
	'./img/preview/007.webp'
];
var contents = [{
		'title': '时隔十年的壁花少年',
		'abs': '为什么我和我爱的人，都选择了不在乎我们的人？'
	},
	{
		'title': '卓别林式的艺术',
		'abs': '肥裤子、破礼帽、小胡子、大头鞋，再加上一根从来都不舍得离手的拐杖，卓别林用他的表情和动作将美国默片带到最高峰'
	},
	{
		'title': '还要多远才能进入你的心《水星记》',
		'abs': '水星是离太阳最近的一颗行星，但它无法脱离自己的轨道，也无法再接近太阳。'
	},
	{
		'title': '哪里都是你',
		'abs': '把你藏在心底，每天每夜想你。'
	},
	{
		'title': '充满了可耻的一生《人间失格》',
		'abs': '我多想拥抱你，可惜时光之里山南水北，可惜你我之间人来人往。,' +
			'有的事情，一辈子坚持那么一次，就已足够，比如我爱你。所谓世间，不就是你吗？'
	},
	{
		'title': '即使触碰不到那座奖杯——李宗伟',
		'abs': '羽联排名占据了825天的世界第一，连续三届奥运会银牌，世界羽毛球四大天王，无冕之王当之无愧。'
	},
	{
		'title': 'Le Rouge et le Noir 红与黑',
		'abs': '在拿破仑帝国时代，红与黑代表着“军队”与“教会”，是有野心的法国青年发展的两个渠道。' +
			'司汤达的《红与黑》中的于连是19世纪欧洲文学中一系列反叛资本社会主义的英雄人物的"始祖"。——俄国作家高尔基'
	}
];


var i = 0;

createItem(imgs.length);

function createItem(n) {
	if (i < n) {
		let times = i;
		let nums = times + 3;
		if (times + 3 > n) {
			nums = n;
		}

		while (times < nums) {
			let item = document.createElement('div');
			let img = document.createElement('img');
			img.setAttribute('src', imgs[times]);

			// 装content： title、abs
			let right = document.createElement('div');
			right.setAttribute('class', 'preview-content');
			let title = document.createElement('div');
			title.setAttribute('class', 'preview-title');
			let abs = document.createElement('div');
			abs.setAttribute('class', 'preview-abs');

			title.innerText = contents[times].title;
			abs.innerText = contents[times].abs;


			item.appendChild(img);
			right.appendChild(title);
			right.appendChild(abs);

			item.appendChild(right);
			previewbox.appendChild(item);
			times++;
		}
		i = times;
	} else {
		console.log('end');
	}
	loadmore.after(createLoadbtn());
}

function removeLoadbtn() {
	let endbtn = document.querySelector('.preview-loadmorebtn');
	endbtn.remove();
}

function createLoadbtn() {
	if (isload) {
		removeLoadbtn();
	}

	isload = true;
	let endbtn = document.createElement('button');
	endbtn.setAttribute('class', 'preview-loadmorebtn');
	endbtn.innerText = '加载更多';
	endbtn.addEventListener('click', function() {
		createItem(imgs.length);
	});

	return endbtn;
}
