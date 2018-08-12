$(document).ready(function() {
	const wedding = new Date('August 15 2020');
	const now = new Date();
	let daysLeft = (wedding-now)/1000/60/60/24;
	$('#daysLeft').html(Math.ceil(daysLeft));
  //flexing directions cards on click
	const directionCards = document.querySelectorAll('.directionCard')
	console.log(directionCards);
	function toggleOpen() {
      this.classList.toggle('open');
    }
    function toggleActive(e) {
    	console.log(e);	
      	if (e.propertyName.includes('flex')) {
        	this.classList.toggle('open-active');
      	}
    }
  directionCards.forEach(card=>card.addEventListener('click', toggleOpen));
  directionCards.forEach(card=>card.addEventListener('transitionend', toggleActive));
  //sliding in different segements on scroll reveal
  function debounce(func, wait = 5, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    const slideStuff = document.querySelectorAll('.slide-in');
    function checkSlide(e) {
      // console.log(window.scrollY)
      slideStuff.forEach(image=> {
        const slideInAt = window.scrollY + window.innerHeight - image.clientHeight/2;
        console.log(image.clientHeight)
        const imageBottom = image.offsetTop + image.clientHeight;
        const isHalfShown = slideInAt>image.offsetTop;
        console.log(isHalfShown)
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown ) {
          image.classList.add('active');
          console.log(image.classList)
        } 
      })
    };

    window.addEventListener('scroll', debounce(checkSlide));
})