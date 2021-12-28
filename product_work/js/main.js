//burger menu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu__btn');
  let links = menu.find('.burger-menu__link');
  let overlay = menu.find('.burger-menu__overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu__active');
    
    if (menu.hasClass('burger-menu__active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}
burgerMenu('.burger-menu');

// button up 
let btnUp = document.querySelector('.btn-up');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
}

//slider slick
$(function(){
	$('.strategies__content').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});