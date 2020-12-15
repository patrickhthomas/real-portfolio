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
    var caret = document.getElementById("#caret");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret").css("transform", "rotate(0deg");
}
})


$('.clickIt2').click(function() {
    var showIt = $('#hidden2');
    var hideIt = document.getElementById("#accordionTitle");
    var caret = document.getElementById("#caret2");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret2").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret2").css("transform", "rotate(0deg");
}
})


$('.clickIt3').click(function() {
    var showIt = $('#hidden3');
    var hideIt = document.getElementById("#accordionTitle");
    var caret = document.getElementById("#caret3");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret3").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret3").css("transform", "rotate(0deg");
}
})

$('.clickIt4').click(function() {
    var showIt = $('#hidden4');
    var hideIt = document.getElementById("#accordionTitle");
    var caret = document.getElementById("#caret4");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret4").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret4").css("transform", "rotate(0deg");
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
    var caret = document.getElementById("#caret5");
    var disp = showIt.css('display');
    if (disp === "none") {
    showIt.removeClass("hidden");
    $ ("#caret5").css("transform", "rotate(90deg");
}   else {
    showIt.addClass("hidden");
    $ ("#caret5").css("transform", "rotate(0deg");
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
