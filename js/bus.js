function goBack() {
  window.history.back();
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