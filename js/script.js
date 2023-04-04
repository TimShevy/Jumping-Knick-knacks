let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  snap: boolean = true,
  arrows: false,
  autoplay: true,
  interval: 7000,
  speed: 5000,
  resetProgress: boolean = false,
} );
splide.mount();

