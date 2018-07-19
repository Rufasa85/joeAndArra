$(document).ready(function() {
	const wedding = new Date('August 15 2020');
	const now = new Date();
	let daysLeft = (wedding-now)/1000/60/60/24;
	$('#daysLeft').html(Math.ceil(daysLeft));
})