


{
const mediaQuery = window.matchMedia('(min-width: 1024px)')
const config = {
  // Add root here so rootBounds in entry object is not null
  root: null,
  // Margin to when element should take action
  rootMargin: '-30%',
  // Fine tune threshold. The callback will fired 30 times during intersection. You can change it to any number yout want
  threshold: [.1, .5, .2, .1]
};

let observer = new IntersectionObserver(function(entries, observer) {



  entries.forEach((entry, index) => {
    const element = entry.target;

    // Get root elemenet (document) coords
    const rootTop = entry.rootBounds.top;
    const rootBottom = entry.rootBounds.height;

    // Get div coords
    const topBound = entry.intersectionRatio; // -50 to count for the margine in config
    const bottomBound = entry.boundingClientRect.bottom;

    let className;

    // Do calculations to get class names
    if (entry.isIntersecting != true || mediaQuery.matches) {
      className = "outview-top";
    } else if (entry.isIntersecting != true || mediaQuery.matches) {
      className = "outview-bottom";
    } else if (entry.isIntersecting = true) {
      className = "inview-top";
    } else if (entry.isIntersecting = true) {
      className = "inview-bottom";
    }
    element.setAttribute('data-value', className);



  })
}, config);



const viewbox = document.querySelectorAll('.border');
viewbox.forEach(card => {
  observer.observe(card);
});
}



//
{

/*
// Select the node that will be observed for mutations
const targetNode = document.getElementById('card');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true, characterData: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'characterData') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


*/
}




/*var images = document.querySelectorAll('card');
var config = {
  rootMargin: '0px',
  threshold: 0.01
};

var observer;

if ('IntersectionObserver' in window) {
  observer = new IntersectionObserver(onChange, config);
  images.forEach(img => observer.observe(img));
} else {
  console.log('%cIntersection Observers not supported', 'color: red');
  images.forEach(image => loadImage(image));
}

var loadImage = image => {
  image.classList.add('inview');
}

function onChange(changes, observer) {
  changes.forEach(change => {
    if (change.intersectionRatio > 0) {
      // Stop watching and load the image
      loadImage(change.target);
      observer.unobserve(change.target);
    }
    
  });
}*/






// --------------------------------------------------
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


