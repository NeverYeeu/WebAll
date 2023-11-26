const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sizes = {
	"lamtop": [
		{
			width: 20,
			height: 40
		}	
	],
	"tablet": [
		{
			width: 20,
			height: 40
		}	
	],
	"mobile": [
		{
			width: 20,
			height: 40
		}	
	]
}
const inforWebs = [
	{
		id: 0,
		nameWebsite: 'WebLinks',
		linkImage: 'https://i.postimg.cc/KzQrM3GN/Sekai-Saikyou-No-Shinjuu-Tsukai-2.jpg',
		nameAuthor: 'Xas Duong',
		trailerWeb: 'Đây là website đầu tay của tôi, Một website đọc truyện',
		linkWeb: 'https://neveryeeu.github.io/WebLinks/',
	},
	{
		id: 1,
		nameWebsite: 'WebLinks',
		linkImage: 'https://i.postimg.cc/KzQrM3GN/Sekai-Saikyou-No-Shinjuu-Tsukai-2.jpg',
		nameAuthor: 'Xas Duong',
		trailerWeb: 'Đây là website đầu tay của tôi, Một website đọc truyện',
		linkWeb: 'https://neveryeeu.github.io/WebLinks/',
	},
]
const inforLinks = [
	{srcWeb : 'https://neveryeeu.github.io/WebLinks/'},
	{srcWeb : 'https://neveryeeu.github.io/WebComics/'},
	{srcWeb : 'https://neveryeeu.github.io/WebMusics/'},
]
let colorInfor = $("#col-infor");
colorInfor.innerHTML = inforWebs.map(renderInforWeb).join('');
function renderInforWeb(web){
	let {id, nameWebsite, linkImage, nameAuthor, trailerWeb, linkWeb} = web;
	return (`
	<div class="infor-box">
		<img src=${linkImage} alt="" class="box_img">
		<div class="box_wrap">
			<span class="box_wrap-head">${nameWebsite}</span>
			<div>Tác giả: <span>${nameAuthor}</span></div>
			<div class="box_wrap-intro">${trailerWeb}</div>
			<div class="box-links">
				<a href=${linkWeb} class="box_wrap-link">Tìm Hiểu Thêm</a>
				<div class="demo-btn">Xem Demo
					<i class="fa-solid fa-chevron-down"></i>
				</div>
			</div>
		</div>
	</div>
	`)
}

const listSize = $$('.web-demo_size > .demo_size-box > span');

const sizeIframe = $('.web-demo iframe');
const sizeWidths = $$('.size-width')
const sizeHeights = $$('.size-height')

const closeBtn = $('.close-responsive');
const webDemo = $('.web-demo');
const demoBtns = $$('.demo-btn')


demoBtns.forEach((demoBtn, index) => {
	demoBtn.onclick = () => {
		webDemo.classList.remove('close');
		renderWebDemo(index);
	}
})
closeBtn.onclick = () => {
	webDemo.classList.add('close')
}
listSize.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		$('.web-demo_size div span.choose').classList.remove('choose');
		btn.classList.add('choose');
		let currentWidth = sizeWidths[index].innerText;
		let currentHeight = sizeHeights[index].innerText;
		getValueSize(currentWidth, currentHeight)
	})
})

let responIcon = $$('.respon_icon');
let demoBox = $('.demo_size-box');
function handleNavDemo() {
	responIcon.forEach((icon) => {
		icon.addEventListener('click', () => {
			$('.respon_icon.close').classList.remove('close');
			demoBox.classList.toggle('close')
			icon.classList.add('close');
		})
	})
} handleNavDemo();


// -------------------------------------------------------------------------------------------
function renderWebDemo(index) {
	let iframe = $('.web-demo > iframe');
	iframe.setAttribute('src', inforLinks[index].srcWeb)
}
function getValueSize(width, height) {
	sizeIframe.style.width = width + 'px';
	sizeIframe.style.height = height + 'px';
}
