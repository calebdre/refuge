//function fadeIn (selector) {
//	$(selector).animate({
//							"opacity": "1"
//						}, 500);
//}
function split (topS, botS, callback) {
	var speed = 500;
	$(topS).animate({
						"top": "-100vh"
					}, speed, function () {
		$(topS).fadeOut();
		callback();
	});
	$(botS).animate({
						"top": "100vh"
					}, speed, function () {
		$(botS).fadeOut();
		callback();
	});
}

window.onload = function () {
	$("#volunteerBtn, .volunteer-row, .volunteer-row img, .volunteer-row h1, .volunteer-row p").click(function () {
		split(".hello-section", ".types-section", function () {
			var $volunteer = $("#volunteer-form");
			$volunteer.css({ "top": 0 });
			$volunteer.fadeIn();
		});
	});
	$("#refugeeBtn, .refugee-row, .refugee-row img, .refugee-row h1, .refugee-row p").click(function () {
		split(".hello-section", ".types-section", function () {
			var $refugee = $("#refugee-form");
			$refugee.css({ "top": 0 });
			$refugee.fadeIn();
		});
	});
};