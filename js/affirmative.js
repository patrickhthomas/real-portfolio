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

$('.clickIt').click(function() {
    var showIt = $('#hidden');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})


$('.clickIt2').click(function() {
    var showIt = $('#hidden2');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})


$('.clickIt3').click(function() {
    var showIt = $('#hidden3');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})

$('.clickIt4').click(function() {
    var showIt = $('#hidden4');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})

$('#last4').click(function() {
    var showIt = $('#hidden4');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "block") {
    showIt.addClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})


$('.clickIt5').click(function() {
    var showIt = $('#hidden5');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})

$('#last5').click(function() {
    var showIt = $('#hidden5');
    var hideIt = document.getElementById("#accordionTitle");
    var disp = showIt.css('display');
    if (disp === "block") {
    showIt.addClass("hidden");
}   else {
    showIt.addClass("hidden");
}
})
