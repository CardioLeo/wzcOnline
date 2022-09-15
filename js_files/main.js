// Author: William Z Chadwick
// Date Created: 09/14/2022
// Date Modified: 09/14/2022
// Description: A place for JavaScript code for my website updates during Promineo Tech Front End Bootcamp Week 7;
//

var coll = document.getElementByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

// the above code was taken from (though deliberately typed out for practice) the following source: https://www.w3schools.com/howto/howto_js_collapsible.asp
