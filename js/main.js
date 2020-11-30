const config = {
  // Add root here so rootBounds in entry object is not null
  root: document,
  // Margin to when element should take action
  rootMargin: '-70px',
  // Fine tune threshold. The callback will fired 30 times during intersection. You can change it to any number yout want
  threshold: [...Array(4).keys()].map(x => x / 3)
};

let observer = new IntersectionObserver(function(entries, observer) {

  entries.forEach((entry, index) => {
    const element = entry.target;

    // Get root elemenet (document) coords
    const rootTop = entry.rootBounds.top;
    const rootBottom = entry.rootBounds.height;

    // Get div coords
    const topBound = entry.boundingClientRect.top + 50; // -50 to count for the margine in config
    const bottomBound = entry.boundingClientRect.bottom;

    let className;

    // Do calculations to get class names
    if ((topBound) < rootTop && bottomBound < rootTop) {
      className = "outview-top";
    } else if ((topBound) > rootBottom) {
      className = "outview-bottom";
    } else if ((topBound + 0) < rootBottom && bottomBound > rootBottom) {
      className = "inview-top";
    } else if ((topBound + 0) < rootTop && bottomBound > rootTop) {
      className = "inview-bottom";
    }
    element.setAttribute('data-view', className);

  })
}, config);

const viewbox = document.querySelectorAll('.border');
viewbox.forEach(image => {
  observer.observe(image);
});





window.onload = function openClose() {
  document.getElementById("navButton").onclick = function modal() {
	var element = document.getElementById("modalMenu");
	const style = getComputedStyle(element);
	const display = style.display;
	if (display == "none") {
		element.classList.add("modalOpen");
	} else {
	element.classList.remove("modalOpen");	
}
}
}