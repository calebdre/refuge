var curSec, questionaireIdex = 0;

function moveSectionOutToLeft (selector, callback) {
	$(selector)
		.animate({
					 "left": "-100vw",
					 "opacity": "0"
				 }, 1000, callback);
}
function moveSectionInFromRight (selector, callback) {
	$(selector)
		.animate({
					 "right": "0%"
				 }, 1000, callback);
}
function moveToNextScreen (newSec) {
	if (curSec) {
		moveSectionOutToLeft(curSec, function () {
			moveSectionInFromRight(curSec = newSec);
		});
	}
}

window.onload = function () {
	var sections = $(".section");

	$("#section-next-btn").click(function () {
		moveSectionOutToLeft(sections[ questionaireIdex++ ]);
	})
};