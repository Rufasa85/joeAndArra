$(document).ready(function() {
	const wedding = new Date('August 15 2020');
	const now = new Date();
	let daysLeft = (wedding-now)/1000/60/60/24;
	$('#daysLeft').html(Math.ceil(daysLeft));
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
})