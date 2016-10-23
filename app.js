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
	$("#volunteerBtn").click(function () {
		split(".hello-section", ".types-section", function () {
			var $volunteer = $("#volunteer-form");
			$volunteer.css({ "top": 0 });
			$volunteer.fadeIn();
		});
	});
	$("#refugeeBtn").click(function () {
		split(".hello-section", ".types-section", function () {
			var $refugee = $("#refugee-form");
			$refugee.css({ "top": 0 });
			$refugee.fadeIn();
		});
	});
};