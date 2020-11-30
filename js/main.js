


const config = {
  // Add root here so rootBounds in entry object is not null
  root: document,
  // Margin to when element should take action
  rootMargin: '0%',
  // Fine tune threshold. The callback will fired 30 times during intersection. You can change it to any number yout want
  threshold: [...Array(24).keys()].map(x => x / 48)
};

let observer = new IntersectionObserver(function(entries, observer) {

  entries.forEach((entry, index) => {
    var element = entry.target;

    var viewportOffset = entry.getBoundingClientRect();
    // Get root elemenet (document) coords
    var margin = entry.intersectionRatio;
    var top = viewportOffset.top;

    // Get div coords
    var divTop = entry.rootBounds.top; // -50 to count for the margine in config
    var divBottom = entry.rootBounds.bottom;

    let className;


    // Do calculations to get class names
    if (margin > 0.3 && divBottom < margin) {
      className = "outview-top";
    console.log ("current margin is" + " " + entry.intersectionRatio);
    console.log ("current offset is" + " " + window.pageYOffset);
    console.log(divTop);
    console.log(divBottom);

    } else if ((divTop) > top) {
      className = "outview-bottom";
    console.log ("current margin is" + " " + entry.intersectionRatio);
    console.log ("current offset is" + " " + window.pageYOffset);
    console.log(divTop);
    console.log(divBottom);

    } else if ((divTop + 0) < top && divBottom > top) {
      className = "inview-top";
    console.log ("current margin is" + " " + entry.intersectionRatio);
    console.log ("current offset is" + " " + window.pageYOffset);
    console.log(divTop);
    console.log(divBottom);

    } else if ((divTop + 0) < margin && divBottom > margin) {
      className = "inview-bottom";
    console.log ("current margin is" + " " + entry.intersectionRatio);
    console.log ("current offset is" + " " + window.pageYOffset);
    console.log(divTop);
    console.log(divBottom);

    }
    element.setAttribute('data-view', className);

    console.log ("current margin is" + " " + entry.intersectionRatio);
    console.log ("current offset is" + " " + window.pageYOffset);
    console.log(divTop);
    console.log(divBottom);



  })
}, config);

const viewbox = document.querySelectorAll('.border');
viewbox.forEach(image => {
  observer.observe(image);
  config;
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