story.transitionMessage = null;
s.visitedSphere = 0;

/* To preload images */
/* From https://twinery.org/forum/discussion/8195/preloading-background-images-sugarcube-2-0-twine-2 */
(function () {
	const preload = [
        "assets/loading.gif",
        "assets/1dorm.png.gif",
    ];

	window._ImageCache = preload.map(function (url) {
		const image = document.createElement('img');
		image.src = url;
		return image;
	});
})();