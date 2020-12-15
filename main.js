window.onscroll = function () {
    moveRotate();
    moveRotate2();
    moveRotate3();
    moveRotate4();
    moveRotate5();
    moveRotate6();
    moveRotate7();
};

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


// Get the modal
var styleGuideWindow = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("styleGuideButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  styleGuideWindow.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  styleGuideWindow.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == styleGuideWindow) {
    styleGuideWindow.style.display = "none";
  }
}




    function moveRotate() {
        let image = document.getElementById("animateObject");
        image.style.transform += "rotate(" + window.pageYOffset/-200 +"deg)";
        image.style.transform += "translateX(" + window.pageYOffset/-17 +"px)";
        image.style.transform += "translateY(" + window.pageYOffset/-77 +"px)";

    }
    
    function moveRotate2() {
        let image = document.getElementById("animateObject2");
        image.style.transform += "rotate(" + window.pageYOffset/200 +"deg)";
        image.style.transform += "translateX(" + window.pageYOffset/17 +"px)";
        image.style.transform += "translateY(" + window.pageYOffset/77 +"px)";
    }
    
    function moveRotate3() {
        let image = document.getElementById("animateObject6");
        image.style.transform += "rotate(" + window.pageYOffset/130 +"deg)";
        image.style.transform += "translateY(" + window.pageYOffset/-70 +"px)";
    }
    
    function moveRotate4() {
        let image = document.getElementById("animateObject4");
        image.style.transform += "translateY(" + window.pageYOffset/-70 +"px)";
        image.style.transform += "translateX(" + window.pageYOffset/-70 +"px)";
    }
    
    function moveRotate5() {
        let image = document.getElementById("animateObject5");
        image.style.transform += "translateY(" + window.pageYOffset/-70 +"px)";
        image.style.transform += "translateX(" + window.pageYOffset/-70 +"px)";
    }
    
    function moveRotate6() {
        let image = document.getElementById("animateObject6");
        image.style.transform += "translateY(" + window.pageYOffset/-70 +"px)";
        image.style.transform += "translateX(" + window.pageYOffset/-70 +"px)";
    }
    
    function moveRotate7() {
        let image = document.getElementById("animateObject7");
        image.style.transform += "rotate(" + window.pageYOffset/130 +"deg)";
        image.style.transform += "translateY(" + window.pageYOffset/-70 +"px)";
    }
