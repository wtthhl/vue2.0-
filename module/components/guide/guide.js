var Guide = Vue.extend({
	template:'#guide_tpl',
	data: function() {
		return {
			guideimg:[
			{id: '1', img: '0.jpg', title: '农家一碗香'},
			{id: '2', img: '2.jpg', title: '外婆菜'},
			{id: '3', img: '3.jpg', title: '佛手金卷'},
			{id: '4', img: '4.jpg', title: '农家一锅鲜'},
			{id: '5', img: '5.jpg', title: '特色创新菜'},
			{id: '6', img: '6.jpg', title: '酒店特色菜'},
			{id: '7', img: '7.jpg', title: '家常菜谱'},
			{id: '8', img: '8.jpg', title: '东坡肉'},
			{id: '8', img: '1.jpg', title: '东坡肉'}
			],
			imglist:[
				{url:'01.jpg'},
				{url:'07.jpg'},
				{url:'04.jpg'},
				{url:'03.jpg'}
			]
		}
	},
	mounted:function() {
		var swiper = new Swiper('.swiper-container', {
		      slidesPerView: 1,
		      spaceBetween: 30,
		      loop: true,
		      autoplay: true,
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      }
    	})

	}
})
module.exports = Guide