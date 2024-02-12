/* Selectiong all icons and stores them in a variable as a NodeList*/
const icons = document.querySelectorAll('.section-1-icons i');

/* Initialize the counter to track the icons being manipulated */
let i = 1;

/* Interval function */
setInterval(() => {

	i++; 

/* Find the icon with change class active then removes the change class. */
	const icon = document.querySelector('.section-1-icons i.change');

	icon.classList.remove('change');

/* Determines which icon gets the change class next. */
	if (i > icons.length){
		icons[0].classList.add('change');
		i=1;
	} else {
		icon.nextElementSibling.classList.add('change');
	}


}, 3000);

/* Select the menu to add events */

document.querySelector('.menu').addEventListener('click',() =>{
	document.querySelectorAll('.target').forEach((item) =>{
		item.classList.toggle('change')
	})
})