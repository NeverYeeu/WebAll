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



const listSize = $$('.web-demo_size > span');
const sizeIframe = $('.web-demo iframe');
const sizeWidths = $$('.size-width')
const sizeHeights = $$('.size-height')

const closeBtn = $('.close-responsive');
const webDemo = $('.web-demo');
const demoBtn = $('.demo-btn')
demoBtn.onclick = () => {
	webDemo.classList.remove('close');
}
closeBtn.onclick = () => {
	webDemo.classList.add('close')
}
listSize.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		$('.web-demo_size > span.choose').classList.remove('choose');
		btn.classList.add('choose');
		let currentWidth = sizeWidths[index].innerText;
		let currentHeight = sizeHeights[index].innerText;
		getValueSize(currentWidth, currentHeight)
	})
})

function getValueSize(width, height) {
	console.log(width )
	sizeIframe.style.width = width + 'px';
	sizeIframe.style.height = height + 'px';
}

